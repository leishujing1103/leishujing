import Vue from 'vue'
import Router from 'vue-router'
import {getToken} from '@/utils/auth';

Vue.use(Router)
// 当进入/ 如果没有token 就进入登录页？


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login')
    },
  ]
})

let token = getToken;
const whiteList = ['/login', 'signup', '/auth-redirect']  // 白名单，不需要鉴权
router.beforeEach((to, from, next) => {
  if(token) {

  } else {
    console.log(to.path);
    if (whiteList.includes(to.path)) {
      next();  //放行
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router;
// to from $router path  /

