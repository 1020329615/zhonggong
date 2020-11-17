<template>
    <div>
        <input type="text" v-model="user">
        <input type="text" v-model="password">
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '',
            password: ''
        }
    },
    methods: {
        login() {
            if(this.user && this.password) {
                sessionStorage.setItem('isLogin',true)
                this.$router.push({
                    name: 'home'
                })
            }
        }
    },
}
</script>