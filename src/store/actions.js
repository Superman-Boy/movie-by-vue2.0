import api from '../api/index'
import * as types from './mutation-types'

export const getInTheaters = (ctx, opts) => {
  api.getInTheaters().then((response) => {
    ctx.commit(types.GET_IN_THEATERS, response.body)
  })
}

export const getDetail = (ctx, opts) => {
  api.getDetail(opts).then((response) => {
    ctx.commit(types.GET_DETAIL, response.body)
  })
}

export const showLoading = (ctx) => {
  ctx.commit(types.TOOGLE_LOADING, true)
}

export const hideLoading = (ctx) => {
  ctx.commit(types.TOOGLE_LOADING, false)
}
