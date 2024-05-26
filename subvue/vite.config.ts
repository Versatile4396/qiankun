import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    // qiankun的第一个参数必须与主应用在main.ts中registerMicroApps的name值一致
    qiankun("vue3", {
      useDevMode: true,
    }),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
