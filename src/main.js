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
// fetch('http://127.0.0.1:3000/api')
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//   })
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
