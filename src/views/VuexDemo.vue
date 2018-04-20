<template>
  <div class="container">
    Home
    <app-header></app-header>
    {{count}}
    {{countAlias}}
    {{countPlusLocalState}}
    {{localCountAlias}}
    {{doneTodosCount}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header'
export default {
  data () {
    return {
      localCount: 10
    }
  },
  components: {
    'app-header': Header
  },
  methods: {

  },
  /*
  // 使用Vuex前的computed
  computed: {
    count () {
      return this.$store.state.count
    }
  }
  */
 
  /*
  // mapState 辅助函数帮助我们生成计算属
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,
    // 传字符串参数 'count' 等同于 'state => state.count'
    countAlias: 'count',
    // 为了能使用 'this'获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    },
    // 常规 computed, 没有使用 store的状态
    localCountAlias () {
      return this.localCount
    }
  })
  */
 
  /*
  computed: mapState([
    // 映射 this.count 为store.state.count
    'count'
  ])
  */
  computed: {
    doneTodosCount (state) {
      return this.$state.todos.filter(todo => todo.done).length
    },
    // 使用 对象展开运算符 将此对象混入到外部对象中
    ...mapState({
      count: state => state.count
      // doneTodosCount (state) {
      //   return state.todos.filter(todo => todo.done).length
      // }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
