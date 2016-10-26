<template>
  <div class="home-container full-page">
    <nav-top :showPrev="false" :title="'即将上映'"></nav-top>
    <comming-list></comming-list>
    <nemu-bottom :activeLink="'comming-soon'"></nemu-bottom>
    <loading></loading>
  </div>
</template>

<script>
import navTop from '../components/navTop'
import menuBottom from '../components/menuBottom'
import commingList from '../components/commingList'
import loading from '../components/loading'
export default {
  name: 'comming-soon',
  components: {
    'nav-top': navTop,
    'comming-list': commingList,
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
