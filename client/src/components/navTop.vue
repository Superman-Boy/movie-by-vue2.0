<template>
  <header class="nav-top" :style="styles">
    <i class="icon-return ion-chevron-left"
      v-show="showPrev"
      @click="goPrev"
    ></i>
    {{this.title}}
  </header>
</template>

<script>
export default {
  name: 'navTop',
  data () {
    return {
      styles: [{background: '#fff', color: '#ccc'}, {'font-size': '18px'}]
    }
  },
  props: {
    title: {
      type: String,
      default: '豆瓣电影'
    },
    showPrev: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goPrev () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
@import '../assets/css/ionicicon';
.nav-top {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 42px;
  font-size: 20px;
  text-align: center;
  line-height: 42px;
  color: #fff;
  background: #009dd7;
  z-index: 10;
  .icon-return {
    position: absolute;
    left: 10px;
    top: 0;
    font-size: 20px;
  }
}
</style>
