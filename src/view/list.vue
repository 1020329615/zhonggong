<template>
    <div>
        <h1>list</h1>
        <ul>
            <li v-for="item in list" :key="item.id" @click="goDetail(item.id)">
                {{item.name}}
                <!-- <router-link :to="'/detail?id=' + item.id">
                    {{item.name}}
                </router-link> -->
                <!-- <router-link :to="'/detail/' + item.id">
                    {{item.name}}
                </router-link> -->
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                id:1,
                name:'1000'
            },{
                id:2,
                name:'2000'
            },{
                id:3,
                name:'3000'
            }]
        }
    },
    methods: {
        goDetail(i) {
            console.log(i)
            /* this.$router.push({
                name: 'detail',
                params: {
                    id: i
                }
            }) */
            this.$router.push({
                name: 'detail',
                params: {       // 使用params传参 路由必须要使用name，使用path会出问题
                    id: i
                }
            })
        }
    }
}
</script>
<style lang="">
    
</style>