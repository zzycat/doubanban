// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import VueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

Vue.use(VueScrollBehavior, {router:router})
// Vue.use(VueRouter)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
