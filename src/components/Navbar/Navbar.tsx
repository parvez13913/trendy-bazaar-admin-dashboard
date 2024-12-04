import { PiShoppingBagOpenFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import MainNav from "./MainNav";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="h-16 px-8 flex items-center">
        <div className="flex items-center space-x-2 text-primary hover:opacity-50 cursor-pointer p-3 hover:bg-primary-foreground">
          <PiShoppingBagOpenFill className="text-3xl" />
          <h1 className="text-xl">Trendy Bazar</h1>
        </div>
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
