import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAppStore } from "../stores/index";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/biografi",
    name: "biografi",
    component: () => import("../views/Biography.vue"),
  },
  {
    path: "/organisasi/:slug",
    name: "organisasi",
    component: () => import("../views/organisation/Show.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.afterEach((to, from, next) => {
  const store = useAppStore();
  store.toggleMainLoader(false);
});

export default router;
