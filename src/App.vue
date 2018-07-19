<template>
  <div id='app'>
    <header ref="header" v-show="header.status">
      <section class="title">{{header.name}}</section>
      <section class="description">{{header.desc}}</section>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/scss/common.scss'
import { getQueryString } from '@/utils/util'
export default {
  name: 'app',
  data () {
    return {
      autoTest: getQueryString('autoTest'),
      header: {
        name: '首页',
        desc: '应用&功能入口集合',
        status: false
      }
    }
  },
  created () {
    if (!this.autoTest) {
      this.setScale()
    }
  },
  methods: {
    // 设置屏幕缩放&rem
    setScale () {
      (function () {
        let doc = document
        let win = window
        let docEl = doc.documentElement
        let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
        let recalc = function () {
          let clientWidth = docEl.clientWidth // window.innerWidth;
          if (!clientWidth) return
          let fontSizeRate = clientWidth / 375
          let baseFontSize = 12 * fontSizeRate
          docEl.style.fontSize = baseFontSize + 'px'
        }
        recalc()
        if (!doc.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
      })()
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
