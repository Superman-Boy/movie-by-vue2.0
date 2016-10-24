<template>
  <transition name="fade">
    <div class="loading-wrap"
      v-show="showLoading">
      <img src="../assets/image/loading-spinning-bubbles.svg" class="loading-img" alt="" />
      <h1 class="loadding-text">正在加载中...</h1>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapGetters({
      showLoading: 'showLoading'
    })
  }
}
</script>

<style scoped>
.loading-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #009dd7;
  .loading-img {
    display: block;
    margin: 200px auto 50px;
    width: 64px;
    height: 64px;
  }
  .loadding-text {
    font-size: 25px;
    text-align: center;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
