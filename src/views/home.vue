<template>
  <div class="home-container full-page">
    <nav-top></nav-top>
    <hot-list></hot-list>
  </div>
</template>

<script>
import navTop from '../components/navTop'
import hotList from '../components/hotList'
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    'nav-top': navTop,
    'hot-list': hotList
  }
}
</script>

<style>
@import '../assets/css/index';
.home-container {
  box-sizing: border-box;
  padding: 42px 15px 0 15px;
  background: #f2f2f2;
  overflow: auto;
}
</style>
