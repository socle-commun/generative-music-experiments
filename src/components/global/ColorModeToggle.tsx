import { useEffect, useState } from "react";

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";

import toggleDarkClass from "@/utilities/toggleDarkClass";
import cn from "@/utilities/cn";

const modes = [
  {
    value: "light",
    label: "Light",
    aria: "Light mode",
    icon: "light_mode"
  },
  {
    value: "system",
    label: "System",
    aria: "System mode",
    icon: "devices"
  },
  {
    value: "dark",
    label: "Dark",
    aria: "Dark mode",
    icon: "dark_mode"
  }
];

export default function ColorModeToggle() {
  const [colorMode, setColorMode] = useState<"light" | "dark" | "system" | null>(!("theme" in localStorage) ? "system" : localStorage.theme);

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
    <Combobox value={colorMode} onChange={setColorMode}>
      <ComboboxInput aria-label="Change color mode" className={cn(
        'w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white',
        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
      )} />

      <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
        {/* <ChevronDownIcon className="size-4 fill-white/60 group-data-hover:fill-white" /> */}
      </ComboboxButton>
      <ComboboxOptions anchor="bottom" className="border empty:invisible">
        {modes.map((mode) => (
          <ComboboxOption key={mode.value} value={mode.value} className="data-focus:bg-blue-100">
            {mode.value}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}