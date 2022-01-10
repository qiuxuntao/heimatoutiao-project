<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <!-- 手机号 -->
      <van-field v-model="user.mobile" name="手机号" placeholder="请输入手机号">
        <i slot="left-icon" class="heimatoutiao heimatoutiao-shouji"></i>
      </van-field>
      <!-- 验证码 -->
      <van-field v-model="user.code" name="验证码" placeholder="请输入验证码">
        <i slot="left-icon" class="heimatoutiao heimatoutiao-yanzhengma"></i>

        <!-- 发送短信验证码按钮 -->
        <template #button>
          <van-button  class="send-sms-btn" round size="small" type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>

      <!-- 登陆按钮 -->
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit () {
      // 1.获取表单数据(登陆的手机号和验证码)
      const user = this.user
      console.log(user)
      // 2.表单验证
      // 3.提交表单请求登陆
      try {
        const res = await login(user)
        console.log('登陆成功', res)
      } catch (err) {
        console.log('登陆失败', err)
      }
      // 4.根据请求响应结果处理后续操作
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .heimatoutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 158px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
