import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import AppSidebar from "../ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden font-poppins">
        <AppSidebar />
        <SidebarInset className="flex h-full w-full ">
          <NavBar />
          <div>
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
