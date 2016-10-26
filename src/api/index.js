import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../store/index'

Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  store.commit('TOOGLE_LOADING', true)
  next((response) => {
    store.commit('TOOGLE_LOADING', false)
  })
})

// let baseUrl = 'http://23.88.229.24:3001/api'
let baseUrl = 'http://127.0.0.1:3001/api'

let apiResource = Vue.resource(baseUrl + '{/id}')
let detailResource = Vue.resource(baseUrl + '/detail{/id}')
export default {
  getInTheaters: (opts) => {
    return apiResource.get({id: 'in_theaters', ...opts})
  },
  getComming: (opts) => {
    return apiResource.get({id: 'comming', ...opts})
  },
  getWeekly: () => {
    return apiResource.get({id: 'weekly'})
  },
  getTop: (opts) => {
    return apiResource.get({id: 'top250', ...opts})
  },
  getDetail: (opts) => {
    return detailResource.get(opts)
  }
}
