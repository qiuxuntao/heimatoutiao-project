import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/user/profile',
    name: 'user-profile',
    component: () => import('@/views/user-profile/index.vue')

  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '', // 默认子路由 相当于重定向到首页
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/shops',
        name: 'shops',
        component: () => import('@/views/shops/shops.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/video.vue')
      },
      {
        path: '/shopcat',
        name: 'shopcat',
        component: () => import('@/views/shopcat/shopcat.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/my.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/register.vue')
      },
      {
        path: '/address',
        name: 'address',
        component: () => import('@/views/address/address.vue')
      },
      {
        path: '/adm',
        name: 'adm',
        component: () => import('@/views/address/adm.vue')
      },
      {
        path: '/shopcard',
        name: 'shopcard',
        component: () => import('@/views/shopcard/shopcard.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/search/search.vue')
      },
      {
        path: '/article/:articleId',
        name: 'article',
        component: () => import('@/views/article/index.vue'),
        props: true// 将路由动态参数映射到组件的 props 中，更推荐这种做法
      }
      // {
      //   path: '/user/profile',
      //   name: 'user-profile',
      //   component: () => import('@/views/user-profile/index.vue')

      // }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
