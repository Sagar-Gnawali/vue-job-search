import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import JobsViews from "@/views/JobsViews.vue";
import NotFound from "@/views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsViews,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
