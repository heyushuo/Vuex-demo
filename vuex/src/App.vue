<template>
  <div id="app">
  	<h1>Hello Vuex</h1>
  	<h3>显示在vuex中存储的状态数据 :</h3>
  	<!--用state去访问状态对象-->
  	<div>{{$store.state.count}}----->{{count}}</div>
  	<div>
  		<!--commit '承诺' commit是触发mutation触发对象-->
  		<button @click="$store.commit('jia',{a:10})">+</button>
  		<button @click="jian">-</button>
  	</div>
  	<div>
  		<!--commit '承诺' commit是触发mutation触发对象-->
  		<button @click="jiaplus">+plus</button>
  		<button @click="jianplus">-plus</button>
  	</div>
  	
  </div>
</template>

<script>
	//为了简化计算属性里边的 写法
	//获取state的值mapState取静态的
	//mapMutations把方法对象拿过来
	//getters可以进行相应的计算
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
	data(){
		return {
			//count:1,
		}
	},
//	computed:{//计算属性中的值在data中不能有定义
//		count1(){
//			return this.$store.state.count+5
//		}
//	}
		//这是一种写法
//	computed:mapState({
//		count1:state=>state.count+1
//	})
//只能存在一个computed
//		computed:mapState([
//				"count"
//		]),
			computed:{
					...mapState([
						"count"
				]),
//					...mapGetters([
//						"count"
//					]),
			},
		//
//		methods:mapMutations([
//			'jia',
//			'jian'
//		])
			methods:{
				...mapMutations([
					'jia',
					'jian'
				]),
				//这样使数组的形式
				...mapActions([
					'jiaplus',
					'jianplus'
				])
				//这样写需要用对象的形式
//				...mapActions({
//					'jianplus':'jianplus'
//				})
			}
	
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
