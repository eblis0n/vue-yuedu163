import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: 'Lean Vue',
        done: false
      },
      {
        id: 2,
        text: 'Lean Vuex',
        done: true
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
})

export default store
