<template>
    <button :class="'i-button-size' + size" :disabled='disabled' @click="handleClick" >
        <slot></slot>
    </button>
</template>

<script>
function oneOf(value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false   //结束
}
import bus from '@/bus/bus'
export default {
    props: {
        size: {
            validator (value) {  // 校验size是否符合这个规则
                return oneOf(value, ['small', 'large', 'default'])
            },
            default: 'default'  //设为默认
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            msg: '我是button组件的数据'
        }
    },
    methods: {
        handleClick (event) {
        // this.$emit('on-click', this.msg )
        //     console.log(123)
        bus.$emit('todo', this.msg)
        }
    }
}
</script>

<style scoped>
button{
    border-radius: 5px;
    cursor: pointer;
    outline: none;
}
.i-button-sizelarge{
    padding: 12px;

}
.i-button-sizedefault{
    padding: 8px;
    
}
.i-button-sizesmall{
    padding: 4px;
    
}

</style>
