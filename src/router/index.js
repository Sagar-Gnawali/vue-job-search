import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

import JobsViews from "@/views/JobsViews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    }, {
      path: '/jobs',
      name: 'jobs',
      // component: () => import('@/views/JobsViews.vue')
      component: JobsViews
    },
    {
      path: '/jobs/add',
      name: 'jobs-add',
      component: JobsViews
    }
  ],
});

export default router
