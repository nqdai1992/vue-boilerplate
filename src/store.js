import Vue from 'vue'
import Vuex from 'vuex'

import ProductStore from './modules/products/store'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requestState: 'done', // One of 3 values [done, loading, error]
    requestMethod: 'get', // One of 4 values [get, post, put, delete]
  },
  mutations: {
    SET_REQUEST_STATE (state, payload) {
      state.requestState = payload
    },
    SET_REQUEST_METHOD (state, payload) {
      state.requestMethod = payload
    }
  },
  modules: {
    ProductStore
  }
})