import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './views/home.vue'
import CommingSoon from './views/comming-soon.vue'
import Top from './views/top.vue'
import Subject from './views/subject.vue'

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
