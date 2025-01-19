import { storeUserInfo } from "@/auth-service/auth-service";
import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useLoginMutation } from "@/redux/api/auth-api";
import { loginSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const LoginPage: React.FC = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "parvezz13913@gmail.com",
      password: "password",
    },
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    const toastId = toast.loading("Logging in.", {
      duration: 2000,
    });

    try {
      const response = await login({ ...data });

      if (response?.data?.message) {
        toast.success("User is Logged in successfully");
        navigate("/profile");
      }
      storeUserInfo({ accessToken: response?.data?.token });
    } catch (error) {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <section>
      <motion.div
        className="flex items-center h-screen text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 py-10 w-96 mx-auto shadow-2xl rounded-lg border">
          <h1 className="text-xl font-semibold text-center">
            Login to account
          </h1>
          <p className="text-sm my-2 text-center">
            Enter your{" "}
            <span className="font-serif underline">email & password</span> to
            login
          </p>
          <Form submitHandler={onSubmit} {...form}>
            <div className="space-y-4 w-3/4 mx-auto">
              <div className="space-y-2">
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  required
                  placeholder="Email"
                />
              </div>
              <div className="space-y-2">
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  required
                  placeholder="Password"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <Link
                    to="/forgot-password"
                    className="hover:text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-foreground font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Login
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </motion.div>
    </section>
  );
};

export default LoginPage;
