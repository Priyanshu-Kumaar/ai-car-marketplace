"use client";
import React from "react";
import { LayoutDashboard, Car, Calendar, Cog, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
    },
    {
      label: "Cars",
      icon: Car,
      href: "/admin/cars",
    },
    {
      label: "Test Drives",
      icon: Calendar,
      href: "/admin/test-drives",
    },
    {
      label: "Settings",
      icon: Cog,
      href: "/admin/settings",
    },
  ];

  return (
    <div className="hidden md:flex h-full flex-col overflow-y-auto bg-white shadow-sm border-r">
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-x-2 text-slate-500 text-sm font-medium pl-6 transition-all hover:text-slate-600 hover:bg-slate-100/50",
              pathname === route.href
                ? "text-blue-700 bg-blue-100/50 hover:bg-blue-100 hover:text-blue-700"
                : "",
              "h-12"
            )}
          >
            <route.icon className="h-5 w-5 " />
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
