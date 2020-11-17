export default {
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
}