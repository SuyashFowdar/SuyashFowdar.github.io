import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaded: false
  },
  mutations: {
    setLoaded(state) {
      state.loaded = true;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getLoaded(state) {
      return state.loaded;
    }
  }
})
