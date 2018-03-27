import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//state状态对象,静态的,常量,不变的等资源
const state={
	count:4
}
//整个触发状态对象,要触发的方法,//触发状态变化  mutations:突变
//mutations是同步的///执行完这个方法才能执行其他的
//actions是异步的///可以同时进行的,actions可以去调用mutations里的方法
const mutations={
	//传进来的state是一个对象{}
	//传的n可以传一个对象或者是一个值
	jia(state,n){
		state.count+=n.a;
	},
	jian(state){
		state.count--;
	}
}
//computed中不要用箭头函数
//getter就是一个计算属性
const getters={
	count:function(state){
		return state.count+=100;
	}
}

const actions={
	//context代表了整个state
	//为了验证actions是异步的
	jiaplus(context){
		context.commit('jia',{a:1});
		setTimeout(()=>{
			context.commit('jian');
		},3000)
		console.log("我先被执行了")
	},
	jianplus({commit}){
		commit('jian')
	}
}


export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
