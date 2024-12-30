import { storeUserInfo } from "@/auth-service/auth-service";
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
import { useCreateAdminMutation } from "@/redux/api/auth-api";
import { createAdminSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const CreateAdminPage = () => {
  const [createAdmin] = useCreateAdminMutation();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract email from URL
  const token = location.search;

  let prefilledEmail = "";

  try {
    const decodedToken = JSON.parse(atob(token!.split(".")[1]));
    prefilledEmail = decodedToken?.email || "";
  } catch (error) {
    console.error("Failed to decode token:", error);
  }

  // Initialize form with default values
  const form = useForm<z.infer<typeof createAdminSchema>>({
    resolver: zodResolver(createAdminSchema),
    defaultValues: {
      email: prefilledEmail,
    },
  });

  const onSubmit = async (data: any) => {
    data.email = prefilledEmail;
    data.role = "ADMIN";

    const toastId = toast.loading("Creating.", {
      duration: 2000,
    });

    try {
      const response = await createAdmin(data);
      if (response.data.success) {
        toast.success(`${response.data.message}`);
        navigate("/");
      }

      storeUserInfo({ accessToken: response?.data?.token });
    } catch (error) {
      toast.error("Something went wrong.", { id: toastId });
    }
  };

  return (
    <motion.div
      className="flex items-center h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-96 mx-auto shadow-2xl">
        <CardHeader>
          <div className="flex justify-center items-center">
            <CardTitle className="text-3xl font-bold">Create Admin</CardTitle>
          </div>
          <div className="flex justify-center items-center">
            <CardDescription>
              Enter the details for the new admin account
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Form submitHandler={onSubmit} {...form}>
            <div className="space-y-4 mb-4">
              <div>
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  required
                  readOnly={true}
                  defaultValue={prefilledEmail}
                />
              </div>
              <div>
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  required
                  placeholder="Password"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-foreground font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Create Admin
            </Button>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CreateAdminPage;
