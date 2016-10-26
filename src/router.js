import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './views/home.vue'
import commingSoon from './views/comming-soon.vue'
import weekly from './views/weekly.vue'
import top from './views/top.vue'
import subject from './views/subject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/comming-soon',
    name: 'comming-soon',
    component: commingSoon
  },
  {
    path: '/weekly',
    name: 'weekly',
    component: weekly
  },
  {
    path: '/top',
    name: 'top',
    component: top
  },
  {
    path: '/subject/:id',
    name: 'subject',
    component: subject
  }
]

export default new VueRouter({
  routes
})
