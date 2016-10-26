<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      TOP250</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in topList">
          <hot-item :value="value"></hot-item>
        </li>
    </ul>
  </div>
</template>

<script>
import hotItem from './hotItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      start: 0,
      count: 20
    }
  },
  computed: {
    ...mapGetters({
      top: 'top',
      topList: 'topList'
    })
  },
  components: {
    'hot-item': hotItem
  },
  methods: {
    ...mapActions(['getTop', 'updateTop']),
    evtLoadNext () {
      const $window = $(window)
      $window.on('scroll', () => {
        let scrollHeight = $window.scrollTop() + $(window).height()
        let conetentHeight = $('.home-container').outerHeight()
        if (scrollHeight + 1 >= conetentHeight && this.topList.length <= this.top.total) {
          this.start++
          this.updateTop({
            start: this.start,
            count: this.count
          })
          console.log('end==========end')
        }
      })
    }
  },
  created () {
    this.evtLoadNext()
    if (!this.top) {
      this.getTop()
    }
  }
}
</script>

<style scoped>
.hot-container {
  overflow: auto;
}

.hot-title-text {
  font-size: 15px;
  color: #8e8e8e;
  letter-spacing: 3px;
}

.hot-movie-list {

}
</style>
