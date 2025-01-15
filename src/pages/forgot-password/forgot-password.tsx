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
import { useForgotPasswordMutation } from "@/redux/api/auth-api";
import { forgotPasswordSchema } from "@/utils/zood-schemas/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";

const ForgotPasswordPage = () => {
  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [forgotPassword] = useForgotPasswordMutation();

  const onSubmit = async (data: Record<string, unknown>) => {
    try {
      const response = await forgotPassword({ ...data });
      console.log(response);

      if (response?.data?.success) {
        toast.success("Check your email");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Toaster />
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Forgot Password
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email address and we'll send you a link to reset your
            password.
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
                  placeholder="Email"
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
export default ForgotPasswordPage;
