import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'
import Brand from '../views/brand/brand'

Vue.use(Router);

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/home')
      },
      {
        path: '/about',
        component: () => import('@/views/about/about'),
      },
      {
        path: '/brand',
        redirect: '/brand/bozita',
        component: Brand,
        children: [
          {
            path: 'bozita',
            component: () => import('@/views/brand/bozita')
          },
          {
            path: 'fromm',
            component: () => import('@/views/brand/fromm'),
          },
          {
            path: 'solid-gold',
            component: () => import('@/views/brand/solid-gold'),
          },
          {
            path: 'nutrience',
            component: () => import('@/views/brand/nutrience'),
          },
        ]
      },
      {
        path: '/join',
        component: () => import('@/views/join/join'),
      },
      {
        path: '/permission-seller',
        component: () => import('@/views/permission-seller/permission-seller'),
      },
      {
        path: '/verify',
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
