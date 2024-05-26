import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";
// 注册子应用
registerMicroApps([
  {
    // 子应用名称，name值必须与子应用vite.config.ts文件中plugins属性qiankun的第一个参数值一致
    name: "vue3",
    // 默认会加载这个路径下的html，解析里面的js
    entry: "//localhost:5174",
    // 加载的容器（微应用会显示到这个容器里面，一定要保证主应用中有这个容器）
    container: "#subAppContainerVue3", // 和app.vue配置的节点一致
    // 匹配的路由
    activeRule: "/junminronghe", // 访问：http://localhost:5174/juminronghe
    props: {
      mag: "我是主应用main", // 主应用向微应用传递参数
      domain: "http://localhost:5174",
    },
  },
  // 再有其他子应用，同理
]);
// 启动 qiankun
start({
  prefetch: "all", // 预加载
  sandbox: {
    experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
  },
});

// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
  console.log("异常捕获", handler);
});
