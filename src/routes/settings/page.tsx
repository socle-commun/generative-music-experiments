import ColorModeToggle from "@/components/global/ColorModeToggle";

import cn from "@/utilities/cn";

export default function SettingsPage() {
  return (
    <>
      <h1>Settings</h1>
      <hr className={cn("")} />
      <ColorModeToggle />
    </>
  )
}