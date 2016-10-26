<template>
  <transition name="fade">
    <div class="warn-wrap"
      v-if="showWarn">
      没有更多数据了
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      warnStatus: false
    }
  },
  watch: {
    showWarn (newVal, oldVal) {
      if (newVal) {
        window.setTimeout(() => {
          this.$parent.showWarn = false
        }, 1000)
      }
    }
  },
  props: {
    showWarn: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
  .warn-wrap {
    position: fixed;
    left: 50%;
    bottom: 60px;
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin-left: -80px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
