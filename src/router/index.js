import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: JobsView
    },
    {
      path: '/jobs/job/:id',
      name: 'Job',
      component: JobView
    },
    {
      path: '/jobs/add',
      name: 'AddJob',
      component: AddJobView
    },
    {
      path: '/jobs/edit/:id',
      name: 'EditJob',
      component: EditJobView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFoundView',
      component: NotFoundView
    }
  ]
});

export default router