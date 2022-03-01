<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" fixed>
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
    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
        <ariclelist :channel="channel"></ariclelist>
      </van-tab>

      <div
        slot="nav-right"
        class="hamburger-btn"
        @click="isChannelEditShow = true"
      >
        <i class="heimatoutiao heimatoutiao-fenlei-tubiao"></i>
      </div>
    </van-tabs>
    <!-- 标签栏 -->
    <!-- 频道弹出层 -->
    <!-- 频道编辑 -->
    <van-popup
      class="edit-channel-popup"
      v-model="isChannelEditShow"
      position="bottom"
      close-icon-position="top-left"
      :style="{ height: '100%' }"
      closeable
    >
      <ChannelEdit :mychannels="channels" :active="active" @update-active="onUpadateAcive"></ChannelEdit>
    </van-popup>
    <!-- /频道编辑 -->

    <!-- 频道弹出层 -->
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user.js'
import ariclelist from './components/article-list.vue'
import ChannelEdit from '@/views/home/components/channel-edit.vue'

export default {
  name: 'HomeIndex',
  components: { ariclelist, ChannelEdit },
  props: {},
  data () {
    // active是在下标的显示内容
    return {
      active: 0,
      channels: [], // 频道列表
      isChannelEditShow: false // 频道弹出层显示
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels
        console.log('频道列表:', data)
      } catch (err) {
        this.$toast('获取频道失败')
      }
    },
    onUpadateAcive (index) {
      this.active=index
      this.isChannelEditShow=false
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  padding-top: 186px;
  .heimatoutiao-fenlei-tubiao {
    position: fixed;
    right: 0px;
    top: 122px;
    font-size: 34px;
  }

  .search-btn[data-v-39f87be5] {
    width: 450px;
  }
  padding-bottom: 100px;
  .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 555px;
    height: 64px;
    background: linear-gradient(to right, pink, gold);
    border: none;
    font-size: 28px;

    .van-icon {
      font-size: 32px;
    }
  }

  /deep/.channel-tabs {
    .van-tabs__wrap {
      height: 90px;
      position: fixed;
      top: 92px;
      left: 0;
      right: 0;
      z-index: 1;
      border: solid 0.5px #7df9;
    }
    .van-tab {
      min-width: 200px;
      min-height: 82px;
      font-size: 30px;
      color: #777777;
      border-right: 1px solid #edeff3;
    }
    .van-tab--active {
      color: #7df9;
    }
    .van-tabs__line {
      bottom: 8px;
      background-color: #7df9;
      width: 50px !important;
      height: 6px;
    }
    .van-tabs__nav {
      padding-bottom: 0;
    }

    .hamburger-btn {
      position: fixed;
      right: 0;
      // display: flex;
      justify-content: center;
      align-content: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      opacity: 0.902;
    }
  }
}
</style>
