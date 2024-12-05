import { useState } from "react";
import { LeftSidebar } from "../Sidebar/Sidebar";
import { SidebarProvider } from "../ui/sidebar";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* <NavBar /> */}
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <LeftSidebar />
      </SidebarProvider>
    </div>
  );
};

export default MainLayout;
