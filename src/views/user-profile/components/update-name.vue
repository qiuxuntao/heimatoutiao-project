<template>
  <div class="update-name">
    <!-- 导航栏 -->
    <van-nav-bar
      title="设置昵称"
      left-text="取消"
      right-text="完成"
      left-arrow
      @click-left="$emit('close')"
      @click-right="onClickRight"
    />
    <!-- 导航栏 -->

    <!-- 输入框 -->
    <van-field
      v-model="message"
      rows="2"
      autosize
      label="昵称"
      type="textarea"
      maxlength="7"
      placeholder="请输入昵称"
      show-word-limit
    />
    <!-- 输入框 -->
  </div>
</template>

<script>
export default {
  name: 'updateNname',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onClickRight () {
      this.$router.back('/my')
    }
  }
}
</script>

<style>
</style>
