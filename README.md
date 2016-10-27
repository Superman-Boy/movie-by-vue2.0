# vue-movie

> 使用vue2.0 + vuex2.0 + vue-router2.0 + koa2.0做的一个简单电影webapp

<!-- ## 线上访问地址
[http://vue.fecss.com/movie/#/](http://vue.fecss.com/movie/#/) -->

## 运行步骤

``` bash
# clone项目
git clone 'git@github.com:wendaosanshou/movie-by-vue2.0.git'

# 安装服务端依赖
cd movie-by-vue2.0/server
npm install

# 安装客户端依赖
cd movie-by-vue2.0
npm install

# 运行服务端
cd movie-by-vue2.0/server
npm start

# 运行客户端
cd movie-by-vue2.0
npm run dev

# 编译压缩后发布到生产环境
npm run build
```

## 效果
![gif](https://github.com/wendaosanshou/movie-by-vue2.0/blob/master/source/GIF-movie.gif)

## 说明
因豆瓣api目前已经停止维护，而且对origin做了限制，客户端不能够直接通过ajax请求豆瓣的接口api!

该项目使用了koa2.0做中间层，请求豆瓣api并提供接口给客户端，但是部分数据有误并且存在重复数据。

豆瓣api地址：[https://developers.douban.com/wiki/?title=api_v2](https://developers.douban.com/wiki/?title=api_v2)

## todo
- 重构，简化代码
