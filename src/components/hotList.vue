<template>
  <div class="hot-container">
    <h2 class="hot-title-text">影城热映</h2>
    <ul class="hot-movie-list">
      <li class="hot-movie-item rd-row-flex"
        v-for="(value, key) in inTheaters">
        <img :src="value.images.medium" alt="" class="item-image"/>
        <div class="item-content rd-col-flex">
          <h3 class="item-title-line">{{value.original_title}}</h3>
          <span class="item-score">{{value.rating.average}}</span>
          <span class="item-desc">导演：{{value.director}}</span>
          <span class="item-desc">主演：{{value.actor}}</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
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
  methods: mapActions(['getInTheaters']),
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

.hot-movie-item {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background: #fff;
  .item-image {
    width: 60px;
    height: 80px;
  }
  .item-content {
    margin-left: 10px;
    font-size: 13px;
    max-width: 290px;
    overflow: hidden;
    .item-title-line {
      margin: 0;
    }
    .item-desc {
      max-width: 290px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
