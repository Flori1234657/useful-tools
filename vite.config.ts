/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  define: {
    "import.meta.env.VITE_API_KEY_REMOVE_BG":
      process.env.VITE_API_KEY_REMOVE_BG,
  },
  server: {
    open: true,
  },
});
