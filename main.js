import Vue from 'vue'
import App from './App'
import util from './common/util.js';
import store from './store/index.js';

Vue.prototype.$util = util
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.navigate = (path)=>{
	uni.navigateTo({
		url: '/pages/'+path,
	});
}

Vue.prototype.authJump = (url)=>{
	if(!store.state.token){
		uni.navigateTo({
			url: '/pages/login/login',
		});
		return
	}
	uni.navigateTo({
		url
	});
}


const app = new Vue({
	store,
    ...App
})
app.$mount()
