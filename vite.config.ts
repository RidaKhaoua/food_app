import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@types" : path.resolve(__dirname, "./src/types"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@constantData" : path.resolve(__dirname, "./src/constantData"),
      "@utils": path.resolve(__dirname, "./src/util"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@services": path.resolve(__dirname, "./src/services")
    }
  },

  plugins: [react(), svgr()],
});
