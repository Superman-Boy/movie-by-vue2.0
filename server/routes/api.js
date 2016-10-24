let router = require('koa-router')();
let api = require('../api/index.js');

router.get('/', api.articleList)
  .get('/in_theaters', api.inTheaters)
  .get('/detail/:id', api.getDetail)

module.exports = router;
