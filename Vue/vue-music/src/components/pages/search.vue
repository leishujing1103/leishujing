<template>
    <div class="search">
        <div class="search-box-wrapper">
            <!-- 搜索框 -->
            <v-searchBox></v-searchBox>
        </div>
        <!-- 搜索框 -->
        <v-searchBox></v-searchBox>
        <div class="shortcut-wrapper" ref="shortcurWrapper" v-show="!query"></div>
        <!-- 热门搜索 -->
        <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay"></v-scroll>
        <div>
            <div class="hot-key">
                <div class="title">热门搜索</div>
                <ul>
                    <li class="item" 
                    v-for="(item, index) in hotKey"
                    :key="index"
                    @click="addQuery(item.first)">
                        <span>{{item.first}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from  '@/components/scroll'
export default {
    data () {
        return {
            query: false,
            hotKey: [
                {first: '许嵩新歌发布'},
                {first: '许嵩新歌发布'},
                {first: '许嵩新歌发布'},
                {first: '许嵩新歌发布'},
                {first: '许嵩新歌发布'}
            ]
        }
    },
    components: {
        'v-searchBox': searchBox,
       'v-scroll': scroll
    }
}
</script>

<style>

</style>
