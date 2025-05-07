import { useEffect, useState, type ReactNode } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import SunIcon from "@heroicons/react/20/solid/SunIcon";
import MoonIcon from "@heroicons/react/20/solid/MoonIcon";
import ComputerDesktopIcon from "@heroicons/react/20/solid/ComputerDesktopIcon";

import cn from "@/utilities/cn";

import toggleDarkClass from "@/utilities/toggleDarkClass";

declare type ColorMode = {
  value: "light" | "dark" | "system";
  label: string;
  icon: ReactNode;
}

const modes: ColorMode[] = [
  {
    value: "light",
    label: "light mode",
    icon: <SunIcon />
  },
  {
    value: "system",
    label: "system mode",
    icon: <ComputerDesktopIcon />
  },
  {
    value: "dark",
    label: "dark mode",
    icon: <MoonIcon />
  }
];

export default function ColorModeToggle() {
  const [colorMode, setColorMode] = useState<"light" | "dark" | "system">(!("theme" in localStorage) ? "system" : localStorage.theme);

  useEffect(() => {
    if (colorMode === "system") {
      localStorage.removeItem("theme");
    }
    else {
      localStorage.theme = colorMode;
    }

    toggleDarkClass();
  }, [colorMode]);

  return (
    <div className="w-52">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer bg-gray-200 dark:bg-gray-800 font-semibold text-black dark:text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-black data-hover:bg-gray-300 data-open:bg-gray-300 dark:data-focus:outline-white dark:data-hover:bg-gray-700 dark:data-open:bg-gray-700">
          <span className="size-4 fill-black/60 dark:fill-white/60">{modes.find((mode) => mode.value === colorMode)?.icon}</span>
          {/* <ChevronDownIcon className="size-4 fill-black/60 dark:fill-white/60" /> */}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="origin-top-right inline-flex gap-1 p-1 text-sm/6 rounded-xl border border-black/5 bg-black/5 text-black dark:border-white/5 dark:bg-white/5 dark:text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          {modes.map((mode, index) => (
            <MenuItem key={mode.value}>
              <button
                aria-label={`Toggle ${mode.label}`}
                type="button"
                tabIndex={index}
                onClick={() => setColorMode(mode.value)}
                className={cn(
                  "group flex items-center gap-2 rounded-lg px-3 py-1.5 cursor-pointer data-focus:bg-black/10 dark:data-focus:bg-white/10",
                  colorMode === mode.value && "bg-black/10 dark:bg-white/10"
                )}
              >
                <span className="size-4 fill-black/30 dark:fill-white/30">
                  {mode.icon}
                </span>
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div >
  )
}