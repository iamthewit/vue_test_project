import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import List from '@/components/documentaries/List.vue';
import Create from '@/components/documentaries/Create.vue';
import View from '@/components/documentaries/View.vue';

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
    path: '/documentaries/create',
    name: 'Create',
    component: Create,
  }, {
    path: '/documentaries/view/:id',
    name: 'View',
    component: View,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;