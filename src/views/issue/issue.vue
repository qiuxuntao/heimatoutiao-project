<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)

export default {
  data () {
    return {
      images: [
        'https://img-blog.csdnimg.cn/20210603202744479.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/20210603202813477.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/20210603202833673.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/20210603202859236.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/20210603202932499.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/20210603203010303.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/20210603203020311.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  width: 100%;
}
.swipe img {
  display: inline-block;
  width: 100%;
  height: 380px;
}
</style>
