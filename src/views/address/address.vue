<template>
  <div>
    <div>
      <van-nav-bar
        title="收货地址"
        left-text="返回"
        right-text="新增地址"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    onAdd () {
      Toast('新增地址')
      console.log('111111')
    },
    onEdit (item, index) {
      Toast('编辑地址:' + index)
      console.log('22222')
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.push('/adm')
    }
  }
}
</script>

<style>
.van-address-list__bottom {
  bottom: 90px;
}
.van-button--danger {
  color: #fff;
  background: linear-gradient(to right, pink, #93d5f4);
  border: 0.02667rem solid pink;
}
/* .van-nav-bar__text{
    color: #93d5f4;
}
.van-nav-bar .van-icon {
    color: #93d5f4;
} */
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar {
  background-color: #93d5f4;
}
</style>
