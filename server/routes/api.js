let router = require('koa-router')();
let article = require('../api/index.js');

router.get('/', article.articleList)
  .get('/in_theaters', article.inTheaters)

module.exports = router;
