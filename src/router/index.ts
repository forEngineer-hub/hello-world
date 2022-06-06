import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import TestChange from "../pages/TestChange.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/goods/detail/:goodsId", name: "detail", component: DetailPage },
  { path: "/test", name: "test", component: TestChange}
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//   history: createWebHashHistory(),
  history: createWebHistory(),  
  routes // `routes: routes` 的缩写
});

export default router;
