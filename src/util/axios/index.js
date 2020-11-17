import http from './axios'
export function getSearch(params) {
    // return http({
    //     url: 'http://www.ujiuye.tech:5000/search',
    //     method: 'get',
    //     params
    // })
    return http.get('/api/search',{
        params
    })
}
export function banner() {
    return http({
        url: '/api/banner',
        method: 'get'
    })
}