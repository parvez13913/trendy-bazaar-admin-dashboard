import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Settings, Users } from "lucide-react";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

interface NavItem {
  title: string;
  to: string;
  icon: React.ElementType;
}

const items: NavItem[] = [
  { title: "Home", to: "/", icon: Home },
  { title: "Users", to: "/users", icon: Users },
  { title: "Settings", to: "/settings", icon: Settings },
];

export function LeftSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <h1>Trendy Bazar</h1>
            <div className="flex items-end justify-end top-0">
              <MdArrowBackIos className="text-2xl text-red-700" />
            </div>
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.to}>
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
}
