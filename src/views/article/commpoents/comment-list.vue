<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <CommentItem v-for="(item, index) in list" :key="index" :comment="item" />
  </van-list>
</template>

<script>
import { getComments } from '@/api/comment.js'
import { Toast } from 'vant'
import CommentItem from './comment-item.vue'
export default {
  name: 'CommentList',
  data () {
    return {
      // list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页标记
      limit: 10
    }
  },

  props: {
    source: {
      type: [Number, String, Object],
      required: true
    },
    list: {
      type: Array,
      default: () => []// 子组件需要自己用，父组件需要给父组件用，不会影响
    }
  },
  components: { CommentItem },
  created () {
    this.onLoad()
  },
  methods: {
    async onLoad () {
      // 1.请求获取数据
      try {
        const { data } = await getComments({
          type: 'a', // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
          source: this.source, // 源id，文章id或评论id
          offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
          limit: this.limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
        })
        console.log('评论', data)
        // 2.将数据添加到列表中
        const { results } = data.data
        this.list.push(...results)
        //
        this.$emit('onload-success', data.data)
        // 3.将loading设置为false
        this.loading = false
        // 4.判断是否还有数据
        if (results.length) {
          // 有就获取下一页的数据页码
          this.offset = data.data.last_id
        } else {
          // 没有就将finished 设置结束
          this.finished = true
        }
      } catch (err) {
        Toast('加载失败，请重试')
      }
    }
  }
}
</script>

<style>
</style>
