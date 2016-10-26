<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      影城热映</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in inTheatersList">
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
      inTheaters: 'inTheaters',
      inTheatersList: 'inTheatersList'
    })
  },
  components: {
    'hot-item': hotItem
  },
  methods: {
    ...mapActions(['getInTheaters', 'updateInTheaters']),
    evtLoadNext () {
      const $window = $(window)
      $window.on('scroll', () => {
        let scrollHeight = $window.scrollTop() + $(window).height()
        let conetentHeight = $('.home-container').outerHeight()
        if (scrollHeight + 1 >= conetentHeight && this.inTheatersList.length <= this.inTheaters.total) {
          this.start++
          this.updateInTheaters({
            start: this.start,
            count: this.count
          })
          console.log('end==========end')
        }
      })
    }
  },
  created () {
    if (!this.inTheaters) {
      this.getInTheaters({
        start: this.start,
        count: this.count
      })
    }
    this.$nextTick(() => {
      this.evtLoadNext()
    })
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
