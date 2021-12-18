import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Detective from '../views/Detective.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Detective,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
