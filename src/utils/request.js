import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基础地址
  timeout: 10000 // 超时时间 毫秒
}) // 创建一个新的axios实例

// 请求拦截器
// 成功执行第一个，失败执行第二个
service.interceptors.request.use((config) => {
  // 请求接口  config是请求配置
  // 注入token
  // this.$getters.token  this组件实例，现在不是组件
  // store.getters.token => 请求头里面
  if (store.getters.token) {
    // 只要有token，就要检查token的时效性
    // 如果存在token
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }

  // 一定要 return config ！！！！！！！
  return config
}, (error) => {
  // 失败执行promise
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  // 成功执行
  // axios默认包裹了一层data
  // 响应数据解构出来
  // 判断是不是Blob
  if (response.data instanceof Blob) {
    return response.data // 返回了Blob对象
  }
  const { data, message, success } = response.data // 默认json格式
  if (success) {
    // 此时认为业务执行成功了
    return data // 返回用户所需要的数据
  } else {
    // 当业务失效的时候
    Message({ type: 'error', message }) // 提示消息
    return Promise.reject(new Error(message))
  }
}, async(error) => {
  if (error.response.status === 401) {
    Message({ type: 'warning', message: 'token超时了哦' })
    // 说明token超时了
    await store.dispatch('user/logout') // 调用action 退出登录
    //  主动跳到登录页
    router.push('/login') // 跳转到登录页
    return Promise.reject(error)
  }

  // error.message
  // this 只能在组件里用
  Message({ type: 'error', message: error.message })
  return Promise.reject(error)
})

export default service
