import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [

];

const router = createRouter({
  history: createWebHistory(
    // 在乾坤环境下时，将所有的路由地址前加上'/junminronghe'，否则将跳转至主应用的相应页面（eg：跳转至这里的文章详情页面，如果不加'/junminronghe'的话，将跳转至主应用的'/content'页面，如果主应用没有这个页面，将跳转至404页面）
  ),
  routes,
});
export default router;
