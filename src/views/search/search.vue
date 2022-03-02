<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        class="search_text_color"
        v-model="searchContent"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        background="#97cbe7"
        shape="round"
        @focus="isResultShow=false"
      />
      <!-- 搜索栏 -->

      <!-- 搜索结果 -->
      <SearchResult v-if="isResultShow"></SearchResult>
      <!-- 搜索结果 -->

      <!-- 联想建议 -->
      <SearchSuggestion
      v-else-if="searchContent"
      :search-content='searchContent'
      ></SearchSuggestion>
      <!-- 联想建议 -->

      <!-- 搜索历史记录 -->
      <SearchHistory v-else></SearchHistory>
      <!-- 搜索历史记录 -->
    </form>
  </div>
</template>

<script>
import { Toast } from 'vant'
import SearchHistory from './compoents/search-history.vue'
import SearchSuggestion from './compoents/search-suggestion.vue'
import SearchResult from './compoents/search-result.vue'
export default {
  name: 'SearchPage',
  props: {},
  data () {
    return {
      searchContent: '',
      isResultShow: false // 控制搜索结果展示
    }
  },
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResult
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onSearch (val) {
      Toast(val)
      this.isResultShow = true
    },
    onCancel () {
      Toast('返回首页')
      this.$router.back('/')
    }
  }
}
</script>

<style scoped lang='less'>
.search-container {
}
</style>
