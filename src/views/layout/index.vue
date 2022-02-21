<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <!--
      route: 开启路由模式
     -->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/">
        <i slot="icon" class="heimatoutiao heimatoutiao-shouye"></i>
        <span class="text">优原创</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="heimatoutiao heimatoutiao-wenda"></i>
        <span class="text">探索</span>
      </van-tabbar-item>
      <van-tabbar-item to="/issue">
        <i slot="icon" class="heimatoutiao heimatoutiao-wode"></i>
        <span class="text">发布</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i slot="icon" class="heimatoutiao heimatoutiao-shipin"></i>
        <span class="text">消息</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="heimatoutiao heimatoutiao-wode"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    i.toutiao {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
