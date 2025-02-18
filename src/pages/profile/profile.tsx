import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetProfileQuery } from "@/redux/api/profile-api";
import { Loader2 } from "lucide-react";
import { FaCalendarAlt, FaHome, FaMobile } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import { TbGenderMale } from "react-icons/tb";

const ProfilePage = () => {
  const { data, isLoading } = useGetProfileQuery("");

  if (isLoading) {
    return <Loader2 className="w-8 h-8 animate-spin" />;
  }

  return (
    <div className="mx-auto px-6 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage
                src={data?.profile?.data?.profileImage}
                alt={`${data?.profile?.data?.firstName} ${data?.profile?.data?.lastName}`}
              />
              <AvatarFallback>
                {data?.profile?.data?.firstName[0]}
                {data?.profile?.data?.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-semibold mb-2">{`${data?.profile?.data?.firstName} ${data?.profile?.data?.middleName} ${data?.profile?.data?.lastName}`}</h2>
            <h2>{data?.profile?.data?.role}</h2>
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
                <dd>{data?.profile?.data?.email}</dd>
              </div>
              <div className="flex items-center">
                <FaMobile className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Contact:</dt>
                <dd>{data?.profile?.data?.contactNo}</dd>
              </div>
              <div className="flex items-center">
                <TbGenderMale className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Gender:</dt>
                <dd>{data?.profile?.data?.gender}</dd>
              </div>
              <div className="flex items-center">
                <IoIosPerson className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Blood Group:</dt>
                <dd>{data?.profile?.data?.bloodGroup}</dd>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Date of Birth:</dt>
                <dd>{data?.profile?.data?.dateOfBirth}</dd>
              </div>
              <div className="flex items-center">
                <FaHome className="mr-2 h-4 w-4" />
                <dt className="font-semibold mr-2">Address:</dt>
                <dd>{data?.profile?.data?.address}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
