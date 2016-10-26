const axios = require('axios')
const config = require('./config')

const inTheaters = async (ctx, next) => {
  let querystring = ctx.request.querystring
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
  let querystring = ctx.request.querystring
  let response = await axios.get(config.comming + '?' + querystring)
  ctx.body = response.data
}

const top250 = async (ctx, next) => {
  let querystring = ctx.request.querystring
  console.log(config.top250 + '?' + querystring)
  let response = await axios.get(config.top250 + '?' + querystring)
  ctx.body = response.data
}

module.exports = {
  inTheaters,
  getDetail,
  comming,
  top250
}
