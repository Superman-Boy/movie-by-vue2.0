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
    <warn :showWarn="showWarn"></warn>
  </div>
</template>

<script>
import hotItem from './hotItem.vue'
import warn from './warn.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      start: 0,
      count: 20,
      showWarn: false
    }
  },
  computed: {
    ...mapGetters({
      top: 'top',
      topList: 'topList'
    })
  },
  components: {
    'hot-item': hotItem,
    'warn': warn
  },
  methods: {
    ...mapActions(['getTop', 'updateTop']),
    evtLoadNext () {
      const $app = $('#app')
      $app.off('scroll')
      $app.on('scroll', () => {
        let scrollHeight = $app.scrollTop() + $(window).height()
        let contentHeight = $('.home-container').outerHeight()
        if (scrollHeight + 1 >= contentHeight) {
          if (this.topList.length <= this.top.total) {
            this.start++
            this.updateTop({
              start: this.start,
              count: this.count
            })
          } else {
            this.showWarn = true
          }
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
