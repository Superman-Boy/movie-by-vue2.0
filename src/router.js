import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/home.vue'
import App from './App.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/app',
    component: App
  }
]

export default new VueRouter({
  routes
})
