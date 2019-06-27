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
        let playlist = state.playList.slice()
        let currentIndex = state.currentIndex
        // 查找当前列表中是否有待插入的歌曲并返回其索引
        let fpIndex = findIndex(playlist,song)
        // 如果已经包含这首歌
        if(fpIndex > -1){
            currentIndex = fpIndex
        }else{
            playlist = [...playlist, song]
            currentIndex = playlist.length - 1
        }
    }
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}
