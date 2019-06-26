# vue-chart-demo

- vuex 大型化 modules来支持
  this.$store.user.
  - user
    state  信息 登录 注册 退出 用户登陆成功种下一个session，用户得到cookie
    actions
    mutations
    vuex先设计，搭好结构，围绕着我们的状态
    token 令牌环 第三方授权登录  this.$store.user.token
    跳转到登录页？
- 登录鉴权
  1. 延迟加载路由，性能优化
  
  