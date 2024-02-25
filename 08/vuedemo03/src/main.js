import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router"; //引入组件
//定义组件
import Home from "./components/home/Home";
import News from "./components/news/News";
import User from "./components/user/User";
Vue.use(VueRouter); //使用组件让组件生效
//配置路由 定义路由
const routes = [
  { path: "/home", component: Home },
  { path: "/news", component: News },
  { path: "/user", component: User },
  { path: "*", redirect: "/home" },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
