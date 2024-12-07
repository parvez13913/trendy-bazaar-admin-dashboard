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
          <div className="flex-1 space-y-5 overflow-auto pb-5">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;

{
  /* <main className="flex h-screen w-full overflow-hidden font-poppins">
<aside className="h-full w-[17%] bg-secondary">
  <Sidebar />
</aside>
<div className="flex h-full w-[83%] flex-col">
  <div className="flex-1 space-y-5 overflow-auto px-5 pb-5">
    <Navbar />
    <Outlet />
  </div>
</div>
</main> */
}
