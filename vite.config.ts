import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/generative-music-experiments/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react": ["react", "react-dom"],
          "react-router": ["react-router"],
          "cn": ["clsx", "tailwind-merge"],
          "headlessui": ["@headlessui/react"],
          "icons": ["@heroicons/react"],
          "tone": ["tone"]
        }
      }
    },
    minify: process.env.NODE_ENV === "production" ? "terser" : false,
    terserOptions: {
      compress: {
        passes: 2
      },
      mangle: true,
      format: {
        comments: false
      }
    }
  },
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
  },
  logLevel: "info",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [react(), tailwindcss()],
})
