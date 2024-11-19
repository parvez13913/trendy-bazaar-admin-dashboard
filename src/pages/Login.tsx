import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const onSubmit = () => {};

  return (
    <section>
      <h2 className="text-2xl font-semibold text-center my-4 lg:my-10">
        Trendy Bazar
      </h2>
      <div className="flex justify-center items-center">
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
              <div className="space-y-2">
                <Button variant="default" className="w-full" type="submit">
                  Login
                </Button>
              </div>
            </div>
          </Form>
          <div className="text-left mt-3 text-sm">
            {"You don't have an account yet? "}
            <Link to="#" className="text-primary hover:underline">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
