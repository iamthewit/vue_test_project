import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import List from '@/components/documentaries/List.vue';
import Create from '@/components/documentaries/Create.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/documentaries/list',
    name: 'List',
    component: List,
  }, {
    // add create route
    path: '/documentaries/create',
    name: 'Create',
    component: Create,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;