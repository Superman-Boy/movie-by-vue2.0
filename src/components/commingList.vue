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
      comming: 'comming',
      commingList: 'commingList'
    })
  },
  components: {
    'hot-item': hotItem
  },
  methods: {
    ...mapActions(['getComming', 'updateComing']),
    evtLoadNext () {
      const $window = $(window)
      $window.on('scroll', () => {
        let scrollHeight = $window.scrollTop() + $(window).height()
        let conetentHeight = $('.home-container').outerHeight()
        if (scrollHeight + 1 >= conetentHeight && this.commingList.length <= this.comming.total) {
          this.start++
          this.updateComing({
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
