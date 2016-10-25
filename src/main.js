import Vue from 'vue'
import router from './router'
import store from './store/index'
// import App from './App.vue'
import './assets/js/adaptor'

Vue.filter('mergeName', (names) => {
  let name = ''
  names.forEach((item, index) => {
    if (index < names.length - 1) {
      name += item.name + '/'
    } else {
      name += item.name
    }
  })
  return name
})

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
