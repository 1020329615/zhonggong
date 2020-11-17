<template>
  <div class="hello">
    <hr>
    <h1>hello页面{{ msg }}</h1>
    <son :aa='1000' ref="aaa"></son>
    <son-b>
      <h3>匿名槽口</h3>
      <template slot="abc">具名槽口</template>
      <template v-slot:abc>
        <h3>
          具名槽口新语法
        </h3>
      </template>
      <!-- 啥也没有，取决于slot的位置 -->
      <div slot-scope="scope">
        {{scope}}
      </div>
    </son-b>
    <!-- <img :src='img' alt=""> -->
  </div>
</template>

<script>
import son from './son';
import sonB from './sonB';
export default {
  name: 'HelloWorld',
  components: {
    son,
    sonB
  },
  data () {
    return {
      msg: 'hello',
      img: require('@/assets/images/1.jpg')
    }
  },
  mounted() {
    this.$refs.aaa.send()
    console.log(this.$refs.aaa.msg,'refs aaa')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
