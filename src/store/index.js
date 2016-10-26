import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

let state = {
  inTheaters: '',
  inTheatersList: [],
  detail: {},
  comming: '',
  commingList: [],
  top: '',
  topList: [],
  showLoading: false
}

let mutations = {
  [types.GET_IN_THEATERS] (state, inTheaters) {
    state.inTheaters = inTheaters
    state.inTheatersList = inTheaters.subjects
  },
  [types.UPDATE_IN_THEATERS] (state, inTheaters) {
    state.inTheaters = inTheaters
    state.inTheatersList = state.inTheatersList.concat(inTheaters.subjects)
  },
  [types.GET_DETAIL] (state, detail) {
    state.detail = detail
  },
  [types.TOOGLE_LOADING] (state, statue) {
    state.showLoading = statue
  },
  [types.GET_COMMING] (state, comming) {
    state.comming = comming
    state.commingList = comming.subjects
  },
  [types.UPDATE_COMMING] (state, comming) {
    state.comming = comming
    state.commingList = state.commingList.concat(comming.subjects)
  },
  [types.GET_WEEKLY] (state, weekly) {
    state.weekly = weekly
  },
  [types.GET_TOP] (state, top) {
    state.top = top
    state.topList = top.subjects
  },
  [types.UPDATE_TOP] (state, top) {
    state.top = top
    state.topList = state.topList.concat(top.subjects)
  }
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
