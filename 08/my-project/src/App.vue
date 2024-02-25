<template>
  <div id="app">
    <v-header></v-header>
    <v-footer></v-footer>
  </div>
</template>

<script>
//引入Header组件
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  data(){
    return{
      msg:"Welcom to Your Vue.js App"
    }
  },
  components:{

    'v-header':Header,
    'v-footer':Footer,


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
