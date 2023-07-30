// 进行状态管理通过getters建立对于模块中属性的快捷访问

const getters = {
  sidebar: state => state.app.sidebar, // 取app模块属性
  device: state => state.app.device,
  token: state => state.user.token, // 取user模块属性
  avatar: state => state.user.userInfo.staffPhoto, // 头像
  name: state => state.user.userInfo.username, // 用户名称
  userId: state => state.user.userInfo.userId,
  routes: state => state.user.routes,
  company: state => state.user.userInfo.company, // 公司名称
  departmentName: state => state.user.userInfo.departmentName // 部门名称
}

// getters便捷访问
export default getters
