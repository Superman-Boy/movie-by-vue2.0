import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/Home.vue'
import CommingSoon from './views/CommingSoon.vue'
import Top from './views/Top.vue'
import Subject from './views/Subject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/comming-soon',
    name: 'comming-soon',
    component: CommingSoon
  },
  {
    path: '/top',
    name: 'top',
    component: Top
  },
  {
    path: '/subject/:id',
    name: 'subject',
    component: Subject
  }
]

export default new VueRouter({
  routes
})
