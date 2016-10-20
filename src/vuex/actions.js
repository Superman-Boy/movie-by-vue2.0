import api from '../api/index'
import * as types from './mutation-types'

export const getInTheaters = ({ dispatch }, opts) => {
  api.getInTheaters().then((response) => {
    console.log(response)
  })
}
