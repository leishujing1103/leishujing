<template>
    <div class="menu">
        {{message}}
        
        {{app.user}}  <!-- App.vue里想用的data -->
    </div>
</template>

<script>
import bus from '@/bus/bus'
export default {
    inject: ['app'],  //接收App.vue里的data
    data () {
        return {
            message: 'aaaaaaa'
        }
    },
    created() {
        let self = this
        bus.$on('todo', (val) => {
            console.log(val)
            self.message = val
        })
    }
}
</script>

<style>

</style>
