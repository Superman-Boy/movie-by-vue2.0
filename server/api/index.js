const axios = require('axios')
const config = require('./config')

const inTheaters = async (ctx, next) => {
  let response = await axios.get(config.inTheaters)
  ctx.body = response.data
}

const getDetail = async (ctx, next) => {
  let queryArr = ctx.url.split('/')
  let id = queryArr[queryArr.length -1]
  let response = await axios.get(config.detail + id)
  ctx.body = response.data
}

const comming = async (ctx, next) => {
  let response = await axios.get(config.comming)
  ctx.body = response.data
}

module.exports = {
  articleList,
  inTheaters,
  getDetail
}
