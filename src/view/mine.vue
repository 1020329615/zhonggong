<template>
    <div>
        <h1>我的</h1>
        <h2>state：{{getName}}</h2>
    </div>
</template>
<script>
import axios from 'axios'
import {getSearch} from '../util/axios'
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(["getName"])
    },
    mounted() {
        /* axios({
            url:'http://www.ujiuye.tech:5000/search',
            method: 'get',
            params: {
                keywords:'北京'
            }
        }) */
        getSearch({
            keywords:'北京'
        })
    },
    // 组将内的守卫
    // beforeRouteEnter (to, from, next) {
    //     // ...
    // },
    // beforeRouteLeave (to, from, next) {
    //     // ...
    // },
}
</script>
<style lang="">
    
</style>