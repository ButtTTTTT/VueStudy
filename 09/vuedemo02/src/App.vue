<template>
  <div id="app">
    <Home></Home>
    <br>
    <br>
    <h2>这是主页面的title</h2>
  </div>
</template>

<script>
import Home from './components/home/Home';
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Home': Home,
  }
}
</script>

<style></style>
