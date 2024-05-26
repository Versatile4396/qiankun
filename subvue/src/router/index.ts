import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
  // 文章详情
  {
    path: "/content",
    name: "content",
    component: () => import("../views/content/index.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "error",
    meta: {
      name: "404",
    },
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(
    // 在乾坤环境下时，将所有的路由地址前加上'/junminronghe'，否则将跳转至主应用的相应页面（eg：跳转至这里的文章详情页面，如果不加'/junminronghe'的话，将跳转至主应用的'/content'页面，如果主应用没有这个页面，将跳转至404页面）
    qiankunWindow.__POWERED_BY_QIANKUN__ ? '/junminronghe' : '/'
  ),
  routes
})
export default router