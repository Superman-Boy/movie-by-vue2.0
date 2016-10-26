<template>
  <div class="home-container">
    <nav-top :showPrev="false" :title="'TOP250'"></nav-top>
    <top-list></top-list>
    <nemu-bottom :activeLink="'top'"></nemu-bottom>
    <loading></loading>
  </div>
</template>

<script>
import navTop from '../components/navTop'
import menuBottom from '../components/menuBottom'
import topList from '../components/topList'
import loading from '../components/loading'
export default {
  name: 'top',
  components: {
    'nav-top': navTop,
    'top-list': topList,
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
