import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRequestAdminRegisterMutation } from "@/redux/api/auth-api";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";

const RequestAdminPage = () => {
  const [requestAdminRegister] = useRequestAdminRegisterMutation();
  const onSubmit = async (data: React.FormEvent) => {
    try {
      const response = await requestAdminRegister(data);

      if (response) {
        toast.success("Admin created successfully");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-[calc(100vh-20vh)]"
      >
        <Card className="w-96 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-800">
              Admin Register
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Request admin access with your email
            </CardDescription>
          </CardHeader>
          <Form submitHandler={onSubmit}>
            <CardContent>
              <div className="space-y-4">
                <div className="relative">
                  <FormInput
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    className="pr-10"
                    required
                  />
                  <motion.span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    @
                  </motion.span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-foreground font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Request
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
};

export default RequestAdminPage;
