import { getUserInfo } from "@/auth-service/auth-service";
import { JwtPayload } from "jwt-decode";
import { BiSolidObjectsHorizontalLeft } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
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

interface UserInfo extends JwtPayload {
  role: string;
}

const AppSidebar = () => {
  const userInfo = getUserInfo() as UserInfo;
  const userRole = userInfo?.role || "ADMIN";

  // Sidebar items
  const items = [
    {
      title: "Profile",
      url: "/profile",
      icon: FaRegUser,
      roles: ["ADMIN", "SUPER_ADMIN"],
    },
    {
      title: "Create Product Category",
      url: "/create-product-category",
      icon: BiSolidObjectsHorizontalLeft,
      roles: ["ADMIN"],
    },
    {
      title: "Create Admin",
      url: "/request-admin-register",
      icon: LuUserPlus,
      roles: ["SUPER_ADMIN"],
    },
    {
      title: "Manage Admin",
      url: "/manage-admin",
      icon: LuUserCog,
      roles: ["SUPER_ADMIN"],
    },
  ];

  // Filter items based on user role
  const visibleItems = items.filter((item) => item.roles.includes(userRole));

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
              {visibleItems.map((item) => (
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
