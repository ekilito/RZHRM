import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// 全局注册组件
Vue.component('svg-icon', SvgIcon)

// 下面三行代码的任务是 把 同级目录的 svg目录下的.svg图片引入到项目中来
// require.context(目标目录,是否扫描子目录,正则表达式) 扫描目录中的文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
// map 是循环每一项 svg图片  map(()=> {})
// req 函数能够引用图片到项目中
// 将所有的 svg 都引用到项目中
requireAll(req) // 调用函数

// 相当于把svg下的所有的svg图片打包到了项目中
// 如果想用svg图片 就在svg目录下去寻找就可以了

// webpack loader 插件  vue-config.js
