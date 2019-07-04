## 组件三要素
props、slot、event
数据源里面拿的数据，才需要v-bind:绑定，写死的数据不需要

子组件emit  this.$emit('on-click', this.msg )
父组件去v-bind绑定方法 子组件props接收

或者子组件 @on-click.native="handleClick"

兄弟组件通信 vuex放入store仓库


