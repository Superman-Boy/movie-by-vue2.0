<template>
  <div class="home-container full-page">
    <nav-top :showPrev="false"></nav-top>
    <hot-list></hot-list>
    <nemu-bottom></nemu-bottom>
    <loading></loading>
  </div>
</template>

<script>
import navTop from '../components/navTop'
import menuBottom from '../components/menuBottom'
import hotList from '../components/hotList'
import loading from '../components/loading'
export default {
  name: 'home',
  components: {
    'nav-top': navTop,
    'hot-list': hotList,
    'nemu-bottom': menuBottom,
    'loading': loading
  }
}
</script>

<style>
@import '../assets/css/index';
.home-container {
  box-sizing: border-box;
  padding: 42px 15px;
  background: #f2f2f2;
  overflow: auto;
}
</style>
