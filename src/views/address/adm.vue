<template>
  <div>
    <div>
      <van-nav-bar
        title="新增地址"
        left-text="返回"
        right-text="就是玩"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      areaList: [
      ],
      searchResult: []
    }
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      Toast('按钮')
      console.log(this.$store.state.areaData)
    }
  },
  created: {
    areaData () {
      const daL = this.$store.state.areaData
      console.log(daL)
    }
  }
}
</script>

<style>
.van-button--default {
  background: linear-gradient(to right, pink, #93d5f4);
  border: 0.02667rem solid pink;
  color: #fff;
}
</style>
