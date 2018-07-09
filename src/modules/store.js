import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middle-wares'
import app from './app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    app
  },
  strict: debug,
  plugins: middlewares
})
