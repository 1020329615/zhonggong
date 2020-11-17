export default {  //类似于computed属性
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
    }
}