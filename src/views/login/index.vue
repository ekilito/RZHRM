<template>
  <div class="login-container">
    <div class="bg-circle">
      <img class="lt" src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u3.png" alt="">
      <img class="lb" src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u5.png" alt="">
      <img class="rt" src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u4.png" alt="">
    </div>
    <div class="main">
      <img src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u25.png" alt="">
      <el-card shadow="never">
        <div class="title">
          <img src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u24.png" alt="">
          <h2>人力资源后台管理</h2>
        </div>
        <!--登录表单-->
        <!--登录表单-->
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
          <el-form-item prop="mobile">
            <el-input v-model="loginForm.mobile" placeholder="请输入手机号">
              <template #prefix>
                <img src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u13.png" alt="">
              </template>
            </el-input>
          </el-form-item><!-- show-password 显示密文 -->
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" show-password placeholder="请输入密码">
              <template #prefix>
                <img src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u17.png" alt="">
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginForm.code" placeholder="请输入验证码">
              <template #prefix>
                <img src="https://img.axureshop.com/7a/4a/a8/7a4aa826e79b40d086fba67fb100e0f9/images/0登陆页/u21.png" alt="">
              </template>
              <template #append>
                <span>1 2 7 4</span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="isAgree">
            <el-checkbox v-model="loginForm.isAgree">用户平台使用协议</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="loginClick">登录</el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
// import request from '@/utils/request'
export default {
  name: 'Login',
  data() {
    return {
      // 登录信息
      // 登录信息
      loginForm: {
        mobile: process.env.NODE_ENV === 'development' ? '13800000002' : '',
        password: process.env.NODE_ENV === 'development' ? 'hm#qd@23!' : '',
        isAgree: process.env.NODE_ENV === 'development',
        code: process.env.NODE_ENV === 'development' ? '1274' : ''
      },
      // 校验规则
      loginRules: {
        mobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度6-16位', trigger: 'blur' }
        ],
        isAgree: [
          {
            // 自定义校验函数(校验规则, 要校验的值, 成功或失败的回调函数)
            validator: (rule, value, callback) => {
              // rule 检验规则
              // value 校验的值
              // callback 函数
              // 成功执行callback 失败也执行callback(错误对象 new Error(错误信息))
              value ? callback() : callback(new Error('未勾选用户协议'))
            }
          }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { pattern: /^\d{4}$/, message: '验证码是四位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录提交
    async loginClick() {
      const res = await this.$refs.loginForm.validate()
      if (res) {
        // alert('校验通过')
        // Vuex的actions返回的是Promiss对象
        await this.$store.dispatch('user/login', this.loginForm)
        // await this.$store.dispatch('user/login', this.loginForm)
        // 如果登录成功，跳转到首页
        this.$router.push('/')
      }
    }

  }
}
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  height: 100%;
  background-image: linear-gradient(#3fccfd, #996cfb);
  overflow: hidden;

  // 三个圆形图片的位置
  .bg-circle {
    .lt {
      position: absolute;
      left: 40px;
      top: 40px;
      opacity: 0.3;
    }
    .lb {
      position: absolute;
      left: -250px;
      bottom: -200px;
    }
    .rt {
      position: absolute;
      right: -70px;
      top: -200px;
    }
  }

  // 主体内容
  .main {
    // 水平和垂直居中
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;

    // 登录卡片
    .el-card {
      margin-left: 60px;

      // 卡片标题
      .title {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 23px;
        font-weight: 700;
        font-style: normal;
        color: rgb(67, 141, 238);

        img {
          width: 50px;
          height: 42px;
        }
      }

      // 登录表单文本框
      .el-input {
        width: 350px;
        height: 44px;

        // 文本框内容
        ::v-deep .el-input__inner {
          background-color: #f4f5fb;
          height: 44px;
        }

        // 文本框头部图标样式
        img {
          width: 20px;
          height: 20px;
          margin-top: 12px;
        }

        // 文本框尾部验证码样式
        ::v-deep .el-input-group__append {
          font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
          font-weight: 700;
          font-size: 16px;
          color: #FF7733;
          // height: 44px;
        }
      }

      // 复选款样式
      .el-checkbox {
        color:#606266;
      }

      // 登录按钮样式
      .login-btn {
        width: 350px;
      }
    }
  }
}
</style>
