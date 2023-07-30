import { setToken, getToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
import { constantRoutes } from '@/router'
import { resetRouter } from '@/router'

const state = {
  token: getToken(), // 从缓存中读取初始值
  userInfo: {}, // 存储用户基本资料状态
  routes: constantRoutes // 静态路由的数组
}

const mutations = {
  // 修改token
  setToken(state, token) {
    state.token = token
    // 同步到缓存
    setToken(token)
  },
  // 删除token
  removeToken(state) {
    // 删除Vuex的token
    state.token = null
    // 删除缓存
    removeToken()
  },
  // 修改用户资料
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  // 合并
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes] // 静态路由 + 动态路由
  }
}

const actions = {
  // context 上下文，传入参数
  async login(context, data) {
    // console.log(data) // 已传入参数
    // todo ： 调用登陆接口
    const token = await login(data)
    // 接口返回一个token 把token进行共享
    // 提交

    context.commit('setToken', token)
  },

  // 获取用户的基本资料
  async getUserInfo(context) {
    const result = await getUserInfo()
    context.commit('setUserInfo', result)
    return result // 返回数据 返回给调用者 存着用户的基本资料 里面有 roles.menus 里面存着权限点标识
  },
  // 退出登录的action
  logout(context) {
    context.commit('removeToken') // 删除token
    context.commit('setUserInfo', {}) // 设置用户信息为空对象
    // 重置路由
    resetRouter()
  }
}

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions
}
