import api from '../api/index'
import * as types from './mutation-types'

export const getInTheaters = (ctx, opts) => {
  api.getInTheaters().then((response) => {
    ctx.commit(types.GET_IN_THEATERS, response)
  })
}
