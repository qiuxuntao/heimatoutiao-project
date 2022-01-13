<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
        >搜索</van-button
      >
    </van-nav-bar>
    <!-- /导航栏 -->

    <!-- 标签栏 -->
    <van-tabs v-model="active" animated swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <van-tab title="标签 7">内容 7</van-tab>
      <van-tab title="标签 8">内容 8</van-tab>
    </van-tabs>
    <!-- 标签栏 -->
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    // active是在下标的显示内容
    return { active: 0 }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.home-container {
  .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background-color: #73adf9;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }
}
</style>
