import { LuUserCog, LuUserPlus } from "react-icons/lu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./sidebar";

const AppSidebar = () => {
  const items = [
    {
      title: "Create Admin",
      url: "/request-admin-register",
      icon: LuUserPlus,
    },
    {
      title: "Manage Admin",
      url: "/manage-admin",
      icon: LuUserCog,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <div className="flex items-end justify-end">
        <SidebarTrigger />
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Trendy Bazar</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
export default AppSidebar;
