const axios = require('axios')
const superagent = require('superagent')
const config = require('./config')

const inTheaters = async (ctx, next) => {
  let querystring = ctx.request.querystring
  console.log(config.top250 + '?' + querystring)
  let response = await superagent.get(config.inTheaters)
  ctx.body = response.body
}

const getDetail = async (ctx, next) => {
  let queryArr = ctx.url.split('/')
  let id = queryArr[queryArr.length -1]
  let response = await superagent.get(config.detail + id)
  ctx.body = response.body
}

const comming = async (ctx, next) => {
  let querystring = ctx.request.querystring
  console.log(config.top250 + '?' + querystring)
  let response = await superagent.get(config.comming + '?' + querystring)
  ctx.body = response.body
}

const top250 = async (ctx, next) => {
  let querystring = ctx.request.querystring
  console.log(config.top250 + '?' + querystring)
  let response = await superagent.get(config.top250 + '?' + querystring)
  ctx.body = response.body
}

module.exports = {
  inTheaters,
  getDetail,
  comming,
  top250
}
