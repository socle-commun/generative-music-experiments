import { useState } from "react";

import { Outlet } from "react-router";

import AdjustmentsHorizontalIcon from "@heroicons/react/20/solid/AdjustmentsHorizontalIcon";

import ResponsiveTopBar from "@/components/navigation/ResponsiveTopBar";
import TopBarNavLink from "@/components/navigation/TopBarLink";

import Brand from "@/components/global/Brand";

import cn from "@/utilities/cn";
import ColorModeToggle from "@/components/global/ColorModeToggle";

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <ResponsiveTopBar
        isOpen={isOpen}
        onClick={toggleOpen}
        brand={<Brand />}>
        <TopBarNavLink to="/settings" onClick={toggleOpen} className={cn("text-black fill-black dark:text-white dark:fill-white hover:text-blue-600 hover:fill-blue-600 dark:hover:text-blue-400 dark:hover:fill-blue-400")}>
          <AdjustmentsHorizontalIcon className={cn("size-4")} />
          <span>Settings</span>
        </TopBarNavLink>
        <ColorModeToggle />
      </ResponsiveTopBar>

      <Outlet />
    </>
  )
}