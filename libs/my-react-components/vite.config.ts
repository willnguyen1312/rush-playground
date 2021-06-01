import { defineConfig } from "vite";
import path from "path";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "my-react-components",
    },
  },
});
