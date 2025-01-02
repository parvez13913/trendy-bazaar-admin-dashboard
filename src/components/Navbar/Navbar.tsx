import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
} from "@/auth-service/auth-service";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authKey } from "@/constants/storage-key";
import { useLogoutMutation } from "@/redux/api/auth-api";
import { JwtPayload } from "jwt-decode";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Forms/Button";

interface UserInfo extends JwtPayload {
  role: string;
  userEmail: string;
}

const NavBar = () => {
  const userLoggedIn = isLoggedIn();
  const userInfo = getUserInfo() as UserInfo | "";
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const logoutData = {
    email: userInfo && userInfo?.userEmail,
  };

  const handleLogout = async () => {
    removeUserInfo(authKey);
    await logout(logoutData);
    navigate("/login");
  };

  return (
    <div className="border-b sticky top-0">
      <div className="h-16 px-8 flex items-center">
        <div className="ml-auto flex items-center space-x-4 text-primary">
          {userLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <FaUserAlt className="h-[1.2rem] w-[1.2rem] text-primary" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
                {userInfo && (
                  <DropdownMenuItem>
                    {userInfo.role.toString()}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link className="cursor-pointer hover:opacity-50" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
