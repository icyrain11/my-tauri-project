import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/index/Index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/login/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/login/Register.vue"),
  },
  {
    path: "/game",
    component: () => import("@/views/game/Game.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
