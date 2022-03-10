<template>
  <van-icon
    :name="value ? 'star' : 'star-o'"
    :class="{
      collected: value,
    }"
    :loading="loading"
    @click="onCollect"
  />
</template>

<script>
import { addCollect, deleteCollect } from '@/api/article.js'
import { Toast } from 'vant'
export default {
  name: 'CollectArticle',
  data () {
    return {
      loading: false
    }
  },
  components: {},
  props: {
    value: {
      type: Boolean,
      required: true
    },
    articleId: {
      type: [Number, String, Object],
      required: true
    }

  },
  methods: {
    async onCollect () {
      this.loading = true

      try {
        if (this.value) {
          // 已经收藏，取消收藏
          await deleteCollect(this.articleId)
          console.log(this.articleId)
          Toast('取消收藏成功')
        } else {
          // 没有收藏，点击添加收藏
          await addCollect(this.articleId)
          Toast('收藏成功')
        }
        this.$emit('input', !this.value)
      } catch (err) {
        Toast('操作失败，请重试')
      }

      this.loading = false
    }
  }
}
</script>

<style scoped lang='less'>
.van-icon {
  color: pink;
}
</style>
