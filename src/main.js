import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载vant全局样式
import Vant from 'vant'
import 'vant/lib/index.css'

// 加载全局样式
import '@/styles/index.less'

// 加载动态设置rem基准值
import 'amfe-flexible'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

import './utils/dayjs'

Vue.use(VideoPlayer)

// 注册使用vant组件库
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
