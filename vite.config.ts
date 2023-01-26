import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import someComponent from "@/components/someComponent"
import path from "path"; // @types/node에서 install

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
