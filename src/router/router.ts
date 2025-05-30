import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/home",
    },
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      name: "Home",
    },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
