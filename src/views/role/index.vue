<template>
  <div class="container">
    <div class="app-container">
      <!-- 角色管理内容 -->
      <div class="role-operate">
        <el-button size="mini" type="primary" @click="showDialog = true">添加角色</el-button>
      </div>
      <!-- 放置table组件 -->
      <el-table :data="list">
        <!-- 放置列 -->
        <el-table-column prop="name" align="center" width="200" label="角色">
          <template v-slot="{ row }">
            <!-- 条件判断 -->
            <el-input v-if="row.isEdit" v-model="row.editRow.name" size="mini" />
            <span v-else>{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state" align="center" width="200" label="启用">
          <!-- 自定义列结构 -->
          <!-- 自定义列结构 -->
          <template v-slot="{ row }">
            <el-switch v-if="row.isEdit" v-model="row.editRow.state" :active-value="1" :inactive-value="0" />
            <span v-else>  {{ row.state === 1 ? "已启用" : row.state === 0 ? "未启用" : "无" }} </span>
          </template>
        </el-table-column>
        <el-table-column prop="description" align="center" label="描述">
          <template v-slot="{ row }">
            <el-input v-if="row.isEdit" v-model="row.editRow.description" size="mini" type="textarea" />
            <span v-else>{{ row.description }}</span>
          </template>

        </el-table-column>
        <el-table-column align="center" label="操作">
          <template v-slot="{ row }">
            <template v-if="row.isEdit">
              <!-- 编辑状态 -->
              <el-button type="primary" size="mini" @click="btnEditOK(row)">确定</el-button>
              <el-button size="mini" @click="row.isEdit = false">取消</el-button>
            </template>
            <template v-else>
              <!-- 非编辑状态 -->
              <el-button size="mini" type="text" @click="btnPermission(row.id)">分配权限</el-button>
              <el-button size="mini" type="text" @click="btnEditRow(row)">编辑</el-button>
              <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="confirmDel(row.id)">
                <el-button slot="reference" style="margin-left:10px" size="mini" type="text">删除</el-button>
              </el-popconfirm>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <!-- 放置分页组件 -->
      <el-row type="flex" style="height:60px" align="middle" justify="end">
        <!-- 放置分页组件 -->
        <el-pagination
          :page-size="pageParams.pagesize"
          :current-page="pageParams.page"
          :total="pageParams.total"
          layout="prev, pager, next"
          @current-change="changePage"
        />
      </el-row>
    </div>
    <!-- 放置添加角色弹层 -->
    <el-dialog width="500px" title="新增角色" :visible.sync="showDialog" @close="btnCancel">
      <!-- 表单内容 -->
      <el-form ref="roleForm" :model="roleForm" :rules="rules" label-width="120px">
        <el-form-item prop="name" label="角色名称">
          <el-input v-model="roleForm.name" style="width:300px" size="mini" />
        </el-form-item>
        <el-form-item label="启用">
          <!-- 如果不需要校验 就不需要写 prop属性    :active-value 设置开关的值-->
          <el-switch v-model="roleForm.state" :active-value="1" :inactive-value="0" size="mini" />
        </el-form-item>
        <el-form-item prop="description" label="角色描述">
          <el-input v-model="roleForm.description" type="textarea" :rows="3" style="width:300px" size="mini" />
        </el-form-item>
        <el-form-item>
          <el-row type="flex" justify="center">
            <el-col :span="12">
              <el-button type="primary" size="mini" @click="btnOK">确定</el-button>
              <el-button size="mini" @click="btnCancel">取消</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- 放置权限弹层 -->
    <el-dialog :visible.sync="showPermissionDialog" title="分配权限">
      <!-- 放置权限数据 -->
      <!-- ：data绑定数据 ， show-checkbox显示可选择的节点复选框 ：props里lable指定要显示的值  default-expand-all默认展开所有节点 -->
      <!-- :default-checked-keys 默认选中勾选的数据 -->
      <!-- node-key="id"  key就会去找对应id的数据，勾选上 -->
      <!-- check-strictly 解除父和子的强关联的关系 -->
      <el-tree
        ref="permTree"
        check-strictly
        node-key="id"
        :data="permissionData"
        :props="{ label: 'name' }"
        show-checkbox
        default-expand-all
        :default-checked-keys="permIds"
      />
      <el-row slot="footer" type="flex" justify="center">
        <el-col :span="6">
          <el-button type="primary" size="mini" @click="btnPermissionOK">确定</el-button>
          <el-button size="mini" @click="showPermissionDialog = false">取消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { getRoleList, addRole, updateRole, delRole, getRoleDetail, assignPerm } from '@/api/role'
import { transListToTreeData } from '@/utils'
import { getPermissionList } from '@/api/permission'
export default {
  name: 'Role',
  data() {
    return {
      showPermissionDialog: false, // 默认不显示分配权限的弹层
      permissionData: [], // 承载权限的数组 接收权限树数据
      currentRoleId: null, // 记录当前的id
      permIds: [], // 接收展示显示的权限数据
      showDialog: false,
      list: [],
      // 将分页信息放置一个对象中
      pageParams: { // 根据接口文档起的名字
        page: 1, // 第几页
        pagesize: 5, // 每页多少条
        total: 0 // 总数
      },
      // 角色的表单对象
      roleForm: {
        name: '',
        description: '',
        state: 0 // 默认未启用  关闭 0 打开1
      },
      // 表单校验
      rules: {
        name: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }],
        description: [{ required: true, message: '角色描述不能为空', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList() {
      const { rows, total } = await getRoleList(this.pageParams)
      this.list = rows // 赋值数据
      this.pageParams.total = total
      // 针对每一行数据添加一个编辑标记
      this.list.forEach(item => {
        // item.isEdit = false // 添加一个属性 初始值为false
        // 点击编辑没有用
        // 数据响应式的问题  数据变化  视图更新
        // 添加的动态不具备响应式的特点
        // this.$set(目标对象，属性名称，初始值) 可以针对目标对象 添加的属性 添加响应式
        this.$set(item, 'isEdit', false)
        // 缓存数据
        this.$set(item, 'editRow', {
          name: item.name,
          description: item.description,
          state: item.state
        })
      })
    },
    // 切换分页时 请求新的数据
    changePage(newPage) {
      this.pageParams.page = newPage // 赋值当前页码
      this.getRoleList()
    },
    btnOK() {
      this.$refs.roleForm.validate(async isOK => {
        if (isOK) {
          await addRole(this.roleForm)
          this.$message.success('新增角色成功')
          this.getRoleList()
          this.btnCancel()
        }
      })
    },
    btnCancel() {
      this.$refs.roleForm.resetFields() // 重置表单数据
      this.showDialog = false // 关闭弹层
    },
    // 点击编辑行
    btnEditRow(row) {
      // console.log(row)
      row.isEdit = true // 改变行的编辑状态  进入了编辑状态
      // 更新缓存数据
      row.editRow.name = row.name
      row.editRow.state = row.state
      row.editRow.description = row.description
    },
    // 点击确定时触发
    async btnEditOK(row) {
      // console.log(row)
      if (row.editRow.name && row.editRow.description) {
        // 下一步操作
        await updateRole({ ...row.editRow, id: row.id })
        // 更新成功
        this.$message.success('更新角色成功啦')
        // 更新显示数据  退出编辑状态
        // row.name = row.editRow.name  // eslint校验  误判
        Object.assign(row, {
          ...row.editRow,
          isEdit: false // 退出编辑模式
        })
      } else {
        this.$message.warning('角色和描述不能为空')
      }
    },
    // 点击了确认触发的
    async confirmDel(id) {
      // console.log(id)
      await delRole(id) // 后端删除
      this.$message.success('删除角色成功啦')
      // 删除的如果是最后一个
      if (this.list.length === 1) this.pageParams.page--
      // 重新加载数据
      this.getRoleList()
    },
    async  btnPermission(id) {
      this.currentRoleId = id // 记录id
      const { permIds } = await getRoleDetail(id) // 解构出应该要选中的id
      this.permIds = permIds // 赋值数据

      this.permissionData = transListToTreeData(await getPermissionList(), 0)
      this.showPermissionDialog = true // 打开弹层放到最后 ， 先获取数据，后打开弹层
    },

    // 点击确定时触发
    async  btnPermissionOK() {
      await assignPerm({
        id: this.currentRoleId,
        /* getCheckedKeys() 若节点可被选择，返回目前被选中的节点的key所组成的数组 */
        permIds: this.$refs.permTree.getCheckedKeys()
      })
      this.$message.success('角色分配权限成功啦')
      this.showPermissionDialog = false
    }
  }
}
</script>

<style scoped>
.role-operate {
  padding: 10px;
}
</style>
