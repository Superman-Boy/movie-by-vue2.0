<template>
  <div class="subject-container full-page">
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

<style scoped>
.subject-container {
  box-sizing: border-box;
  padding-top: 42px;
  background: #f2f2f2;
  overflow: auto;
}
</style>
