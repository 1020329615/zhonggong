<template>
  <div class="hello">
    <h2>我是子组件sonB</h2>
    <button @click="sendA">传送</button>
    <!-- <slot></slot> -->
    <slot name="abc"></slot>
    <slot flag="这是flag" :list=list></slot>
  </div>
</template>

<script>
export default {
  name: 'son',
  data () {
    return {
      msg: '我是子组件sonB',
      txt: '传送数据',
      list: {
        name:'lili',
        age: 10
      }
    }
  },
  mounted() {
    // this.send()
  },
  methods: {
    send() {
      console.log(this,'this')
    },
    sendA() {
      // this.Event.$emit('sendA',this.txt)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
