import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

let state = {
  inTheaters: [],
  detail: {},
  comming: {},
  showLoading: false
}

let mutations = {
  [types.GET_IN_THEATERS] (state, inTheaters) {
    state.inTheaters = inTheaters
  },
  [types.GET_DETAIL] (state, detail) {
    state.detail = detail
  },
  [types.TOOGLE_LOADING] (state, statue) {
    state.showLoading = statue
  },
  [types.GET_COMMING] (state, comming) {
    state.comming = comming
  }
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
