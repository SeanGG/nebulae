// 引入全局样式
// import 'zarm-vue/zarm-vue.default.css'
import '@/assets/scss/common.scss'
import 'babel-polyfill'
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
// import store from './modules/store'
import router from './router'
// import logUtil from '@/utils/logUtil'
// import zarmVue from 'zarm-vue'
// Vue.use(zarmVue)
// 消除 click 移动浏览器300ms延迟
import attachFastClick from 'fastclick'
attachFastClick.attach(document.body)

// Vue.use(require('vue-wechat-title'))
Vue.config.productionTip = false

window.$ = $
window.jQuery = $

// let Router = router.router
// router.afterEach((to, from, next) => {
//   logUtil.setTj(to.fullPath)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
