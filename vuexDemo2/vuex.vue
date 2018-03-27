<template>
  <div id="app">
  	<h1>Hello Vuex</h1>
  	<h3>显示在vuex中存储的状态数据 :</h3>
  	<!--用state去访问状态对象-->
  	<div>
  		<!--commit '承诺' commit是触发mutation触发对象-->
  		<button @click="increment">+</button>
  		<div id="">
  			{{$store1.state.count1}}
  		</div>
  	</div>
  </div>
</template>

<script>
	//为了简化计算属性里边的 写法
	//获取state的值mapState取静态的
	//mapMutations把方法对象拿过来
	//getters可以进行相应的计算
import {mapGetters,mapActions} from 'vuex'
export default {
	data(){
		return {
		}
	},
		methods:mapActions([
			'increment'
		]),
		computed:mapGetters([
			'count1'
		])
	
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
