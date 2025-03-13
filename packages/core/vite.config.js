import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    dts({
      compilerOptions: {
        declarationMap: true,
      },
      // Only compile files from src directory
      include: ["./src/**/*"],
    }),
  ],
  build: {
    // disable minification and sourcemap so that the library user can
    // read the original source code more easily.
    minify: false,
    sourcemap: true,
    outDir: resolve(__dirname, "dist"),
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SampleDesignSystem",
      fileName: "index",
      cssFileName: "style",
    },
    rollupOptions: {
      // https://github.com/vitejs/vite/discussions/6198#discussioncomment-8320599
      external: ["vue", ...Object.keys(pkg.dependencies)],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
