<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <br>
    {{ msg }}
    <br>
    <v-header></v-header>
    <Home></Home>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
export default {
  name: 'App',
  data() {
    return {
      msg: "Welcom to Vue App!!!"
    }
  },
  components: {
    'v-header': Header,
    'Home':Home,
  }
}
</script>
<!--

   <style scoped>  

   style 加上scoped 属性表示 这个css只作用域这个组件

 -->
<style></style>
