import api from '../../api'
import * as types from '../types'  //types.js里面所有的const

const state = {  //修改状态
    showSidebar: false,
    fullScreen: true
    // playlist: 
}

const mutations = {  //通过mutation来修改数据源里的字段（定义一个方法）
    [types.COM_SHOW_SIDE_BAR] (state, status) {
        state.showSidebar = status
    },
    [types.SET_FULL_SCREEN] (state, status) {
        state.fullScreen = status
    }
}

const actions = {  //通过action来调用这个方法
    setShowSidebar ({commit}, status) {  //设置showSidebar里面的值
        commit(types.COM_SHOW_SIDE_BAR, status)  //提交这个方法
    },
    selectPlaySong ({ commit }, status) {
        // let playlist = state.playlist.slice()
        commit(types.SET_FULL_SCREEN, status)
    }
}

const getters = {  //只能将数据源取出来用，不能任何修改
    showSidebar: state => state.showSidebar,
    fullScreen: state => state.fullScreen
}

export default {
    state,
    mutations,
    actions,
    getters
}