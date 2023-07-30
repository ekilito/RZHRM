import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout' // 拉取layout下index文件

import departmentRouter from './modules/department'
import roleRouter from './modules/role'
import employeeRouter from './modules/employee'
import permissionRouter from './modules/permission'
import salaryRouter from './modules/salary'
import socialRouter from './modules/social'
import attendanceRouter from './modules/attendance'
import approvalRouter from './modules/approval'

// 导出静态路由
export const constantRoutes = [{
  path: '/login',
  component: () =>
    import ('@/views/login/index'),
  hidden: true // 为true 就不在左侧显示
},

{
  path: '/404',
  component: () =>
    import ('@/views/404'),
  hidden: true // 为true 就不在左侧显示
},

{
  path: '/',
  component: Layout,
  redirect: '/dashboard', // 首页
  children: [{ // layout 下的子节点
    path: 'dashboard',
    name: 'Dashboard',
    component: () =>
      import ('@/views/dashboard/index'),
    meta: { title: '首页', icon: 'dashboard' }
  }]
}

  // 将原位置合并的动态路由进行拆分
  // 拆分到一个数组里 asyncRoutes  根据用户的权限添加动态路由
  //
  // 404 page must be placed at the end !!!
  // 404 必须放到最后 ， 在这里删除掉，放到添加动态路由的后面
  // { path: '*', redirect: '/404', hidden: true }
]
// 动态路由
export const asyncRoutes = [
  departmentRouter,
  roleRouter,
  employeeRouter,
  permissionRouter,
  attendanceRouter,
  approvalRouter,
  salaryRouter,
  socialRouter
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes // 默认引入静态路由
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
