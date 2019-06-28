import api from '../../api'
import * as types from '..pes'
import { findIndex } from '@/common/util'
import { type } from 'os';

const state = {
    playList: [],
    currentIndex = -1,
    favoriteList: [],
    playHistory: [],
    playing: false
}
const mutations = {
    // 设置播放列表
    [types.SET_PLAYLIST](state, playlist){
        state.playList = playlist
    },
    [types.SET_CURRENT_INDEX](state, index){
        state.currentIndex = index
    },
    [types.SET_PLAYING](state, status){
        state.playing = status
    },
    [types.SAVE_PLAY_HISTORY](state, playload){
        state.playHistory = playload
    },
    [types.SAVE_FAVORITE_LIST](state, playload){
        state.favoriteList = playload
    }
}
const actions = {
    selectPlaySong ({ commit, state}, song)  {
        let playlist = state.playList.slice()  //全部截取，保证playlist一定是一个数组
        let currentIndex = state.currentIndex
        // 查找当前列表中是否有待插入的歌曲并返回其索引
        let fpIndex = findIndex(playlist,song)
        // 如果已经包含这首歌
        if(fpIndex > -1){
            currentIndex = fpIndex  // 当前播放
        }else{
            playlist = [...playlist, song]  // 加进去
            currentIndex = playlist.length - 1  //从最后一条开始播放
        }
        commit(types.SET_PLAYLIST, playlist)  //放入播放列表
        commit(types.SET_CURRENT_INDEX, currentIndex) // 当前播放
        commit(types.SET_PLAYING, true)  //正在播放
    },
    // 加入播放列表
    addPlayList ({ commit, state}, song) {
        let playlist = [...state.playList.slice(), song]
        if (playlist.length === 1) {
            let currentIndex = state.currentIndex
            currentIndex++
            commit(types.SET_CURRENT_INDEX, currentIndex)
            commit(types.SET_PLAYING, true)
        }
        commit(types.SET_PLAYLIST, playlist)
    },
    // 保存播放历史
    savePlayHistory ({ commit, state}, song) {
        let playHistory = state.playHistory.slice()
        playHistory = [...playHistory, song]
        commit(types.SAVE_PLAY_HISTORY, playHistory)
    },
    // 保存喜欢列表
    saveFavoriteList ({ commit, state}, song) {
        let favoriteList = state.favoriteList.slice()
        favoriteList = [...favoriteList, song]
        commit(types.SAVE_FAVORITE_LIST, favoriteList)
    }
}
const getters = {
    playing: state => state.playing,
    playList: state => state.playList,
    currentIndex: state => state.currentIndex,
    currentSong: state => {
        return state.playList[state.currentIndex] || {}
    },
    favoriteList: state => state.favoriteList,
    playHistory: state => state.playHistory

}

export default {
    state,
    mutations,
    actions,
    getters
}
