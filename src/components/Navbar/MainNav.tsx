import { cn } from "@/lib/utils";
import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const routes = [
    {
      href: "/home",
      label: "Home",
      icon: <IoHome />,
    },
  ];
  return (
    <nav className={cn(`flex items-center space-x-4 lg:space-x-6`, className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          to={route.href}
          className={cn(
            `font-medium transition-colors hover:text-primary text-2xl`
          )}
        >
          {route.icon}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
