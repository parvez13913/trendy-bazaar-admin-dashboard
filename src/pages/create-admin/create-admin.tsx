import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCreateAdminMutation } from "@/redux/api/auth-api";
import { createAdminSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const CreateAdminPage = () => {
  const [createAdmin] = useCreateAdminMutation();
  const location = useLocation();
  console.log(location);

  const form = useForm<z.infer<typeof createAdminSchema>>({
    resolver: zodResolver(createAdminSchema),
  });

  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Creating.", {
      duration: 2000,
    });

    try {
      const response = await createAdmin(data).unwrap();

      if (response?.success) {
        toast.success("Admin created successfully");
      }
    } catch (error) {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <div className={`min-h-screen`}>
      <div className="py-10">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-3xl font-bold">Create Admin</CardTitle>
            </div>
            <CardDescription>
              Enter the details for the new admin account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form submitHandler={onSubmit} {...form}>
              <div className="grid grid-cols-3 space-x-4 mb-10">
                <div>
                  <FormInput
                    name="firstName"
                    type="text"
                    label="First Name"
                    required
                    placeholder="Enter First Name"
                  />
                </div>

                <div>
                  <FormInput
                    name="middleName"
                    type="text"
                    label="Middle Name"
                    required
                    placeholder="Enter Middle Name"
                  />
                </div>

                <div>
                  <FormInput
                    name="lastName"
                    type="text"
                    label="Last Name"
                    required
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 space-x-4 my-10">
                <div>
                  <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    required
                    placeholder="email"
                  />
                </div>
                <div>
                  <FormInput
                    name="contactNo"
                    type="number"
                    label="Contact Number"
                    required
                    placeholder="Enter contact number"
                  />
                </div>
                <div>
                  <FormInput
                    name="address"
                    type="text"
                    label="Address"
                    required
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 space-x-4 my-10">
                <div>
                  <FormSelect
                    name="gender"
                    placeholder="Select gender"
                    label="Gender"
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                      { value: "Other", label: "Other" },
                    ]}
                    required
                  />
                </div>
                <div>
                  <FormSelect
                    name="bloodGroup"
                    label="Blood Group"
                    placeholder="Select blood group"
                    options={[
                      { value: "A+", label: "A+" },
                      { value: "A-", label: "A-" },
                      { value: "B+", label: "B+" },
                      { value: "B-", label: "B-" },
                      { value: "AB+", label: "AB+" },
                      { value: "AB-", label: "AB-" },
                      { value: "O+", label: "O+" },
                      { value: "O-", label: "O-" },
                    ]}
                    required
                  />
                </div>
                <div>
                  <FormDatePicker
                    name="dateOfBirth"
                    label="Date Of Birth"
                    required
                  />
                </div>
              </div>
              <Button className="md:col-span-2 bg-primary" type="submit">
                Create Admin
              </Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAdminPage;
