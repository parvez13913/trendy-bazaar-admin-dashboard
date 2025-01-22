"use client";

import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { updateProfileSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

const EditProfilePage = () => {
  const [date, setDate] = useState<Date>();
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
  });

  const onSubmit = async (data: Record<string, unknown>) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl">
            Edit Profile
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Update your personal information here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form submitHandler={onSubmit} {...form} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <FormInput
                  name="firstName"
                  type="text"
                  label="First Name"
                  required
                  placeholder="First Name"
                />
              </div>
              <div>
                <FormInput
                  name="middleName"
                  type="text"
                  label="Middle Name"
                  placeholder="Middle Name"
                />
              </div>

              <div>
                <FormInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  required
                  placeholder="Last Name"
                />
              </div>

              <div>
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  required
                  placeholder="Email"
                />
              </div>

              <div>
                <FormInput
                  name="contactNo"
                  type="text"
                  label="Contact No"
                  required
                  placeholder="Contact No"
                />
              </div>
              <div>
                <FormInput
                  name="address"
                  type="text"
                  label="Address"
                  required
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Button
                type="submit"
                className="w-full sm:w-2/3 md:w-1/2 bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-foreground font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Update Profile
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfilePage;
