import api from '../api/index'
import * as types from './mutation-types'

export const getInTheaters = (ctx, opts) => {
  api.getInTheaters(opts).then((response) => {
    ctx.commit(types.GET_IN_THEATERS, response.body)
  })
}

export const updateInTheaters = (ctx, opts) => {
  api.getInTheaters(opts).then((response) => {
    ctx.commit(types.UPDATE_IN_THEATERS, response.body)
  })
}

export const getDetail = (ctx, opts) => {
  api.getDetail(opts).then((response) => {
    ctx.commit(types.GET_DETAIL, response.body)
  })
}

export const getComming = (ctx, opts) => {
  api.getComming(opts).then((response) => {
    ctx.commit(types.GET_COMMING, response.body)
  })
}

export const updateComing = (ctx, opts) => {
  api.getComming(opts).then((response) => {
    ctx.commit(types.UPDATE_COMMING, response.body)
  })
}

export const getWeekly = (ctx, opts) => {
  api.getWeekly().then((response) => {
    ctx.commit(types.GET_WEEKLY, response.body)
  })
}

export const getTop = (ctx, opts) => {
  api.getTop().then((response) => {
    ctx.commit(types.GET_TOP, response.body)
  })
}

export const updateTop = (ctx, opts) => {
  api.getTop(opts).then((response) => {
    ctx.commit(types.UPDATE_TOP, response.body)
  })
}

export const showLoading = (ctx) => {
  ctx.commit(types.TOOGLE_LOADING, true)
}

export const hideLoading = (ctx) => {
  ctx.commit(types.TOOGLE_LOADING, false)
}
