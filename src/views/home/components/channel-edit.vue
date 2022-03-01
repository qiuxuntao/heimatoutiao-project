<template>
  <div class="channel-edit">
    <van-cell title="我的频道" :border="false">
      <van-button size="mini" plain @click="isEdit = !isEdit">{{
        isEdit ? "完成" : "编辑"
      }}</van-button>
    </van-cell>
    <van-grid :gutter="10" class="mygrid">
      <van-grid-item
        class="channel-item"
        v-for="(channel, index) in mychannels"
        :key="index"
        @click="onMyChannelsClick(channel, index)"
      >
        <van-icon slot="icon" name="clear" v-show="isEdit"></van-icon>
        <span class="text" slot="text" :class="{ active: index === active }">{{
          channel.name
        }}</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="频道推荐" :border="false"></van-cell>
    <van-grid :gutter="10" class="recommand">
      <van-grid-item
        class="channel-item"
        v-for="(channel, index) in recommendChannels"
        :key="index"
        :text="channel.name"
        icon="plus"
        @click="onAddChannels(channel)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels, addUserChannel } from '@/api/channels.js'
import { mapState } from 'vuex'
import { setItem } from '@/utils/storage.js'
import { Toast } from 'vant'
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
      allChannels: [], // 所有频道
      isEdit: false // 控制xx图标显示
    }
  },
  computed: {
    // 除去推荐的频道
    // 计算属性会观测内部依赖数据的变化
    // 发生变化回 计算属性重新执行
    recommendChannels () {
      const channels = []
      this.allChannels.forEach((channel) => {
        const ret = this.mychannels.find((myChannel) => {
          return myChannel.id === channel.id
        })

        if (!ret) {
          channels.push(channel)
        }
      })
      return channels
    },
    ...mapState(['user'])
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
    },

    // 把下面的频道推荐加入到我的频道
    async onAddChannels (channel) {
      this.mychannels.push(channel)
      // 数据持久化处理
      if (this.user) {
        try {
          await addUserChannel({
            id: channel.id, // 频道id
            seq: this.mychannels.length // 序号
          })
        } catch (err) {
          console.log('保存失败，请重试')
          Toast('添加频道失败')
        }
        // 已登陆,把数据请求接口放到线上
      } else {
        // 未登陆
        setItem('TOUTIAO_CHANNELS', this.mychannels)
      }
    },
    onMyChannelsClick (channel, index) {
      // 如果是编辑状态，执行删除频道
      if (this.isEdit) {
        // 编辑状态，执行删除频道
        // 参数1:要删除的元素索引（包括自己）
        // 参数2:删除的个数，如果不指定，则从参数1开始删除到最后
        if (index <= this.active) {
          // 让激活频道索引减去一
          this.$emit('update-active', this.active - 1, true)
        }
        this.mychannels.splice(index, 1)
      } else {
        // 如果是非编辑状态，执行切换频道
        this.$emit('update-active', index, false)
      }
    }
  }
}
</script>

<style scoped lang="less">
.channel-edit {
  .channel-item {
    width: 100px;
    height: 90px;
    /deep/ .van-grid-item__conten {
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

/deep/.mygrid {
  white-space: nowrap;
  .van-icon-clear {
    position: absolute;
    right: -10px;
    top: -10px;
    z-index: 2;
    font-size: 30px;
    color: red;
  }
  .text {
    font-size: 28px;
    margin-top: 0;
  }
  .active {
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
    .van-grid-item__text {
      margin-top: 0;
    }
  }
}
/deep/.van-grid-item__icon-wrapper {
  position: unset;
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
