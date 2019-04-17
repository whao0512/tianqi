import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/home')
      },
      {
        path: 'about',
        component: () => import('@/views/about/about'),
      },
      {
        path: 'brand',
        component: () => import('@/views/brand/brand'),
      },
      {
        path: 'join',
        component: () => import('@/views/join/join'),
      },
      {
        path: 'permission-seller',
        component: () => import('@/views/permission-seller/permission-seller'),
      },
      {
        path: 'verify',
        component: () => import('@/views/verify/verify'),
      }
    ]
  },
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
