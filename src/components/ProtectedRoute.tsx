import { getUserInfo } from "@/auth-service/auth-service";
import { JwtPayload } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface UserInfo extends JwtPayload {
  role: string;
}

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
  const userInfo = getUserInfo() as UserInfo;

  if (!allowedRoles.includes(userInfo.role.toString())) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
