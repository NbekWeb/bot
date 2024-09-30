import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/DashboardComp.vue';
import LevelInfo from '@/views/LevelInfo.vue';
import Leader from '@/views/Leader.vue';
import Tasks from '@/views/Tasks.vue';
import Friends from '@/views/Friends.vue';
import Cash from '@/views/Cash.vue';
import Main from '@/views/Main.vue';
import Start from '@/views/Start.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '',
          component: Dashboard,
          name: 'Dashboard',
        },
        {
          path: 'level-info',
          name: 'LevelInfo',
          component: LevelInfo
        },
        {
          path: 'leader',
          name: 'Leader',
          component: Leader
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: Tasks
        },
        {
          path: 'friends',
          name: 'Friends',
          component: Friends
        },
        {
          path: 'cash',
          name: 'Cash',
          component: Cash
        },
      ]
    },
    {
      path: '/',
      name: 'Start',
      component: Start,
    }




  ]
})

export default router
