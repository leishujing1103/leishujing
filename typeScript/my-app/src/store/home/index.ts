import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/movie';
const getters = {

}

const state: State = {  // 首页数据流，自定义类型
    movieList:[
        {
            name: "霸王别姬",
            title: "排名第一的华语电影",
            id: "666"
        }
        
    ]
}

const mutations = {

};
// 与api的交流  前后端的分离点
// commit mutations
const actions = {
    async movieList(context: {commit: Commit }, cate: string) {  // async用于修饰一个函数，await就可以用了
        const res = await getMovieList(cate)
        .then((response) => response)
    return res;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}