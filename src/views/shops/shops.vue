<template>
  <div>
    <div>
      <van-nav-bar
  title="商城"
  left-text="返回"
  right-text="购物车"
  left-arrow
  @click-left="onClickLeft"
   @click-right="onClickRight"
/>
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div>
      <van-card
        v-for="shop_info in shop_list"
        :key="shop_info.id"
        :price="shop_info.goods_price"
        :desc="shop_info.goods_name"
        :title="shop_info.goods_name"
        :thumb="shop_info.goods_img"
        @click="shopCard"
      >
        <template #tags>
          <van-tag plain type="danger">{{ shop_info.id }}</van-tag>
          <van-tag plain type="danger">{{ shop_info.id }}</van-tag>
        </template>
        <template #footer>
          <!-- <van-button @click="shop_info.goods_count+=1"  size="mini">+</van-button>
          <van-button  @click="shop_info.goods_count-=1" size="mini">-</van-button> -->
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { Card, Lazyload } from 'vant'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Card)

Vue.use(Lazyload)

export default {
  data () {
    return {
      shop_list: [],
      images: [
        'https://img-blog.csdnimg.cn/20210609085200319.jpg',
        'https://img-blog.csdnimg.cn/2021060909085953.jpg',
        'https://img-blog.csdnimg.cn/5decbe8cf8474a21823da27231696f0a.png',
        'https://img-blog.csdnimg.cn/2b70ba1d6acb496980b3b7e2158ab49a.png',
        'https://img-blog.csdnimg.cn/20210609084540425.jpg',
        'https://img-blog.csdnimg.cn/20210609084613740.jpg'
      ]
    }
  },

  methods: {
    // 请求数据的方法 发送请求  created方法里面调用这个方法 使得一开始就被请求数据
    async initShopList () {
      // 发送请求
      const { data: res } = await axios.get('https://www.escook.cn/api/cart')
      console.log(res)
      // 如果状态码是200 那就转存到data里面的list去
      if (res.status === 200) {
        this.shop_list = res.list
      }
    },
    shopCard () {
      this.$router.push('/shopcard')
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.push('/shopcat')
    }
  },
  computed: {},
  watch: {},
  // 调用initCarList(){} 方法 请求数据
  created () {
    console.log(this.initCarList)
    // 浏览器只要加载就会调用请求数据的方法initShopList()
    this.initShopList()
  },
  mounted () {}
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
