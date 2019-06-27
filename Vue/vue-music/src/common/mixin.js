import { mapGetters, mapMutations, mapActions } from 'vuex';

export const searchMixin = {
    data () {
        return {
            query: '',
            refreshDelay: 120
        }
    },
    computed: {
        ...mapGetters([
            'searchHistory'
        ])
    },
    methods: {
        onQueryChange(query) {
			// console.log(query)
			this.query = query.trim()  //去空格
        },
        blurInput() {
            this.$refs.searchBox.blur()
        },
        addQuery (query) {
            this.$refs.searchBox.setQuery(query)  // 父组件调用子组件的方法
        },
        saveSearch (song) {
            console.log(song)
            this.selectPlaySong(song)
            this.saveSearchHistory(this.query)
        },
        ...mapActions([
            'saveSearchHistory',// 调用actions
            'selectPlaySong'
        ])
    }
}