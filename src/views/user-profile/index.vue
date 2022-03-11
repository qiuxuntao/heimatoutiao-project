<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      class="top_dhl"
      title="用户信息"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 导航栏 -->

    <!-- 个人信息 -->
    <van-cell-group>
      <van-cell title="头像" is-link>
        <van-image round width="30" height="30" fit="cover" :src="user.photo" />
      </van-cell>
      <van-cell
        title="昵称"
        :value="user.name"
        @click="isUpdateNameShow = true"
        is-link
      />
      <van-cell title="性别" :value="user.gender === 0 ? '男' : '女'" is-link />
      <van-cell title="生日" :value="user.birthday" is-link />
    </van-cell-group>
    <!-- 个人信息 -->

    <!-- 编辑昵称 -->
    <van-popup v-model="isUpdateNameShow" style="height: 100%" position="bottom">
    <updateName @close='isUpdateNameShow=false'></updateName
    ></van-popup>
    <!-- 编辑昵称 -->
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getUserProfile } from '@/api/user.js'
import updateName from '@/views/user-profile/components/update-name.vue'
export default {
  name: 'UserProfile',
  components: { updateName },
  props: {},
  data () {
    return {
      user: {}, // 个人信息,
      isUpdateNameShow: false // 弹出层的是否弹出
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserProfile()
  },
  mounted () {},
  methods: {
    // 回退到个人主页
    onClickLeft () {
      this.$router.back('/my')
      Toast('个人主页')
    },
    onClickRight () {
      Toast('按钮')
    },
    async loadUserProfile () {
      try {
        // 获取个人信息
        const { data } = await getUserProfile()
        console.log('个人信息', data)
        this.user = data.data
        Toast('获取个人信息成功')
      } catch (err) {
        Toast('获取个人信息失败')
      }
    }
  }
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background: linear-gradient(to right, pink, #93d5f4);
  border: 0.02667rem solid pink;
}
</style>
