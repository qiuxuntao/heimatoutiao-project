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
      v-model="localName"
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
import { updateUserProfile } from '@/api/user.js'
import { Toast } from 'vant'
export default {
  name: 'updateNname',
  data () {
    return {
      localName: this.value
    }
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },

  methods: {
    async  onClickRight () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true, // 禁止背景点击
        duration: 3 // 持续时间，默认2000，如果为0，持续展示
      })
      try {
        const localName = this.localName
        if (!localName.length) {
          Toast('昵称不能为空')
          return
        }
        await updateUserProfile({
          name: localName
        })
        Toast('修改昵称成功')
        // 更新视图
        this.$emit('input', localName)

        // 关闭弹层
        this.$emit('close')
      } catch (err) {
        Toast('修改昵称失败')
      }
    }
  }
}
</script>

<style scoped lang='less'>
.van-field{
    background-color: #f5f5fa8a;
}
.field-warp{
    padding: 20px;
}
</style>
