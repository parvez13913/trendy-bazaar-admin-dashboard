import { Outlet } from "react-router-dom";
import AppSidebar from "../ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
