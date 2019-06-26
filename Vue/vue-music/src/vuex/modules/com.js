import api from '../../api'
import * as types from '../types'  //types.js里面所有的const

const state = {  //修改状态
    showSidebar: false,
    fullScreen: true,
    searchHistory: [123]
    // playlist: 
}

const mutations = {  //通过mutation来修改数据源里的字段（定义一个方法）
    [types.COM_SHOW_SIDE_BAR] (state, status) {
        state.showSidebar = status
    },
    [types.SET_FULL_SCREEN] (state, status) {
        state.fullScreen = status
    },
    [types.COM_SAVE_SEARCH_HISTORY] (state= state) {
        state.searchHistory = state
    }
}

const actions = {  //通过action来调用这个方法
    setShowSidebar ({commit}, status) {  //设置showSidebar里面的值
        commit(types.COM_SHOW_SIDE_BAR, status)  //提交这个方法
    },
    selectPlaySong ({ commit }, status) {
        // let playlist = state.playlist.slice()
        commit(types.SET_FULL_SCREEN, status)
    },
    saveSearchHistory ({ commit, state},query) {
        let searchHistory = [query, ...state.searchHistory.slice()]
        searchHistory =[...new Set(searchHistory)]
        commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
    }
}

const getters = {  //只能将数据源取出来用，不能任何修改
    showSidebar: state => state.showSidebar,
    fullScreen: state => state.fullScreen,
    searchHistory: state => state.searchHistory
}

export default {
    state,
    mutations,
    actions,
    getters
}