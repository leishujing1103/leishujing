// 插件
// $Toast弹出框
let Toast = {}
// install自取的字段名,Toast的key值，function是value
Toast.install = function (Vue, options) {
  let opt = {
    defultType: 'center', //默认显示的位置
    duration: '1500' //持续的时间
  }
  for (let property in options) {
    opt[property] = options[property] // 使用options的配置，把options里的东西传给opt
  }
  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      opt.defaultType = type  //传了type的话，把默认的defaultType变成你传的
    }
    if (ducument.getElementsByClassName('vue-toast').length) {  //getElementsByClassName获取下来的是个数组
      return //如果toast此时在页面是出现状态，则不再执行
    }
    // extend扩展一个组件
    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + opt.defultType +'">' + tips + '</div>' //es5的字符串拼接
    })
    let tpl = new toastTpl.$mount().$el //扩展出来的东西都可以new出来用一下,$mount挂载到指定的dom结构el去
    document.body.appendChild(tpl) //挂载到body下,和最外层的div盒子是同级的
    setTimeout(() =>  {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
  ['bottom', 'center', 'top'].forEach(type => {
    Vue.prototype.$toast[type] = (tips) => {
      return Vue.prototype.$toast(tips, type)
    }
  })  
}

let Loading = {}
Loading.install = function (Vue) {
  let tpl 
  Vue.prototype.$showLoaing = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      return 
    }
    let loadingTpl = Vue.extend({ //创建构造器，定义好提示信息的模板
      template: '<div class="vue-loading"></div>'
    })
    tpl = new loadingTpl().$mount.$el
    document.body.appendChild(tpl)
  }
  Vue.prototype.$hideLoaing = () => {
    if (document.getElementsByClassName('vue-loading').length) {
      document.body.removeChild(tpl)
    }
  }
}

export {
  Toast,
  Loading
}