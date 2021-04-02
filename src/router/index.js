import Vue from 'vue';
import VueRouter from 'vue-router';
import Initial from '../pages/Initial/Initial.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Initial',
    component: Initial
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('../pages/Counter/Counter.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
