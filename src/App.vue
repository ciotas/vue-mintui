<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
//import Hello from './components/Hello'

export default {
  name: 'app',
  mounted(){
    this.$store.dispatch('getTodos');//获取第一个页面的数据
  },
  computed:{
      todosCount:function () {
          //return this.todos.length;
      }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
