import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const onSubmit = () => {};

  return (
    <section>
      <div className="flex items-center justify-center mt-4 lg:mt-10">
        <h2 className="rounded-full border border-[#0D7C66] p-6 h-32 w-32 text-center">
          <FaShoppingCart className="w-10 h-10 mx-auto text-[#0D7C66]" />
          <span className="font-semibold text-xs mt-4 line-clamp-none">
            Trendy Bazar
          </span>
        </h2>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="w-11/12 lg:w-1/2 px-4 py-10 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">Register your account</h1>
          <Form submitHandler={onSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <FormInput
                    name="First Name"
                    type="name"
                    label="First Name"
                    required
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <FormInput
                    name="Middle Name"
                    type="name"
                    label="Middle Name"
                    placeholder="Middle Name"
                  />
                </div>
                <div>
                  <FormInput
                    name="Last Name"
                    type="name"
                    label="Last Name"
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
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
              <div>
                <Button className="bg-[#0D7C66] py-2" type="submit">
                  Register
                </Button>
              </div>
            </div>
          </Form>
          <div className="text-left mt-3 text-sm">
            {"Already have an account? "}
            <Link
              to="/login"
              className="text-primary hover:underline hover:text-[#0D7C66]"
            >
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
