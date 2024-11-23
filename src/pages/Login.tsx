import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const onSubmit = () => {};

  return (
    <section>
      <div className="flex items-center justify-center mt-4 lg:mt-10">
        <h2 className="rounded-full border border-[#0D7C66] p-6 h-32 w-32 text-center">
          <FaShoppingCart className="w-10 h-10 mx-auto text-[#0D7C66]" />
          <span className="font-bold text-xs mt-4 line-clamp-none">
            Trendy Bazar
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="w-11/12 lg:w-1/2 px-4 py-10 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold">Login to account</h1>
          <p className="text-sm text-muted-foreground my-2">
            Enter your email & password to login
          </p>
          <Form submitHandler={onSubmit}>
            <div className="space-y-4">
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
                />
              </div>
              <div className="space-y-4">
                <div>
                  <Link to="/forgot-password">Forgot password?</Link>
                </div>
              </div>
              <div>
                <Button className="w-full bg-[#0D7C66] py-2" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </Form>
          <div className="text-left mt-3 text-sm">
            {"You don't have an account yet? "}
            <Link
              to="/register"
              className="text-primary hover:underline hover:text-[#0D7C66]"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
