import Button from "@/components/Forms/Button";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CreateAdminPage = () => {
  const onSubmit = () => {};

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
            <Form submitHandler={onSubmit}>
              <div className="grid grid-cols-3 space-x-4 mb-10">
                <div>
                  <FormInput
                    name="First Name"
                    type="firstName"
                    label="First Name"
                    required
                    placeholder="Enter First Name"
                  />
                </div>

                <div>
                  <FormInput
                    name="Middle Name"
                    type="middleName"
                    label="Middle Name"
                    required
                    placeholder="Enter Middle Name"
                  />
                </div>

                <div>
                  <FormInput
                    name="Last Name"
                    type="lastName"
                    label="Last Name"
                    required
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 space-x-4 my-10">
                <div>
                  <FormInput
                    name="Contact Number"
                    type="contactNo"
                    label="Contact Number"
                    required
                    placeholder="Enter contact number"
                  />
                </div>
                <div>
                  <FormInput
                    name="Address"
                    type="address"
                    label="Address"
                    required
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 space-x-4 my-10">
                <div>
                  <FormSelect
                    name="gender"
                    placeholder="Select gender"
                    options={[
                      { value: "Male", label: "Male" },
                      { value: "Female", label: "Female" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                </div>
                <div>
                  <FormSelect
                    name="bloodGroup"
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
                  />
                </div>
              </div>
              {/* <div>
                <Label htmlFor="dateBirth">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className={`w-full justify-start text-left font-normal ${
                        !date && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div> */}
              <Button className="md:col-span-2 bg-primary">Create Admin</Button>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateAdminPage;
