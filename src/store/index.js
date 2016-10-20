import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import {
  GET_IN_THEATERS
} from './mutation-types'

Vue.use(Vuex)

let state = {
  inTheaters: []
}

let mutations = {
  [GET_IN_THEATERS] (state, inTheaters) {
    state.inTheaters = inTheaters
  }
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
