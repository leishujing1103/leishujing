import api from '../../api'
import * as types from '../types' //第一个types是type.js里所有的内容

// vue的数据源
const state = {
  showSidebar: false,
  fullScreen : true
}

// 修改数据源
const mutations = {
  // 定义一个方法     status状态
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.SET_FULL_SCREEN] (state, status) {
    state.fullScreen = status
  }
}

// 调用mutation里修改的方法
const actions = {
  // 定义setShowSidebar方法去调用mutation里的方法
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status) //调用方法
  },
  selectPlaySong ({commit}, status) {
    // let pleylist = state.playlist.slice()
    commit(types.SET_FULL_SCREEN, status)
  }
}

// 直接能把vuex仓库里的数据源取出来用，取用数据源
const getters = {
  showSidebar: state => state.showSidebar,
  fullScreen: state => state.fullScreen
}

export default {
  state,
  mutations,
  actions,
  getters
}