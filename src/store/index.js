import Vue from 'vue';
import Vuex from 'vuex';
import { banner } from '../util/axios';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex)
console.log(Vuex,'vuex')
console.log(new Vuex.Store,'是谁')
export default new Vuex.Store({
    state: {
        name: '初始名字',
        shopId: 10,
        user: {
            name: '二狗'
        },
        bannerList: [],
        num: 5
    },
    getters: {  //类似于computed属性
        // 一般作为视图和state之间的中间层存在
        getUsername(state) {
            // console.log(state,'getters state')
            return state.user.name
        },
        getShopId(state) {
            return state.shopId
        },
        getBannerList(state) {
            return state.bannerList
        },
        getName(state) {
            return state.name
        }
    },
    mutations: {
        setName(state,payload){
            state.name = payload;
            // console.log(state,payload) // state状态值 参数
        },
        setShopId(state,payload){
            state.shopId = payload;
        },
        getBanner(state,payload) {
            state.bannerList = payload
        },
        setNum(state,payload) {
            state.num += payload
        }
    },
    actions: {
        SET_shopId(context,payload) {
            console.log(context,'context')  // 是整个的上下文，包括state getters dispatch commit
            // context.state.shopId = payload;
            context.commit("setShopId",payload)
            // 通过上下文中的commit方法，进行一步操作，commit使用的方法要在mutations中进行注册
            // 不进行注册的话 报[vuex] unknown mutation type: setShopId4 错误
        },
        GET_banner({commit}) {
            
            banner()
            .then(res => {
                commit("getBanner",res.data.banners)
                console.log(res)
            })
        }
    },
    /* state,
    getters,
    mutations,
    actions, */
    modules: {
    }
  })