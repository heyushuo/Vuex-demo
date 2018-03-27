import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state={
	count1:0
}

const mutations={
	increment(state){ //处理数据的变化增加了还是减少了
		state.count1++;
	}
}
const actions={ //什么时候变了  //在这里触发mutation里的方法//处理你要干什么的,异步请求,判断,流程控制
	increment({commit}){
		commit('increment')
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
