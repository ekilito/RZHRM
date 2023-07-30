<template>
  <div class="dashboard">
    <div class="container">
      <!-- 左侧内容 -->
      <div class="left">
        <div class="panel">
          <!-- 个人信息 -->
          <div class="user-info">
            <img v-if="avatar" class="avatar" :src="avatar" alt="">
            <span v-else class="username">{{ name?.charAt(0) }}</span>
            <div class="company-info">
              <div class="title">
                江苏某某教育科技股份有限公司
                <span>正式版</span>
              </div>
              <div class="depart">早安！{{ name }}，祝您开心每一天！ ｜  {{ departmentName }}</div>
            </div>
          </div>
          <!-- 代办 -->
          <div class="todo-list">
            <div class="todo-item">
              <span>组织总人数</span>
              <!-- 起始值 终点值 动画时间 -->
              <count-to
                :start-val="0"
                :end-val="homeData.employeeTotal"
                :duration="1000"
              />
            </div>
            <div class="todo-item">
              <span>正式员工</span>
              <count-to
                :start-val="0"
                :end-val="homeData.regularEmployeeTotal"
                :duration="1000"
              />
            </div>
            <div class="todo-item">
              <span>合同待签署</span>
              <count-to
                :start-val="0"
                :end-val="homeData.contractSignTotal"
                :duration="1000"
              />
            </div>
            <div class="todo-item">
              <span>待入职</span>
              <count-to
                :start-val="0"
                :end-val="homeData.toBeEmployed"
                :duration="1000"
              />
            </div>
            <div class="todo-item">
              <span>本月待转正</span>
              <count-to
                :start-val="0"
                :end-val="homeData.toBeConfirmed"
                :duration="1000"
              />
            </div>
            <div class="todo-item">
              <span>本月待离职</span>
              <count-to
                :start-val="0"
                :end-val="homeData.toBeDismissed"
                :duration="1000"
              />
            </div>
            <div class="todo-item">
              <span>接口总访问</span>
              <count-to
                :start-val="0"
                :end-val="homeData.interfaceAccessTotal"
                :duration="1000"
              />
            </div>
          </div>
        </div>
        <!-- 快捷入口 -->
        <div class="panel">
          <div class="panel-title">快捷入口</div>
          <div class="quick-entry">
            <div class="entry-item">
              <div class="entry-icon approval" />
              <span>假期审批</span>
            </div>
            <div class="entry-item">
              <div class="entry-icon social" />
              <span>社保管理</span>
            </div>
            <div class="entry-item">
              <div class="entry-icon role" />
              <span>角色管理</span>
            </div>
            <div class="entry-item">
              <div class="entry-icon salary" />
              <span>薪资设置</span>
            </div>
            <div class="entry-item">
              <div class="entry-icon bpm" />
              <span>流程设置</span>
            </div>
          </div>
        </div>
        <!-- 图表数据 -->
        <div class="panel">
          <div class="panel-title">社保申报数据</div>
          <div class="chart-container">
            <div class="chart-info">
              <div class="info-main">
                <span>申报人数</span>
                <!-- homeData: {} -->
                <count-to
                  :start-val="0"
                  :end-val="homeData.socialInsurance?.declarationTotal"
                  :duration="1000"
                />

              </div>
              <div class="info-list">
                <div class="info-list-item">
                  <span>待申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="homeData.socialInsurance?.toDeclareTotal"
                    :duration="1000"
                  />
                </div>
                <div class="info-list-item">
                  <span>申报中(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="homeData.socialInsurance?.declaringTotal"
                    :duration="1000"
                  />
                </div>
                <div class="info-list-item">
                  <span>已申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="homeData.socialInsurance?.declaredTotal"
                    :duration="1000"
                  />
                </div>
              </div>
            </div>
            <div class="chart">
              <!-- 图表 -->
              <div ref="social" style=" width: 100%; height:100% " />
            </div>

          </div>
        </div>
        <!-- 图表数据 -->
        <div class="panel">
          <div class="panel-title">公积金申报数据</div>
          <div class="chart-container">
            <div class="chart-info">
              <div class="info-main">
                <span>申报人数</span>
                <count-to
                  :start-val="0"
                  :end-val="homeData.providentFund?.declarationTotal"
                  :duration="1000"
                />
              </div>
              <div class="info-list">
                <div class="info-list-item">
                  <span>待申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="homeData.providentFund?.toDeclareTotal"
                    :duration="1000"
                  />
                </div>
                <div class="info-list-item">
                  <span>申报中(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="homeData.providentFund?.declaringTotal"
                    :duration="1000"
                  />
                </div>
                <div class="info-list-item">
                  <span>已申报(人)</span>
                  <count-to
                    :start-val="0"
                    :end-val="homeData.providentFund?.declaredTotal"
                    :duration="1000"
                  />
                </div>
              </div>
            </div>
            <div class="chart">
              <!-- 图表 -->
              <div ref="provident" style=" width: 100%; height:100% " />
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="right">
        <!-- 帮助链接 -->
        <div class="panel">
          <div class="help">
            <div class="help-left">
              <div class="panel-title">帮助链接</div>
              <div class="help-list">
                <div class="help-block">
                  <i class="icon-entry" />
                  入门指南
                </div>
                <div class="help-block">
                  <i class="icon-help" />
                  在线帮助手册
                </div>
                <div class="help-block">
                  <i class="icon-support" />
                  联系技术支持
                </div>
                <div class="help-block">
                  <i class="icon-add" />
                  添加链接
                </div>
              </div>
            </div>
            <div class="help-right">
              <div class="calendar">
                <!-- <el-calendar /> -->
                <el-calendar />

              </div>
            </div>
          </div>
        </div>
        <!-- 通知公告 -->
        <div class="panel">
          <div class="panel-title">通知公告</div>
          <div class="information-list">
            <!-- 11111111111111111111111111111111111111111111111111111111111111111111111111 -->
            <!-- <div class="information-list-item">
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F19%2F20210819230623_46315.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681829101&t=df65b38726f87cc222e54960684881d8" alt="">
              <div>
                <p>
                  <span class="col">清清</span> 发布了
                  第1期“全栈工程师的必经之路”的讲座
                </p>
                <p>2023-03-19 18:02:38</p>
              </div>
            </div> -->
            <!-- 2222222222222222222222222222222222222222222222222222222222222222222222222 -->
            <!--  <div class="information-list-item">
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F11%2F20200311203900_tsdvu.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681829101&t=38228f5c25ede7eb331678c159416f49" alt="">
              <div>
                <p>
                  <span class="col">小白</span> 发布了
                  第2期“白马大讲堂”互动讨论获奖名单公布
                </p>
                <p>2023-03-21 07:02:38</p>
              </div>
            </div> -->
            <!-- 3333333333333333333333333333333333333333333333333333333333333333333333333 -->
            <!--  <div class="information-list-item">
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F11%2F20200311084400_qtrvr.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1681829101&t=195c9b33b3809bbcf3546c502b21cb49" alt="">
              <div>
                <p>
                  <span class="col">管理员</span> 发布了
                  第3期“javascript项目实战”的获奖小组的人员名单
                </p>
                <p>2023-04-16 21:02:03</p>
              </div>
            </div>

            <div class="information-list-item">
              <img src="https://inews.gtimg.com/newsapp_bt/0/13538576626/1000" alt="">
              <div>
                <p>
                  <span class="col">小黑子</span> 发布了
                  第4期“人力资源后台管理项目”的获奖的获奖者
                </p>
                <p>2023-04-18 15:08:03</p>
              </div>
            </div> -->

            <div v-for="(item,index) in list" :key="index" class="information-list-item">
              <img :src="item.icon" alt="">
              <div>
                <p>
                  <span class="col">{{ item.notice.replace(/黑马程序员/g , '小清') }}</span>
                </p>
                <p>{{ item.createTime }}</p>
              </div>
            </div>

          </div>
        </div>
        <div class="panel">
          <!-- 放置雷达图 -->
          <radar />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import CountTo from 'vue-count-to'
import { mapGetters } from 'vuex'
import { getHomeData, getMessageList } from '@/api/home'
import Radar from './components/radar'

// import * as echarts from 'echarts' // 引入所有的echarts
// 按需导入
import * as echarts from 'echarts/core' // 引入核心包
import { LineChart } from 'echarts/charts' // 引入折线图
import { GridComponent, LegendComponent } from 'echarts/components' // 引入组件
import { CanvasRenderer } from 'echarts/renderers'
// 注册核心包
echarts.use([
  LineChart,
  GridComponent,
  CanvasRenderer,
  LegendComponent
])

export default {
  components: {
    CountTo,
    Radar

  },
  data() {
    return {
      homeData: {}, // 存放首页数据的对象
      list: []
    }
  },
  // 计算属性
  computed: {
    ...mapGetters(['name', 'avatar', 'company', 'departmentName']) // 映射给了计算属性
  },
  watch: {
    homeData() {
      console.log(this.homeData)
      // 设置图表
      this.social.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.homeData.socialInsurance?.xAxis
        },
        yAxis: {
          type: 'value'
        },
        // 提示框组件
        tooltip: {
          trigger: 'axis'
        },
        series: [
          {
            data: this.homeData.socialInsurance?.yAxis,
            type: 'line',
            areaStyle: {
              color: '#04c9be' // 填充颜色
            },
            lineStyle: {
              color: '#04c9be' // 线的颜色
            }
          }
        ]
      })
      this.provident.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.homeData.providentFund?.xAxis
        },
        yAxis: {
          type: 'value'

        },
        // 提示框组件
        tooltip: {
          trigger: 'axis'
        },
        // 绘图网格
        grid: {
          left: '10%',
          top: '15%'
        },
        color: [{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#04c9be' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#04c9be' // 100% 处的颜色
          }],
          global: false // 缺省为 false  如果配置成 true，则xy表示具体的坐标
        }],
        series: [
          {
            data: this.homeData.providentFund?.yAxis,
            type: 'line',
            symbolSize: 5, // 标记图形的大小
            lineStyle: {
              width: 2
            },
            smooth: true, // 是否平滑过渡
            areaStyle: { // 阴影
              color: { // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#82d5e5' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#04c9be' // 80% 处的颜色
                }],
                global: false // 缺省为 false
              }
            } /*             areaStyle: {
              color: '#04c9be' // 填充颜色
            } */
            /*  lineStyle: {
              color: '#04c9be' // 线的颜色
            } */
          }
        ]
      })
    }
  },
  created() {
    this.getHomeData()
    this.getMessageList()
  },
  mounted() {
    // 获取展示的数据 设置给图表
    // 监听homeData的变化
    this.social = echarts.init(this.$refs.social) // 初始化echart
    // data中没有声明 不是响应式
    this.provident = echarts.init(this.$refs.provident)
  },
  methods: {
    async getHomeData() {
      this.homeData = await getHomeData()
    },
    async getMessageList() {
      this.list = await getMessageList()
    }
  }
}
</script>

