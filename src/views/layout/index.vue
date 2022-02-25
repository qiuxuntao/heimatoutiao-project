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
        <i slot="icon" class="heimatoutiao heimatoutiao-zhuye"></i>
        <span class="text">优原创</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="heimatoutiao heimatoutiao-shangpin"></i>
        <span class="text">商品</span>
      </van-tabbar-item>
      <van-tabbar-item to="/issue">
        <i slot="icon" class="heimatoutiao heimatoutiao-gouwuche01"></i>
        <span class="text">购物车</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i slot="icon" class="heimatoutiao heimatoutiao-shipin1"></i>
        <span class="text">视频</span>
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
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.van-tabbar-item {
  background: linear-gradient(to right, pink, #93d5f4);
  // border: 0.02667rem solid gold;
}
.van-tabbar-item--active {
  background: linear-gradient(to right, #5fcd72, #61d3df);

  // border: 0.02667rem solid gold;
}
.heimatoutiao {
  font-size: 40px;
}
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
