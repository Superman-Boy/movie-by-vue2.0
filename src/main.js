import Vue from 'vue'
import router from './router'
import store from './store/index'
// import App from './App.vue'
import './assets/js/adaptor'

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
