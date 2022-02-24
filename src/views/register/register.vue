<template>
  <div class="register-container">
    <van-nav-bar
      title="登陆"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"

        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
       <i slot="left-icon" class="heimatoutiao heimatoutiao-yonghu"></i>
      </van-field>

      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"

      >
      <i slot="left-icon" class="heimatoutiao heimatoutiao-yanzhengma"></i>
      </van-field>

      <van-field
        v-model="username"
        type="number"
        name="手机号"

        placeholder="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      >
      <i slot="left-icon" class="heimatoutiao heimatoutiao-shouji"></i>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登陆</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '11111111',
      password: '11111111'
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
.heimatoutiao {
    font-size: 37px;
  }
.van-nav-bar{
  background-color:#8fc9e3 ;
}
.van-nav-bar__title {
  color: #fff;
}
.van-button--info {
    color: #fff;
    background-color: #8fc9e3;
    border: 0.02667rem solid #8fc9e3;
    border-radius: inherit;
}

</style>
