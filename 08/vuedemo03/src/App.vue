<template>
  <div id="app">
    <router-link to="/home">去首页</router-link>
    <router-link to="/news">去新闻</router-link>
    <router-link to="/user">去用户</router-link>
    <br>
    <br>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>