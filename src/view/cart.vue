<template>
    <div>
        <h1>购物车</h1>
        <h2>state：{{$store.state.name}}</h2>
        <h2>getters：{{$store.getters.getUsername}}</h2>
        <h2>mapGetters：{{getShopId}}、{{getUsername}}</h2>
        <button @click="changeName">改变name值</button>
        <button @click="changeShop">改变shop</button>
        <h2>{{num}}</h2>
        <button @click="setNum(5)">num递增</button>
        <ul>
            <li v-for="item in getBannerList" :key="item.adid">
                <img :src="item.imageUrl" alt="" style="width:500px">
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(["num"]),
        ...mapGetters(["getShopId","getUsername","getBannerList"])
    },
    mounted() {
        this.$store.dispatch("GET_banner")
        console.log(this.$store,'组件中的this.$store')
    },
    methods: {
        ...mapMutations(["setNum"]),
        changeName() {
            // this.$store.commit('setName','牛夫人')
            this.$store.state.name = '牛夫人'
        },
        changeShop() {
            // 通过dispatch去触发action
            this.$store.dispatch('SET_shopId',200)
        }

    },
}
</script>
<style lang="">
    
</style>