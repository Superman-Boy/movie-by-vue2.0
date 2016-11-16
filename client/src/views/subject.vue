<template>
  <div class="subject-container">
    <movie-detail></movie-detail>
    <loading></loading>
  </div>
</template>

<script>
import movieDetail from '../components/movieDetail'
import loading from '../components/loading'
export default {
  name: 'subject',
  components: {
    'movie-detail': movieDetail,
    loading
  }
}
</script>

<style>
@import '../assets/css/index';
.subject-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 42px;
  background: #f2f2f2;
  overflow: auto;
}
</style>
