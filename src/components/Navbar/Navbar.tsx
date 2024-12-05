import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const NavBar = () => {
  return (
    <div className="border-b sticky top-0 bg-primary-foreground">
      <div className="h-16 px-8 flex items-center">
        <div>
          <MainNav className="mx-8" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            className="cursor-pointer bg-primary text-white p-3 rounded-sm font-normal hover:opacity-50"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
