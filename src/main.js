// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import '../src/assets/js/rem'
// import goBack from '../src/common/goBack.vue'

// 封装全局组件
import comComponent from './common'
for (const key in comComponent) {
  	Vue.component(key,comComponent[key])
}
Vue.config.productionTip = false

// 创建一个中央事件总线
Vue.prototype.Event = new Vue();
// Vue.component('goBack',goBack)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
