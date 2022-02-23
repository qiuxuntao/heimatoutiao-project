<template>
  <div class="register-container">
    <van-nav-bar
      title="注册"
      left-text="返回"
      right-text="登陆"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="短信验证码"
        label="短信验证码"
        placeholder="短信验证码"
        :rules="[{ required: true, message: '请填写手机验证码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    onClickLeft () {
      this.$router.back()
    },

    onClickRight () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.van-button--info {
    color: #fff;
    background-color: #8fc9e3;
    border: 0.02667rem solid #8fc9e3;
    border-radius: inherit;
}
</style>
