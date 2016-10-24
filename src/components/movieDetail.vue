<template>
  <div class="movie-wrap">
    <nav-top :title="detail.title"></nav-top>
    <div class="movie-image-wrap">
      <div class="movie-image">
        <img :src="detail.images ? detail.images.large : ''" class="movie-header-image" alt="" />
      </div>
    </div>
    <div class="movie-content">
      <div class="movie-title rd-row-flex flex-space-between">
        <div class="movie-part-desc">
          <h3 class="movie-title-text">{{detail.title}}</h3>
          <div class="movie-desc rd-col-flex">
            <span class="movie-genres">{{genres}}</span>
            <span class="movie-director">导演：{{detail.director}}</span>
            <span class="movie-actor">主演：{{detail.actor}}</span>
          </div>
        </div>
        <div class="movie-part-score rd-col-flex flex-start flex-middle">
          <span class="movie-score">{{detail.rating ? detail.rating.average : 0}}</span>
          <stars :score="detail.rating ? +detail.rating.stars : 0"></stars>
          <span class="movie-rating-count">{{detail.ratings_count}}人</span>
        </div>
      </div>
      <div class="movie-summary">
        <h3 class="movie-summary-title">简介</h3>
        <p class="movie-summary-text">
          {{detail.summary}}
        </p>
        <!-- <span class="movie-summary-btn">展开</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import navTop from './navTop'
import stars from './stars'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'movieDetail',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      detail: 'detail'
    }),
    genres () {
      let genresArr = this.detail ? this.detail.genres : []
      let year = this.detail ? this.detail.year : ''
      let genresStr = year + '/'
      if (genresArr) {
        genresArr.forEach((item, index) => {
          if (index < genresArr.length - 1) {
            genresStr += item + '/'
          } else {
            genresStr += item
          }
        })
        return genresStr
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions(['getDetail']),
    getMovieDetail () {
      let opts = {
        id: this.$route.params.id
      }
      this.getDetail(opts)
    }
  },
  created () {
    this.getMovieDetail()
  },
  components: {
    stars,
    'nav-top': navTop
  }
}
</script>

<style scoped>
.movie-image-wrap {
  padding: 10px 0;
  background: #000;
  .movie-image {
    margin: 0 auto;
    width: 156px;
    height: 217px;
    border: 1px solid #ccc;
    background: #fff;
  }
  .movie-header-image {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.movie-content {
  padding: 15px;
  font-size: 14px;
}

.movie-part-desc {
  max-width: 230px;
  .movie-title-text {
    margin: 0;
    font-size: 26px;
  }
}

.movie-part-score {
  width: 80px;
  height: 80px;
  padding: 5px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .movie-score {
    font-size: 22px;
    text-align: center;
  }
  .movie-rating-count {
    font-size: 12px;
    color: #999;
    text-align: center;
  }
}

.movie-summary {
  .movie-summary-title {
    font-size: 12px;
    color: #999;
  }
  .movie-summary-text {
    margin: 10px 0 0 0;
    font-size: 16px;
  }
  .movie-summary-btn {
    text-align: center;
    color: #42b983;
  }
  .text-over-hidden {
    display: -webkit-box;
    overflow : hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
</style>
