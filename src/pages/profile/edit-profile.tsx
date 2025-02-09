import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import ImageUpload from "@/components/Forms/image-upload";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUpdateProfileMutation } from "@/redux/api/profile-api";
import { updateProfileSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import type { z } from "zod";

const EditProfilePage = () => {
  const [updateProfile] = useUpdateProfileMutation();
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
  });

  const onSubmit = async (values: any) => {
    try {
      const { file, ...obj } = values;
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
      }
      formData.append("data", JSON.stringify(obj));

      const response = await updateProfile(formData);

      if (!!response) {
        toast.success(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="px-4 py-8 min-h-screen">
      <Toaster />
      <Card>
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
            <div className="grid grid-cols-3 space-x-3">
              <div>
                <FormInput
                  name="firstName"
                  type="text"
                  label="First Name"
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
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 space-x-3">
              <div>
                <FormInput
                  name="contactNo"
                  type="text"
                  label="Contact No"
                  placeholder="Contact No"
                />
              </div>
              <div>
                <FormInput
                  name="address"
                  type="text"
                  label="Address"
                  placeholder="Address"
                />
              </div>
              <div>
                <FormDatePicker name="dateOfBirth" label="Date Of Birth" />
              </div>
            </div>

            <div className="mt-4 w-1/3">
              <ImageUpload name="profileImage" />
            </div>
            <div className="flex items-center justify-center my-4">
              <Button
                type="submit"
                className="w-full sm:w-2/3 md:w-1/4 bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-foreground font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
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
