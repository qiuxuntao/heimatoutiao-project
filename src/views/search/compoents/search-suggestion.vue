<template>
  <div class="search-suggestion">
    <van-cell
      v-for="(text, index) in suggestions"
      :key="index"
      icon="search"
    >
    <div slot="title" v-html="hightlight(text)"></div>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search.js'
import { Toast } from 'vant'
// 按需加载有好处：只会把使用到的成员加载到结果中
import { debounce } from 'lodash'
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchContent: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      suggestions: []
    }
  },
  computed: {},
  watch: {
    searchContent: {
      // 固定handler函数
      // handler (value) {
      //   this.loadSearchSuggestions(value)
      // },
      handler: debounce(function (value) {
        this.loadSearchSuggestions(value)
      }, 200),
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    async loadSearchSuggestions (q) {
      console.log('2222')
      try {
        const { data } = await getSearchSuggestions(q)
        this.suggestions = data.data.options
        console.log(data)
      } catch (err) {
        Toast('数据获取失败，请稍后重试', err)
      }
    },
    hightlight (text) {
      const highlightStr = text.replace(/sdad/gi, '<span class="active">{{this.searchContent}}</span>')
      // 正则表达式 //中间的内容都会当做匹配自字符使用，而不是数据变量
      // 如果需要更具数据变量动态创建正则表达式，则手动new REdExp
      const reg = new RegExp(this.searchContent, 'gi')

      return text.replace(reg, highlightStr)
    }
  }
}
</script>

<style scoped lang="less">
.search-suggestion{
 /deep/ span.active{
    color: hotpink;
  }
}
</style>
