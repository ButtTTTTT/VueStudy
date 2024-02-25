import Vue from 'vue' //引入vue.js
import App from './App' // 引入组件
import router from './router'
import VueResource from 'vue-resource' //引入插件
Vue.config.productionTip = true
Vue.use(VueResource); //让插件生效
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>'
})
/**
 * 单文件组件要用请求数据插件
 * 1、安装插件
 * cnpm install vue-resource --save-dev
 * --save-dev 表示把vue-resource依赖写入到package.json
 * 2、在main.js里面引入 vue-resource
 * import VueResource from 'vue-resource';
 * 3、Vue.use(VueResource)
 */