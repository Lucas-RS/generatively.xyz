import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/projects/central-vibrance",
    name: "CentralVibrance",
    component: () =>
      import(
        /* webpackChunkName: "central-vibrance" */ "../views/projects/CentralVibrance.vue"
      ),
  },
  {
    path: "/projects/density",
    name: "Density",
    component: () =>
      import(
        /* webpackChunkName: "diagonal" */ "../views/projects/Density.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
