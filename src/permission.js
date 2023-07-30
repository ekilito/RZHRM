// 权限管理 主要负责路由导航守卫

import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
// 引入动态路由
import { asyncRoutes } from '@/router'

// 白名单
const whiteList = ['/login', '/404']
// 路由前置守卫
router.beforeEach(async(to, from, next) => {
  nprogress.start() // 开启进度条
  if (store.getters.token) {
    // 存在token
    if (to.path === '/login') {
      // 跳转到主页
      next('/') // 中转到主页
      // next（地址）并没有执行后置守卫
      nprogress.done() // 手动关闭进度条
    } else {
      //
      // 判断是否获取过资料
      if (!store.getters.userId) {
        const { roles } = await store.dispatch('user/getUserInfo')
        // console.log(roles.menus) // 数组 里面存储着权限点标识
        // console.log(asyncRoutes) // 数组 8个动态路由
        // 给每一个动态路由加一个name标识，和roles.menus里的权限点标识去做对应
        // 每一个name 对应权限点的标识

        // 第二步筛选路由，不同的人有不同的路由权限
        const filterRoutes = asyncRoutes.filter(item => {
          // filter 返回  true/false
          // item.name 是每一个动态路由的名字标识name
          // 看看name在不在这个权限点标识里面，在就表示有这个路由权限，不在就没有权限
          // 如果包含就返回 true， 不包含返回false
          return roles.menus.includes(item.name)
        })
        // filterRoutes 就是筛选后的路由
        store.commit('user/setRoutes', filterRoutes) // 筛选提交，添加到vuex中去
        // console.log(filterRoutes) // 筛选出有权限的动态路由
        // 添加动态路由
        router.addRoutes([...filterRoutes, { path: '*', redirect: '/404', hidden: true }]) // 添加动态路由信息到路由表

        // router添加动态路由之后 需要转发一下
        next(to.path) // 目的是让路由拥有信息 router的已知缺陷
      }
      //

      next() // 放行
    }
  } else {
    // 没有token
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login') // 中转到登录页
      nprogress.done()
    }
  }
})

// 路由后置守卫
router.afterEach(() => {
  nprogress.done() // done完成  关闭进度条
})
