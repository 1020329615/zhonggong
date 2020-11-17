<template>
    <div>
        <h1>detial</h1>
        <h2>query：{{this.$route.query}}</h2>
        <h2>params：{{this.$route.params}}</h2>
        <go-back></go-back>
    </div>
</template>
<script>
export default {
    mounted() {
        // console.log(this.$route.query.id)   // router-link :to="'/detail?id=' + item.id"
        console.log(this.$route.params.id)      // 动态路由 :to="'/detail/' + item.id"
    },
}
</script>
<style lang="">
    
</style>