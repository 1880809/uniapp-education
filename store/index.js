import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		user:null,
		token:false
	},
	actions:{
		login({ state },user){
			state.user = user
			state.token = user.token
		},
		logout({ state }){
			state.user = null
			state.token = false
		}
	}
})