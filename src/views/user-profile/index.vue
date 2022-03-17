<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      class="top_dhl"
      title="用户信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 导航栏 -->

    <!-- 头像弹窗 -->
    <input type="file" hidden  ref="file" @change="onFileChange"/>
     <!-- 头像弹窗 /-->

    <!-- 个人信息 -->
    <van-cell-group>
      <van-cell title="头像" is-link @click="$refs.file.click()">
        <van-image round width="30" height="30" fit="cover" :src="user.photo" />
      </van-cell>
      <van-cells
        title="昵称"
        :value="user.name"
        @click="isUpdateNameShow = true"
        is-link
      />
      <van-cell
        title="性别"
        :value="user.gender === 0 ? '男' : '女'"
        @click="isUpdateGenderShow = true"
        is-link
      />
      <van-cell
        title="生日"
        :value="user.birthday"
        @click="isUpdateBirthdayShow = true"
        is-link
      />
    </van-cell-group>
    <!-- 个人信息 -->

    <!-- 编辑昵称 -->
    <van-popup
      v-model="isUpdateNameShow"
      style="height: 100%"
      position="bottom"
    >
      <updateName
        @close="isUpdateNameShow = false"
        v-model="user.name"
        v-if="isUpdateNameShow"
      >
      </updateName
    ></van-popup>
    <!-- /编辑昵称 -->

    <!-- 编辑性别 -->
    <van-popup v-model="isUpdateGenderShow" position="bottom">
      <updateGender
        v-if="isUpdateGenderShow"
        v-model="user.gender"
        @close="isUpdateGenderShow = false"
      >
      </updateGender>
    </van-popup>
    <!-- /编辑性别 -->

    <!-- 编辑生日 -->
    <van-popup v-model="isUpdateBirthdayShow" position="bottom">
      <updateBirthday
        v-if="isUpdateBirthdayShow"
        v-model="user.birthday"
        @close="isUpdateBirthdayShow = false"
      ></updateBirthday>
    </van-popup>
    <!-- /编辑生日 -->

        <!-- 编辑头像 -->
    <van-popup v-model="isUpdatePhotoShow" position="bottom" style="height:100%">
      <updatePhoto
        v-if="isUpdatePhotoShow"
        v-model="user.photo"
        @close="isUpdatePhotoShow = false"
        :img="img"
        @update-photo="user.photo=$event"
      ></updatePhoto>
    </van-popup>
    <!-- /编辑头像 -->
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getUserProfile } from '@/api/user.js'
import updateName from '@/views/user-profile/components/update-name.vue'
import updateBirthday from '@/views/user-profile/components/update-birthday.vue'
import updateGender from '@/views/user-profile/components/update-gender.vue'
import updatePhoto from '@/views/user-profile/components/update-photo.vue'
export default {
  name: 'UserProfile',
  components: { updateName, updateBirthday, updateGender, updatePhoto },
  props: {},
  data () {
    return {
      user: {}, // 个人信息,
      isUpdateNameShow: false, // 弹出层的是否弹出
      isUpdateBirthdayShow: false, // 弹出层的是否弹出
      isUpdateGenderShow: false, // 弹出层的是否弹出
      isUpdatePhotoShow: false,
      img: null
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
    },
    // 获取头像
    onFileChange () {
      // 获取文件对象

      const file = this.$refs.file.files[0]
      console.log(file)
      // 急于文章对象获取blob数据
      // 图片路径
      const data = window.URL.createObjectURL(file)
      console.log(data)
      // 文件信息路径给img 传给头像更新组件
      this.img = data
      // 展示头像弹出层
      this.isUpdatePhotoShow = true
      // file-input 如果选了同一个文件不会触发 把value设置为空
      this.$refs.file.value = ''
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
