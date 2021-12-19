import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Detective from '../views/Detective.vue';
import ContentMain from '@/components/Layout/ContentMain.vue';
import BaseProduct from '@/components/product/BaseProduct.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Detective,
    children: [
      {
        path: '/',
        name: 'center',
        component: ContentMain,
      },
      {
        path: '/base',
        name: 'base',
        component: BaseProduct,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
