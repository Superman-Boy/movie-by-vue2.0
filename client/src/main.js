import Vue from 'vue'
import router from './router'
import store from './store/index'
import * as filters from './filters'
import './assets/js/adaptor'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
