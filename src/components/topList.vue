<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      TOP250</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in top.subjects">
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
    }
  },
  computed: {
    ...mapGetters({
      top: 'top'
    })
  },
  components: {
    'hot-item': hotItem
  },
  methods: {
    ...mapActions(['getTop'])
  },
  created () {
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
