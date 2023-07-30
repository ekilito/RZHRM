<template>
  <div ref="myDiv" class="radar-echart" />
</template>

<script>
// echarts需要 div给定宽和高
var echarts = require('echarts/lib/echarts') // 引入echarts主模块
require('echarts/lib/chart/radar') // 引入雷达图
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
//  需要拿到dom元素再去渲染
//   created() {
//     console.log(this.$refs.myDiv)
//   },
  //   只能在mounted中 获取到dom元素
  mounted() {
    const myChart = echarts.init(this.$refs.myDiv) // 初始化图表实例
    // 得到实例对象
    const option = {
      title: {
        text: '人力资源绩效表', // 标题文本
        textStyle: {
          fontSize: 14
        }

      },

      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '考勤', max: 100 },
          { name: '工资', max: 100 },
          { name: '社保', max: 100 },
          { name: '工作效率', max: 100 },
          { name: '知识分享', max: 100 },
          { name: '代码行数', max: 100 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [10, 2, 100, 20, 100, 100],
              name: '小清'
            },
            {
              value: [30, 30, 30, 30, 30, 30],
              name: '大鹏'
            },
            {
              value: [70, 70, 70, 70, 70, 70],
              name: '小黑子'
            }
          ]
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style>
.radar-echart {
    width: 400px;
    height: 260px;
}
</style>
