import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/detail/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/table',
      name: 'Home',
      component:Home,
      children: [
        {
          path: '/',  //二级路由不要加斜杠
          component: Index
        }
      ]
    }
  ]
})
