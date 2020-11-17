import { banner } from '../util/axios';
export default {
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
}