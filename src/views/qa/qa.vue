<template>
  <div>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div>
      <van-card
      v-for="shop_info in shop_list" :key="shop_info.id"
        :num="shop_info.num"
        :price="shop_info.price"
        :desc="shop_info.describe"
        :title="shop_info.title"
        :thumb="shop_info.picture"
      >
        <template #tags>
          <van-tag plain type="danger">{{shop_info.label1}}</van-tag>
          <van-tag plain type="danger">{{shop_info.label2}}</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">+</van-button>
          <van-button size="mini">-</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import { Card, Lazyload } from 'vant'
import Vue from 'vue'

Vue.use(Card)

Vue.use(Lazyload)

export default {
  data () {
    return {
      shop_list: [{

        id: 1,
        title: '萨勒芬妮特充气娃娃',
        describe: '很好用哦',
        label1: '超级无敌大甩卖',
        label2: '3折',
        price: 999.99,
        num: 6,
        picture: 'https://img-blog.csdnimg.cn/2021060909085953.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70'

      },
      {

        id: 2,
        title: '美女充气娃娃',
        describe: '超级无敌好用哦',
        label1: '清仓特价',
        label2: '1折',
        price: 9999.99,
        num: 9,
        picture: 'https://img-blog.csdnimg.cn/5decbe8cf8474a21823da27231696f0a.png'

      },
      {

        id: 5,
        title: '美女充气娃娃',
        describe: '超级无敌好用哦',
        label1: '清仓特价',
        label2: '1折',
        price: 9999.99,
        num: 9,
        picture: 'https://img-blog.csdnimg.cn/2b70ba1d6acb496980b3b7e2158ab49a.png'

      },
      {

        id: 6,
        title: '美女充气娃娃',
        describe: '超级无敌好用哦',
        label1: '清仓特价',
        label2: '1折',
        price: 9999.99,
        num: 9,
        picture: 'https://img-blog.csdnimg.cn/7524716e87034abb90b734a8bf807a03.png'

      }

      ],
      images: [
        'https://img-blog.csdnimg.cn/20210609085200319.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1FpdXh1bnRhbw==,size_16,color_FFFFFF,t_70',
        'https://img-blog.csdnimg.cn/e275435c242f4000b08589b922f774e3.png',
        'https://img-blog.csdnimg.cn/d0b30dbbe7514c8891aa737276b45784.png',
        'https://img-blog.csdnimg.cn/2b70ba1d6acb496980b3b7e2158ab49a.png',
        'https://img-blog.csdnimg.cn/576871e7de84412bbcdd0d696845428e.png',
        'https://img-blog.csdnimg.cn/a2396afa7a904c09a05fc94404d92678.png',
        'https://img-blog.csdnimg.cn/f91945899be449699f3aab83426c1928.png',
        'https://img-blog.csdnimg.cn/1bdf00e450b94508bad469e270c6acd7.png'

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
