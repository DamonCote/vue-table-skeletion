import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: "vue-table-skeleton",
        lib: {
            entry: path.resolve(
                __dirname,
                "./src/components/table-skeleton/index.js"
            ),
            name: "vue-table-skeleton",
            fileName: "vue-table-skeleton",
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
