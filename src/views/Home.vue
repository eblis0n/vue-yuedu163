<template>
  <div class="container">
    Home
    <app-header></app-header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
export default {
  data () {
    return {
    }
  },
  components: {
    'app-header': Header
  },
  methods: {

  },
  computed: {
    localComputed () {
    },
    ...mapState({
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
