<template>
  <div class="hot-container">
    <h2 class="hot-title-text">
      即将上映</h2>
    <ul class="hot-movie-list">
        <li class="hot-movie-item"
          v-for="(value, key) in comming.subjects">
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
      comming: 'comming'
    })
  },
  components: {
    'hot-item': hotItem
  },
  methods: {
    ...mapActions(['getComming'])
  },
  created () {
    this.getComming()
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
