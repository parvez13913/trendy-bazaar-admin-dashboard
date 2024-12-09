import { isLoggedIn } from "@/auth-service/auth-service";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const userLoggedIn = isLoggedIn();

  return (
    <div className="border-b sticky top-0">
      <div className="h-16 px-8 flex items-center">
        <div className="ml-auto flex items-center space-x-4">
          {userLoggedIn ? (
            <FaUserAlt />
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
