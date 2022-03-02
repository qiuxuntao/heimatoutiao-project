<template>
  <div class="search-suggestion">
    <van-cell v-for="(text,index) in suggestions" :key="index" title="text" icon="search"></van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from '@/api/search.js'
import { Toast } from 'vant'
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
      handler (value) {
        console.log('handler', value)
        this.loadSearchSuggestions(value)
      },
      immediate: true
    }
  },
  created () {},
  mounted () {},
  methods: {
    async loadSearchSuggestions (q) {
      try {
        const { data } = await getSearchSuggestions(q)
        this.suggestions = data.data.options
      } catch (err) {
        Toast('数据获取失败，请稍后重试', err)
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
