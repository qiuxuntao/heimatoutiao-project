import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

const TOKEY_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    // 一个对象、在储当前登录用户信息( token等数据)
    // user: JSON.parse(window.localStorage.getItem(TOKEY_KEY))
    user: getItem(TOKEY_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新丢失，需要把数据备份到本地存储
      // window.localStorage.setItem(TOKEY_KEY, JSON.stringify(state.user))
      setItem(TOKEY_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