<style scoped lang="scss">
.dashboard {
  background: #f5f6f8;
  width: 100%;
  min-height: calc(100vh - 80px);

  ::v-deep .el-calendar-day {
  height:  40px;
 }
 ::v-deep .el-calendar-table__row td,::v-deep .el-calendar-table tr td:first-child, ::v-deep .el-calendar-table__row td.prev{
  border:none;
 }

.date-content {
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.date-content .rest {
  color: #fff;
  border-radius: 50%;
  background: rgb(250, 124, 77);
  width: 20px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  margin-left: 10px;
}
.date-content .text{
  width: 20px;
  height: 20px;
  line-height: 20px;
 display: inline-block;

}
::v-deep .el-calendar-table td.is-selected .text{
   background: #409eff;
   color: #fff;
   border-radius: 50%;
 }
 ::v-deep .el-calendar__header {
   display: none
 }
  .container {
    display: flex;
    .right {
      width: 40%;
      .panel {
        margin-left: 8px;
      }
      :nth-child(1) {
        margin-top: 0;
      }
    }
    .left {
      flex: 1;
      :nth-child(1) {
        margin-top: 0;
      }
    }
    .panel {
      background-color: #fff;

      margin-top: 8px;
      padding: 20px;
      .panel-title {
        font-size: 16px;
        color: #383c4e;
        font-weight: 500;
      }
      // 用户信息样式
      .user-info {
        display: flex;
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background-color: #d9d9d9;
          line-height: 48px;
          text-align: center;
        }
         .username {
           width: 30px;
           height: 30px;
           text-align: center;
           line-height: 30px;
           border-radius: 50%;
           background: #04c9be;
           color: #fff;
           margin-right: 4px;
         }
        .company-info {
          margin-left: 10px;
          height: 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .title {
            color: #383c4e;
            font-weight: 500;
            font-size: 16px;
            font-family: PingFang SC, PingFang SC-Medium;
            span {
              font-size: 12px;
              background: #f5f6f8;
              text-align: center;
              padding: 2px 8px;
              border-radius: 2px;
              color: #697086;
            }
          }
          .depart {
            font-size: 14px;
            color: #697086;
            font-weight: 400;
          }
        }
      }
      // 代办样式
      .todo-list {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        .todo-item {
          width: 18%;
          height: 90px;
          display: flex;
          flex-direction: column;
          padding: 10px;
          justify-content: space-around;
          :nth-child(1) {
            color: #697086;
            font-size: 14px;
          }
          :nth-child(2) {
            color: #383c4e;
            font-size: 30px;
            font-weight: 500;
          }
        }
      }
      // 快捷入口
      .quick-entry {
        margin-top: 16px;
        display: flex;
        .entry-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 60px;
          &:nth-child(1) {
            margin-left: 0px;
          }
          .entry-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #f5f6f8;
            background-size: cover;
            &.approval {
              background-image: url('~@/assets/common/approval.png');
            }
             &.social {
              background-image: url('~@/assets/common/social.png');
            }
             &.salary {
              background-image: url('~@/assets/common/salary.png');
            }
            &.role {
              background-image: url('~@/assets/common/role.png');
            }
             &.bpm {
              background-image: url('~@/assets/common/bpm.png');
            }
          }
          span {
            color: #697086;
            font-size: 14px;
            margin-top: 8px;
          }
        }
      }
      // 图表数据
      .chart-container {
        display: flex;
        .chart-info {
         width: 240px;
          margin-top: 10px;
          .info-main {
            padding: 10px;
            display: flex;
            flex-direction: column;
            :nth-child(1) {
              font-size: 14px;
              color: #697086;
            }
            :nth-child(2) {
              margin-top: 10px;
              font-size: 30px;
              color: #04c9be;
              font-weight: 500;
            }
          }
          .info-list {
            background: #f5f6f8;
            border-radius: 4px;
            padding: 12px 15px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .info-list-item {
              width: 50%;
              margin-top: 10px;
              display: flex;
              flex-direction: column;

              :nth-child(1) {
                font-size: 14px;
                color: #697086;
              }
              :nth-child(2) {
                margin-top: 10px;
                font-size: 30px;
                color: #383c4e;
                font-weight: 500;
              }
            }
          }
        }
        .chart {
          flex:1
        }
      }
      // 帮助链接
      .help {
        display: flex;
        .help-left {
          width: 40%;
        }
        .help-right {
          flex: 1;
        }
        .help-list {
          .help-block {
            background: #f5f6f8;
            border-radius: 4px;
            width: 264px;
            height: 54px;
            padding: 17px 10px;
            font-size: 14px;
            color: #697086;
            margin-top: 10px;
            i {
              width: 14px;
              height: 14px;
              display: inline-block;
              background-size: cover;
              vertical-align: middle;
            }
            i.icon-help {
              background-image: url("~@/assets/common/help.png");
            }
             i.icon-support {
              background-image: url("~@/assets/common/support.png");
            }
             i.icon-add {
              background-image: url("~@/assets/common/add.png");
            }
             i.icon-entry {
              background-image: url("~@/assets/common/entry.png");
            }
          }
        }
      }
      // 通知公告
      .information-list {
        margin-top: 20px;
        .information-list-item {
          display: flex;
          align-items: center;
          margin:15px 0;
          img {
            width: 40px;
            height: 40px;
            border: 50%;
          }
         .col {
           color: #8a97f8;
         }
         div :nth-child(2) {
          color: #697086;
          font-size: 14px;
         }
        }
      }
    }
  }
}
</style>
