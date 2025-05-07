import { NavLink } from "react-router";

import cn from "@/utilities/cn";

export default function Brand() {
  return (
    <NavLink to="/" className={cn("flex items-center gap-1 font-black text-xl bg-gradient-to-br from-blue-600 from-0% to-blue-400 to-100% bg-clip-text text-transparent")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 200 200"
        className={cn("size-12")}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(54.6% 0.245 262.881)"></stop>
            <stop offset="100%" stopColor="oklch(70.7% 0.165 254.624)"></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient)" transform="translate(100 100)">
          <animate
            attributeName="d"
            values="M63.8,-49.8C76.2,-35.4,75.2,-9.3,64.2,5C53.3,19.4,32.5,21.8,14.7,30.2C-3,38.5,-17.7,52.9,-34.3,52.2C-51,51.5,-69.6,35.8,-73.5,17.2C-77.5,-1.5,-66.7,-23,-52,-38C-37.3,-52.9,-18.7,-61.1,3.5,-63.9C25.7,-66.7,51.5,-64.2,63.8,-49.8Z;
            M57.1,-46.1C63.3,-37.7,50.4,-14.6,44.6,9.9C38.8,34.4,40.1,60.3,26.9,73.3C13.7,86.4,-14.1,86.7,-36.9,76C-59.6,65.2,-77.4,43.5,-76.6,24C-75.8,4.6,-56.5,-12.5,-40.6,-23.2C-24.8,-33.8,-12.4,-38,6.5,-43.2C25.4,-48.4,50.8,-54.6,57.1,-46.1Z;
            M62.7,-50.1C78.9,-29.8,87.8,-3.9,83.1,19.8C78.3,43.4,59.8,64.7,37,74.9C14.2,85.1,-13,84.3,-34.6,73.3C-56.3,62.4,-72.3,41.3,-77.5,17.9C-82.6,-5.5,-76.9,-31.1,-62.2,-51.1C-47.4,-71.1,-23.7,-85.4,-0.2,-85.3C23.3,-85.1,46.6,-70.4,62.7,-50.1Z;
            M35.1,-26.4C46.8,-13.4,58.4,1.3,56.8,15C55.3,28.7,40.7,41.4,21.9,53.6C3,65.9,-20,77.6,-34.8,71C-49.6,64.4,-56.1,39.3,-58.8,16.6C-61.4,-6.1,-60.1,-26.5,-49.7,-39.3C-39.2,-52,-19.6,-57.1,-3.9,-54C11.7,-50.9,23.5,-39.5,35.1,-26.4Z;
            M63.8,-49.8C76.2,-35.4,75.2,-9.3,64.2,5C53.3,19.4,32.5,21.8,14.7,30.2C-3,38.5,-17.7,52.9,-34.3,52.2C-51,51.5,-69.6,35.8,-73.5,17.2C-77.5,-1.5,-66.7,-23,-52,-38C-37.3,-52.9,-18.7,-61.1,3.5,-63.9C25.7,-66.7,51.5,-64.2,63.8,-49.8Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <span>GME</span>
      <span className={cn("px-2 text-sm self-end font-medium bg-gradient-to-br from-blue-600 from-0% to-blue-400 to-100% text-white rounded-full")}>{__APP_VERSION__}</span>
    </NavLink>
  )
}