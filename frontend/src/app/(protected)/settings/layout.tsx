"use client";

import { Metadata } from "next";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/settings/sidebar-nav";
import { useCurrentUser } from "@/hooks/use-current-user";

// export const metadata: Metadata = {
//   title: "Innstillinger",
//   description: "Endre dine innstillinger",
// }

const sidebarNavItems = [
  {
    title: "Profil",
    href: "/settings",
  },
  {
    title: "Konto",
    href: "/settings/account",
  },
  {
    title: "Varslinger",
    href: "/settings/notifications",
  },
];

const debug = {
  title: "Debug",
  href: "/settings/debug",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const user = useCurrentUser();
  if (sidebarNavItems.length <= 3) {
    if (user && user.role === "ADMIN") {
      sidebarNavItems.push(debug);
    }
  }

  return (
    <div className="w-screen flex flex-col items-center justify-center p-8">
      <div className="space-y-6 flex flex-col items-center justify-center p-6 md:block w-[90%] lg:max-w-[60%] bg-[#003A42] rounded-lg text-white">
      <div>
        <h3 className="text-lg font-medium">Profil</h3>
        <p className="text-sm ">
          Dette er hvordan andre vil se deg på nettstedet.
        </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}