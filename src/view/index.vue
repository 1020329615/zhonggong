<template>
    <div>
        <h1>this is index  {{$store.state.name}}</h1>       
        <router-link tag="span" active-class="select" to="/index/home">首页</router-link>
        <router-link tag="span" active-class="select" to="/index/cart">购物车</router-link>
        <router-link tag="span" active-class="select" to="/index/mine">我的</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    .select{
        color: red;
        font-weight: bold;
    }
</style>