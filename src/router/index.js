import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import List from '@/components/documentaries/List.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },{
    path: '/documentaries/list',
    name: 'List',
    component: List,
  },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;