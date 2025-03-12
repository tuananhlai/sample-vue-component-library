import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    dts({
      compilerOptions: {
        declarationMap: true,
      },
    }),
  ],
  build: {
    // disable minification and sourcemap so that the library user can
    // read the original source code more easily.
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SampleDesignSystem",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
