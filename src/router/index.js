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
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/qa.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/video.vue')
      },
      {
        path: '/issue',
        name: 'issue',
        component: () => import('@/views/issue/issue.vue')
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
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
