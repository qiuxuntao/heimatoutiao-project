<template>
  <van-icon
    :name="value === 1 ? 'good-job' : 'good-job-o'"
    :class="{
      Liked: value === 1,
    }"
    :loading="loading"
    @click="onLike"
  />
</template>

<script>
import { addLike, deleteLike } from '@/api/article.js'
import { Toast } from 'vant'
export default {
  data () {
    return {
      loading: false
    }
  },
  props: {
    value: {
      type: Number,
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      required: true
    }
  },
  methods: {
    async onLike () {
      this.loading = true

      try {
        let status = -1// 没有点赞状态 -1
        if (this.value === 1) {
          // 已经点赞，取消点赞
          await deleteLike(this.articleId)

          Toast('取消点赞成功')
        } else {
          // 没有点赞，点击添加点赞
          await addLike(this.articleId)
          status = 1

          Toast('点赞成功')
        }
        this.$emit('input', status)
      } catch (err) {
        Toast('操作失败，请重试')
      }

      this.loading = false
    }
  }
}
</script>

<style scoped lang="less">
.van-icon {
  color: gold;
}
</style>
