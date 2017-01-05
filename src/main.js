// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'
import Mint from 'mint-ui';

//模块
import store from './api/store' // 引入接口模块
import router from './router' // 引用路由

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  router
})
