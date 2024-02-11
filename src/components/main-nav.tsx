"use client";

import type { Category } from "../../types";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface MainNavProps {
  data: Category[] | null | undefined;
}

function MainNav({ data }: MainNavProps) {
  const pathname = usePathname();

  const routes =
    data?.map((route) => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    })) ?? [];

  return (
    <nav className="mx-6 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-gray-900",
              route.active ? "text-gray-900" : "text-gray-500",
            )}
            href={route.href}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default MainNav;
