import axios from 'axios'
import { Toast } from 'mand-mobile'
import { stringify } from 'qs'
import store from '../store/index'

let tmpTrip = store.state.tmpTrip

axios.defaults.timeout = 10000  // 接口请求的时间限制
axios.defaultswithCredentials = false  //表示跨域请求时需要使用凭证，默认否

// 请求拦截
axios.interceptors.request.use(
  config =>{
    // 每次发送请求之前，判断一下vuex中是否存在token   
    // 如果存在，则统一在http请求的header上都加上token，这样后台能根据token判断用户当前是否是登录状态
    // 即使本地存在token，也有肯token是过期的，所以在拦截器中要返回状态进行判断
    // const token = store.state.token
    // token && (config.header.Authorization = token)
    config.header['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  enter => {
    Toast.failed('')
    return Promise.error(error)
  }
)

// 返回拦截
axios.interceptors.response.use(function(response) {
// 对响应数据进行操作
return response 
}, function(error) {
  Toast.failed('响应过程出错')
  return Promise.reject(error)
})
var request = (options) =>{
  // 每次请求传入当前用户的id
  if (tmpTrip.user) {
    if (options.body) {
      options.body.userId = tmpTrip.user.userId
    }
    if (options.params) {
      options.params.userId = tmpTrip.user.userId
    }
  }
  // 表单传值参数格式化
  return axios.request({
    url: `http://localhost:3000 ${option.url}`,
    method: options.method,
    data: options.body,
    params: options.params 
  }).then(respone => {
    return response
  }, err => {
    Toast.failed(error.message)
    throw err
  }).catch((error) => {
    Toast.failed('请求失败')
    throw error
  })
}
