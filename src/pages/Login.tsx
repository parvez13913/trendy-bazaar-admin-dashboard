import { storeUserInfo } from "@/auth-service/auth-service";
import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useLoginMutation } from "@/redux/api/auth-api";
import { loginSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
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

  const onSubmit = async (data: { email: string; password: string }) => {
    const toastId = toast.loading("Logging in.", {
      duration: 2000,
    });

    try {
      const response = await login({ ...data }).unwrap();

      if (response?.success) {
        toast.success("User is Logged in successfully");
        navigate("/");
      }
      storeUserInfo({ accessToken: response?.token });
    } catch (error) {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <section>
      <div className="mt-4 lg:mt-32">
        {/* <h2 className="rounded-full border border-primary p-6 h-32 w-32 text-center">
          <FaShoppingCart className="w-10 h-10 mx-auto text-primary" />
          <span className="font-bold text-xs mt-4 line-clamp-none">
            Trendy Bazar
          </span>
        </h2> */}
      </div>
      <div className="flex justify-center">
        <div className="w-11/12 lg:w-1/2 px-4 py-10 rounded-lg shadow-md bg-primary-foreground">
          <h1 className="text-xl font-semibold text-center">
            Login to account
          </h1>
          <p className="text-sm text-muted-foreground my-2 text-center">
            Enter your{" "}
            <span className="text-primary font-serif underline">
              email & password
            </span>{" "}
            to login
          </p>
          <Form submitHandler={onSubmit} {...form}>
            <div className="space-y-4 w-3/4 mx-auto">
              <div className="space-y-2">
                <FormInput
                  name="Email"
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
                <Button className="w-full bg-primary py-2" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
