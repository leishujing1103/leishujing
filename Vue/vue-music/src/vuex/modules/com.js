import api from '../../api'
import * as types from '../types'  //types.js里面所有的const

const state = {  //修改状态
    showSidebar: true
}

const mutations = {  //通过mutation来修改数据源里的字段（定义一个方法）
    [types.COM_SHOW_SIDE_BAR] (state, status) {
        state.showSidebar = status
    }
}

const actions = {  //通过action来调用这个方法
    setShowSidebar ({commit}, status) {  //设置showSidebar里面的值
        commit(types.COM_SHOW_SIDE_BAR, status)  //提交这个方法
    }
}

const getters = {  //只能将数据源取出来用，不能任何修改
    showSidebar: state => state.showSidebar
}

export default {
    state,
    mutations,
    actions,
    getters
}