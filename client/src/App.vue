<template>
  <div id="app">
    123123
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  data () {
    return {
      arr: [2, 3, 4, 5]
    }
  },
  name: 'app',
  components: {
    Hello
  },
  mounted () {
    this.$nextTick(() => {
      console.log(123123)
    })
  }
}
</script>

<style>

</style>
