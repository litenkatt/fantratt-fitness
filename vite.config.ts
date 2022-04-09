import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import ViteRadar from "vite-plugin-radar";
import visualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      reactRefresh(),
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
      ViteRadar({
        // Google Analytics tag injection
        analytics: {
          id: "xxxx",
        },
      }),
    ],
  };
});
