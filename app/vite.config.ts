import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // "/junminrongheApi"要跟子应用，service——》index.ts中，baseURL的地址一致（即axios的baseURL地址一致），
      // 将junminronghe子应用的接口地址代理到其自己的地址（即target与主应用main.ts中registerMicroApps的entry值，保持一致）即可
      "/junminrongheApi": {
        target: "http://localhost:5176", // 后台接口
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // ws: true, //websocket支持
        rewrite: (path) => path.replace(/^\/junminrongheApi/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
