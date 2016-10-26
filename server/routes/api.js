let router = require('koa-router')();
let api = require('../api/index.js');

router.get('/in_theaters', api.inTheaters)
  .get('/detail/:id', api.getDetail)
  .get('/comming', api.comming)
  .get('/top250', api.top250)

module.exports = router;
