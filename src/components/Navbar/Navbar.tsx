import MainNav from "./MainNav";

const NavBar = () => {
  return (
    <div className="border-b">
      <div className="h-16 px-4 flex items-center">
        <div>this will be a store switcher</div>
        <div>
          <MainNav className="mx-6" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          Register / Login
        </div>
      </div>
    </div>
  );
};

export default NavBar;
