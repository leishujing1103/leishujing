<template>
    <div class="play" v-show="playList.length>0">
        <transition 
        name="normal"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave">
            <div class="normal-player" v-show="fullScreen">
                <div class="backgroud">
                    <img width="100%" height="100%" 
                    :src="(currentSong.al && currentSong.al.picUrl) 
                    || (currentSong.artists && currentSong.artists[0].img1v1Url)" alt="">
                </div>
                <div class="top">
                    <div class="back" @click="back">
                        <i class="icon">&#xe8e2;</i>
                    </div>
                    <!-- v-html给标签埋上text -->
                    <h1 class="title" v-html="currentSong.name"></h1> 
                    <h2 class="subtitle" 
                    v-html="(currentSong.ar && currentSong.ar[0].name) 
                    || (currentSong.artists && currentSong.artists[0].name)"></h2>
                    <!-- 播放页面的内容 -->

                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.play
    z-index  150
    .normal-player
        position fixed
        top 0
        left 0
        right 0
        bottom 0  //占满整个屏幕
        z-index 150
        background rgb(8, 5, 58)
        .backgroud
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            z-index -1
            opacity 0.6
            filter blur(20px)  //滤镜
        .top
            position relative
            margin-bottom 25px
            .back
                position absolute
                top 0
                left px2rem(12px)
                z-index 50
                .icon
                    display block
                    height px2rem(100px)
                    line-height px2rem(100px)
                    padding o px2rem(30px)
                    font-size 22px
            .title
                width 70%
                margin 0 auto 
                line-height px2rem(100px)
                text-align center
                text-overflow ellipsis
                white-space nowrap
                fontsize 18px
                color #ffffff
            .subtitle
                line-height px2rem(40px)
                text-align center
                font-size 22px
                color #ffffff


</style>
