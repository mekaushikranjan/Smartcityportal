import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",  
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html", // ✅ Ensure this is correct
    },
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_BASE_URL || "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
