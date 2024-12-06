import { Outlet } from "react-router-dom";
import AppSidebar from "../ui/app-sidebar";
import { SidebarProvider } from "../ui/sidebar";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
