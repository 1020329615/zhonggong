<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>{{aa}}</h2> -->
    <!-- <h2>{{other}}</h2> -->
  </div>
</template>

<script>
export default {
  name: 'son',
  /* props: {
    aa: {
      type: Number,
      default: 23
    }
  }, */
  props: ['aa'],
  data () {
    return {
      msg: '我是子组件son',
      other: 'aa'
    }
  },
  mounted() {
    // this.send();
    /* this.Event.$on('sendA',(e) => {
      console.log(e,'兄弟传值')
    }) */
  },
  methods: {
    send() {
      console.log(this,'this')
      console.log('我是son中方法 this')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
