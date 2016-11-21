<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      影城热映</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in inTheatersList">
          <HotItem :value="value"></HotItem>
        </li>
    </ul>
    <Warn :showWarn="showWarn"></Warn>
  </div>
</template>

<script>
import HotItem from './HotItem.vue'
import Warn from './Warn.vue'
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
      inTheaters: 'inTheaters',
      inTheatersList: 'inTheatersList'
    })
  },
  components: {
    HotItem,
    Warn
  },
  methods: {
    ...mapActions(['getInTheaters', 'updateInTheaters']),
    evtLoadNext () {
      const $app = $('#app')
      $app.off('scroll')
      $app.on('scroll', () => {
        let scrollHeight = $app.scrollTop() + $(window).height()
        let contentHeight = $('.home-container').outerHeight()
        if (scrollHeight + 1 >= contentHeight) {
          if (this.inTheatersList.length <= this.inTheaters.total) {
            this.start++
            this.updateInTheaters({
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
  mounted () {
    this.$nextTick(() => {
      this.evtLoadNext()
    })
    if (!this.inTheaters) {
      this.getInTheaters({
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
</style>
