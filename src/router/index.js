import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'
import personal from '@/views/personal/index'
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/index'),
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/personal',
    component: () => import('@/views/personal/index'),
    redirect: '/personalInfo',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/basic',
    component: Layout,
    children: [
      {
        path: '/basic',
        component: () => import('@/views/dashboard/index'),
        name: 'basic',
        meta: { title: '懂律中心 V1.0', icon: '中心', affix: true }
      }
    ]
  },
  {
    path: '/personal',
    component: personal,
    children: [
      {
        path: '/personalInfo',
        component: () => import('@/views/personal/personalInfo'),
        name: 'personalInfo',
      },
      {
        path: '/personalHistory',
        component: () => import('@/views/personal/personalhistory'),
        name: 'personalHistory',
      }
    ],
    hidden: true
  },
  {
    path: '/pageBook/:bookId',
    component: () => import('@/views/judgmentBook/pageBook'),
    hidden: true
  },
  {
    path:'/404',
    component: () => import('@/views/error-page/404'),
    name: '404',
    hidden: true
  }
]
export const asyncRoutes = [
  {
    path: '/judgeBook',
    component: Layout,
    redirect: '/judgeBook/index',
    meta: { title: '判决书管理', icon: '基础管理', roles: ['admin','judge','user'] },
    children: [
      {
        path: '/judgeBook/index',
        component: () => import('@/views/judgmentBook'),
        name: 'judgeBook',
        meta: { title: '判决书大全', icon: '书本', roles: ['admin','judge','user'] }
      },
      {
        path: '/judgeBook/upload',
        component: () => import('@/views/judgmentBook/upload'),
        name: 'upload',
        meta: { title: '制作判决书', icon: '制作', roles: ['admin','judge','user'] }
      }
    ]
  },
  {
    path: '/IntelligentJudge',
    component: Layout,
    redirect: '/IntelligentJudge/index',
    children: [
      {
        path: '/IntelligentJudge/index',
        component: () => import('@/views/IntelligentJudgment'),
        name: 'IntelligentJudge',
        meta: { title: '刑事智能判案', icon: '智能', roles: ['admin','judge'] }
      }
    ]
  },
  {
    path: '/network',
    component: Layout,
    redirect: '/network/index',
    meta: { title: '识别关系网络', icon: '关系', roles: ['admin','judge'] },
    children: [
      {
        path: '/network/index',
        component: () => import('@/views/network'),
        name: 'network',
        meta: { title: '关系网络可视化', icon: '可视化', roles: ['admin','judge'] }
      },
      {
        path: '/network/termExtraction',
        component: () => import('@/views/network/termExtraction'),
        name: 'network',
        meta: { title: '术语抽取', icon: '术语库', roles: ['admin','judge'] }
      },
      {
        path: '/network/conceptExtraction',
        component: () => import('@/views/network/conceptExtraction'),
        name: 'network',
        meta: { title: '概念抽取', icon: '概念', roles: ['admin','judge'] }
      },
      {
        path: '/network/relationshipBetweenExtraction',
        component: () => import('@/views/network/relationshipBetweenExtraction'),
        name: 'network',
        meta: { title: '关系抽取', icon: '关系2', roles: ['admin','judge'] }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
