<template>
  <div class="channel-edit">
    <van-cell title="我的频道" :border="false">
      <van-button size="mini" plain>编辑</van-button>
    </van-cell>
    <van-grid :gutter="10" class="mygrid">
      <van-grid-item
        class="channel-item"
        v-for="(channel,index) in mychannels"
        :key="index"
        icon="clear"
      >
      <span class="text" slot="text" :class="{active:index===active}">{{channel.name}}</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="频道推荐" :border="false"></van-cell>
    <van-grid :gutter="10" class="recommand">
      <van-grid-item
        class="channel-item"
       v-for="(channel,index) in recommendChannels"
        :key="index"
        :text="channel.name"
        icon="plus"
        @click="onAddChannels(channel)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels } from '@/api/channels.js'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {
    mychannels: {
      type: Array,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      allChannels: []// 所有频道
    }
  },
  computed: {
    // 除去推荐的频道
    recommendChannels () {
      const channels = []
      this.allChannels.forEach(channel => {
        const ret = this.mychannels.find(myChannel => {
          return myChannel.id === channel.id
        })

        if (!ret) {
          channels.push(channel)
        }
      })
      return channels
    }
  },
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      try {
        const { data } = await getAllChannels()
        this.allChannels = data.data.channels
        console.log(this.allChannels)
        console.log('所有频道列表', data)
      } catch (err) {
        console.log('获取失败')
      }
    }
  },
  onAddChannels (channel) {
    console.log('1111111')
    console.log(channel)
    this.mychannels.push(channel)
  }
}
</script>

<style scoped lang="less">
.channel-edit {
  .channel-item {
    width: 100px;
    height: 90px;
    /deep/ .van-grid-item__conten{
      background-color: #93d5f4;
      .van-grid-item__text {
        color: #ffff;
        font-size: 28px;
        margin-top: 0;
      }
    }
  }
}

.van-button {
  background: linear-gradient(to right, pink, #93d5f4);
  border-radius: 5%;
  color: #ffff;
  border: solid 1px pink;
}

/deep/.mygrid{
   white-space: nowrap;
   .van-icon-clear{
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: 2;
    font-size: 30px;
    color: red;
}
.text{
  font-size: 28px;
  margin-top:0 ;
}
.active{
  color: #d86262;
}
}

/deep/.recommand {
  .van-grid-item__content {
    flex-direction: row;
    white-space: nowrap;

    .van-icon-plus {
      font-size: 28px;
      margin-right: 6px;
      color: #d86262;
      margin-top: 0;
    }
    .van-grid-item__text{
      margin-top: 0;
    }
  }
}
// /deep/.van-grid-item__content{
//       flex-direction: row;
//       white-space: nowrap;

//       .van-icon-plus{
//         font-size: 28px;
//         margin-right: 6px;
//         color: #d86262;
//       }
//       .van-grid-item__text{
//         margin-top: 0;
//       }
//     }
</style>
