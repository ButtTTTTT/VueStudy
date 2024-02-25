import Vue from 'vue'
import App from './App.vue'
/**
 * 引入css之前要加两个插件     
 * 1、css-loader
 * 2、style-loader
 * npm install style-loader@兼容css-loader的版本号 --save-dev 安装style-loader 
 * 3、使用修改webpack中css编译时候的引入的css loader
 */
import './assets/style.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
