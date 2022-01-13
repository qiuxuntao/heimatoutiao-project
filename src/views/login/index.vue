<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" left-text="返回" left-arrow @click-left="onClickLeft">
      </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 登录表单 -->

    <!--
      表单验证：
        1、给 van-field 组件配置 rules 验证规则
          参考文档：https://youzan.github.io/vant/#/zh-CN/form#rule-shu-ju-jie-gou
        2、当表单提交的时候会自动触发表单验证
           如果验证通过，会触发 submit 事件
           如果验证失败，不会触发 submit
     -->
    <van-form ref="loginForm" @submit="onSubmit">
      <!-- 手机号 -->
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRulers.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="heimatoutiao heimatoutiao-shouji"></i>
      </van-field>
      <!-- 验证码 -->
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请输入验证码"
        :rules="userFormRulers.code"
        type="number"
        maxlength="6"
      >
        <i slot="left-icon" class="heimatoutiao heimatoutiao-yanzhengma"></i>

        <!-- 发送短信验证码按钮 -->
        <template #button>
          <!-- time倒计时时间 -->
          <van-count-down v-if="isCountDownShow" :time="1000 *60 " format="ss s后获取"  @finish="isCountDownShow=false"/>
          <van-button
            v-else
            class="send-sms-btn"
            round
            size="small"
            type="default"
            @click="onSendSms"
            native-type="button"
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
import { login, sendSms } from '@/api/user.js'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810' // 验证码
      },
      // 配置ruler手机号 手机验证码验证规则
      userFormRulers: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3|5|7|8]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      },
      isCountDownShow: false// 是否显示倒计时
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 点击回退
    onClickLeft () {
      this.$router.back()
    },
    async onSubmit () {
      // 1.获取表单数据(登陆的手机号和验证码)
      const user = this.user
      console.log(user)

      // 2.表单验证
      // 在组件中必须通过this. $toast 来调用Toast 组件
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 禁止背景点击
        duration: 0 // 持续时间，默认2000，如果为0，持续展示
      })
      // 3.提交表单请求登陆
      try {
        // try里面的一定是成功的
        const { data } = await login(user)
        // commit传给data token值
        this.$store.commit('setUser', data.data)
        console.log('登陆成功', data)
        this.$toast.success('登陆成功')

        // 登陆成功，返回原页面
        this.$router.back()
      } catch (err) {
        // catch一定是失败的
        if (err.response.status === 400) {
          this.$toast.fail('登录失败，手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败,请稍后重试')
        }
      }
      // 4.根据请求响应结果处理后续操作
    },
    async onSendSms () {
      console.log('onSendSms')
      // 1. 校验手机号
      // console.log(this)
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (err) {
        return console.log('验证失败', err)
      }

      // 2. 验证通过，显示倒计时
      this.isCountDownShow = true
      // 3. 请求发送验证码
      try {
        const res = await sendSms(this.user.mobile)
        console.log('发送成功', res)
        this.$toast('发送成功')
        // 发送失败，关闭倒计时
      } catch (err) {
        // 发送失败关闭倒计时
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送过于频繁,一分钟后重试')
          console.log('发送过于频繁,一分钟后重试', err)
        } else {
          this.$toast('发送失败,请稍后重试')
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  background: url("~@/assets/海豚表演.png");
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
      background-color: #8fc9e3;
      border: none;
    }
  }
}
</style>
