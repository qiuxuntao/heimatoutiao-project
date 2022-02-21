<template>
  <div class="qa-container">
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked">全选</van-checkbox>
  <template #tip>
    你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
  </template>
</van-submit-bar>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  setup () {
    const onSubmit = () => Toast('点击按钮')
    const onClickLink = () => Toast('修改地址')
    return {
      onSubmit,
      onClickLink
    }
  },
  name: 'QaPage',
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

<style scoped>
.van-submit-bar {
    position: fixed;
    bottom: 100px;
    left: 0;
    z-index: 100;
    width: 100%;
    user-select: none;
}
</style>
