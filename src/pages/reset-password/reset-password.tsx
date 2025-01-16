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
import { useResetPasswordMutation } from "@/redux/api/auth-api";
import { resetPasswordSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { z } from "zod";

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.search;

  let prefilledEmail = "";

  try {
    const decodedToken = JSON.parse(atob(token!.split(".")[1]));
    prefilledEmail = decodedToken?.email || "";
  } catch (error) {
    console.error("Failed to decode token:", error);
  }

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: prefilledEmail,
    },
  });
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async (data: Record<string, unknown>) => {
    data.email = prefilledEmail;

    try {
      const response = await resetPassword(data);
      if (!!response?.data?.success) {
        navigate("/login");
        toast(response?.data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Toaster />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Reset Password
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email and new password to reset your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form submitHandler={onSubmit} {...form}>
            <div className="space-y-4 w-3/4 mx-auto">
              <div className="space-y-2">
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  required
                  readOnly={true}
                  defaultValue={prefilledEmail}
                />
              </div>
              <div className="space-y-2">
                <FormInput
                  name="newPassword"
                  type="password"
                  label="New Password"
                  required
                  placeholder="New Password"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-foreground font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Send
                </Button>
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
