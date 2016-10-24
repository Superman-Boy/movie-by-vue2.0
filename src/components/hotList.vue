<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      影城热映</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in inTheaters">
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
      inTheaters: 'inTheaters'
    })
  },
  components: {
    'hot-item': hotItem
  },
  methods: {
    ...mapActions(['getInTheaters'])
  },
  created () {
    this.getInTheaters()
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
