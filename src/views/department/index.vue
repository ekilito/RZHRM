<template>
  <div class="container">
    <div class="app-container">
      <el-card>
        <el-tabs style="padding: 10px 40px;">
          <el-tab-pane label="组织结构">
            <!-- 展示树形结构 -->
            <el-tree highlight-current style="padding: 20px 80px;" :expand-on-click-node="false" default-expand-all :data="depts" :props="defaultProps">
              <!-- 节点结构 -->
              <!-- v-slot="{ node, data }" 只能作用在template 不断的循环-->
              <template v-slot="{ data }">
                <el-row style="width:100%;height:40px" type="flex" justify="space-between" align="middle">
                  <el-col>{{ data.name }}</el-col>
                  <el-col :span="4">
                    <span class="tree-manager">{{ data.managerName }}</span>
                    <!-- $event 实参 表示类型 -->
                    <el-dropdown @command="operateDept($event, data.id)">
                      <!-- 显示区域内容 -->
                      <span class="el-dropdown-link">
                        操作<i class="el-icon-arrow-down el-icon--right" />
                      </span>
                      <!-- 下拉菜单选项 -->
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item style="color: #409eff;" command="add">添加子部门</el-dropdown-item>
                        <el-dropdown-item style="color: #409eff;" command="edit">编辑部门</el-dropdown-item>
                        <el-dropdown-item style="color: #409eff;" command="del">删除</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </template>
            </el-tree>
          </el-tab-pane>

        </el-tabs>
      </el-card>

    </div>
    <div class="copy">
      <i class="el-icon-s-platform" />
      <p>copyright © 2023 小清 iHRM 系统 版权所有</p>
    </div>
    <!-- 放置弹层组件 -->
    <add-dept ref="addDept" :current-node-id="currentNodeId" :show-dialog.sync="showDialog" @updateDepartment="getDepartment" />
  </div>
</template>
<script>
import { getDepartment, delDepartment } from '@/api/department'
import { transListToTreeData } from '@/utils'
import AddDept from './components/add-dept.vue'
export default {
  name: 'Department',
  components: { AddDept },
  data() {
    return {
      currentNodeId: null, // 存储当前点击的id
      showDialog: false, // 控制弹层的显示和隐藏
      depts: [], // 数据属性
      defaultProps: {
        children: 'children', // 读取子节点的名字
        label: 'name' // 要显示的字段的名字
      }
    }
  },
  created() {
    this.getDepartment()// 调用获取数据的接口
  },
  methods: {
    async getDepartment() {
      const result = await getDepartment()
      this.depts = transListToTreeData(result, 0)
    },

    // 操作部门方法
    // 操作部门方法
    operateDept(type, id) {
      if (type === 'add') {
        // 添加子部门
        this.showDialog = true // 显示弹层
        this.currentNodeId = id
      } else if (type === 'edit') {
        // 编辑部门场景
        this.showDialog = true
        this.currentNodeId = id // 记录id 要用它获取数据
        // 更新props- 异步动作
        // 直接调用了子组件的方法 同步的方法
        // 要在子组件获取数据
        // 父组件调用子组件的方法来获取数据
        this.$nextTick(() => {
          this.$refs.addDept.getDepartmentDetail() // this.$refs.addDept等同于子组件的this
        })
      } else {
        // 删除部门
        this.$confirm('您确认要删除该部门吗').then(async() => {
          await delDepartment(id)
          // 提示消息
          this.$message.success('删除部门成功')
          this.getDepartment()
        })
      }
    }
  }
}
</script>

<style scoped>
.app-container {

  font-size: 14px;
  font-weight: 500;
}
.tree-manager {
  width: 50px;
  display: inline-block;
  margin: 20px;
}
.copy {
  text-align: center;
  color: darkgray;
  font-size: 12px;
  margin: 10px 0 100px;
}
</style>
