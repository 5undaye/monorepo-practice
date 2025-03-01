import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true, tsconfigPath: "tsconfig.app.json" })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "shell-router",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom", "@auth0/auth0-spa-js"],
      output: {
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
          "@auth0/auth0-spa-js": "auth0",
        },
      },
    },
  },
});
