import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import test from '@/components/test'
import index from '../view/index.vue';
import list from '../view/list.vue';
import detail from '../view/detail.vue';
import login from '../view/login.vue';
// 二级路由
import home from '../view/home.vue';
// import cart from '../view/cart.vue';
const cart = () => Promise.resolve(import ('../view/cart.vue'))
// import mine from '../view/mine.vue';
const mine = () => import ('../view/mine.vue')
Vue.use(Router)

const router =  new Router({
	routes: [
	 	/* {
			path: '*',
			// name: 'hello',
			component: HelloWorld
		}, */
		{
			path: '/index',
			name: 'index',
			component: index,
		children: [
			{
				path: 'home',
				name: 'home',
				component: home,
			},{
				path: 'cart',
				name: 'cart',
				component: cart
			},{
				path: 'mine',
				name: 'mine',
				component: mine
			},{
				path: '',
				// component: mine,
				// redirect: 'cart',
				redirect: '/index/home',
			}
		]},{
			path: '/list',
			name: 'list',
			component: list,
			// 路由独享守卫
			beforeEnter: (to, from, next) => {
				// console.log(to,'to')
				// console.log(from,'from')
				next()
			}
		},{
			path: '/login',	// 
			name: 'login',
			component: login,
		},{
			path: '/detail/:id',	// 
			name: 'detail',
			component: detail,
		},{
			path: '*',	// *表示全部  catch all redirect  全部重定向
			// component: mine
			redirect: '/index'
		},
	]
})
// 全局路由守卫
router.beforeEach((to,from,next) => {
	// console.log(to,'to')
	// console.log(from,'from')
	 if(to.path == '/login'){
		next()
		return
	}
	if(sessionStorage.getItem('isLogin')) {
		next()
		return
	}
	next('/login')
		
})

export default router