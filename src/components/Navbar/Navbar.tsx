import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="border-b sticky top-0">
      <div className="h-16 px-8 flex items-center">
        <div className="ml-auto flex items-center space-x-4">
          <Link className="cursor-pointer hover:opacity-50" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
