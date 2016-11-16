<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      即将上映</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in commingList">
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
      comming: 'comming',
      commingList: 'commingList'
    })
  },
  components: {
    'hot-item': hotItem,
    'warn': warn
  },
  methods: {
    ...mapActions(['getComming', 'updateComing']),
    evtLoadNext () {
      const $app = $('#app')
      $app.off('scroll')
      $app.on('scroll', () => {
        let scrollHeight = $app.scrollTop() + $(window).height()
        let contentHeight = $('.home-container').outerHeight()
        if (scrollHeight + 1 >= contentHeight) {
          if (this.commingList.length <= this.comming.total) {
            this.start++
            this.updateComing({
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
    this.$nextTick(() => {
      this.evtLoadNext()
    })
    if (!this.comming) {
      this.getComming({
        start: this.start,
        count: this.count
      })
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
