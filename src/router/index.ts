import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue';
import LevelInfo from '@/views/LevelInfo.vue';
import Leader from '@/views/Leader.vue';
import Tasks from '@/views/Tasks.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/level-info',
      name: 'LevelInfo',
      component: LevelInfo
    },
    {
      path: '/leader',
      name: 'Leader',
      component: Leader
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },


  ]
})

export default router
