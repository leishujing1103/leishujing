import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'mand-mobile' // mand-mobile是一个框架，需要装依赖
import User from './module/user'

// import tripUser from './module/user';

Vue.use(Router)
const commonRoutes = [
  { path: '/404',component: () => import('@/components/RouterError/404') },
  { path: '/401',component: () => import('@/components/RouterError/401') },
  { path: '*', redirect: '/404' }, //重定向，如果用户手动输入一个不存在的路由，直接跳转到404
  { path: '/', redirect: '/trip'} //根路径
]
// 分模块的路由，合并传入Router
let router = new Router({
  base: process.env.BASE_URL, //env代表开发环境
  routes: commonRoutes.concat(User)  //concat拼接
})

// 导航守卫，非登录状态先登录
router.beforeEach((to, from, next) => {
  let tmp = localStorage.getItem('user')  //如果用户登录了，localStorage下存一个user
  if (!tmp && to.name != 'Login') {
    Toast.succeed('您需要先登录哦！', 1500)
    next({ path: '/login'})
    return
  }
  next()
})
export default router