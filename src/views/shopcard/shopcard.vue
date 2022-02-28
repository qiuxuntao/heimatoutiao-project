<template>
  <div>
          <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          @click="onClickShopcart"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  methods: {
    onClickShopcart () {
      Toast('欢迎来到美轮美奂的购物车🛒')
      this.$router.push('/shopcat')
    },
    onClickButton () {
      Toast('点击按钮')
    },
    shopCard () {
      this.$router.push('/login')
    },
    onClickIcon () {
      console.log('滚')
    }
  }

}
</script>

<style>
.van-goods-action {
    position: fixed;
    right: 0;
    bottom: 100px;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: content-box;
    height: 1.33333rem;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    background-color: #fff;
}
.van-button{
   background: linear-gradient(to right, pink, #93d5f4);
}
.van-goods-action-icon{
    background: linear-gradient(to right, pink, #93d5f4);
    border: 0.02667rem solid pink;
}
</style>
