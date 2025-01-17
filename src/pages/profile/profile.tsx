import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FaCalendarAlt, FaHome, FaMobile } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbGenderMale } from "react-icons/tb";

const ProfilePage = () => {
  const admin = {
    firstName: "Md",
    middleName: "Parvez Rahman",
    lastName: "Rahman",
    email: "rahmanparvez13913@gmail.com",
    password: "123456",
    role: "ADMIN",
    contactNo: "+8801977398607",
    gender: "Male",
    bloodGroup: "B+",
    dateOfBirth: "01-08-2000",
    address: "Garagonj",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt={`${admin.firstName} ${admin.lastName}`}
              />
              <AvatarFallback>
                {admin.firstName[0]}
                {admin.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-semibold mb-2">{`${admin.firstName} ${admin.middleName} ${admin.lastName}`}</h2>
            <h2>{admin.role}</h2>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <RxEnvelopeClosed className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Email:</dt>
                <dd>{admin.email}</dd>
              </div>
              <div className="flex items-center">
                <FaMobile className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Contact:</dt>
                <dd>{admin.contactNo}</dd>
              </div>
              <div className="flex items-center">
                <TbGenderMale className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Gender:</dt>
                <dd>{admin.gender}</dd>
              </div>
              <div className="flex items-center">
                <IoIosPerson className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Blood Group:</dt>
                <dd>{admin.bloodGroup}</dd>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Date of Birth:</dt>
                <dd>{admin.dateOfBirth}</dd>
              </div>
              <div className="flex items-center">
                <FaHome className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Address:</dt>
                <dd>{admin.address}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
