import {
  isApp
} from './platform'

// location.search获取
export const appBridge = {
  ready: (fn, apiName) => {
    let isAppStatus = isApp()
    if (isAppStatus) {
    var result = window.webkit ? window.webkit.messageHandlers : ''
    if (result) {
      // fn && fn(result)
      // if (fn) {
      try {
        fn(result)
      } catch (error) {
        console.error(`The native ${apiName} not exist !`)
      }
      // }
    } else {
      var time = 1
      var timer = setInterval(function () {
        console.log(time++)
        result = window.webkit ? window.webkit.messageHandlers : ''
        if (result) {
          clearInterval(timer)
          try {
            fn(result)
          } catch (error) {
            console.error(`The native ${apiName} not exist !`)
          }
        }
      }, 200)
      const timer2 = setTimeout(function () {
        clearInterval(timer)
        clearTimeout(timer2)
        console.error(`5sec later ! Timeout ! The native ${apiName} not exist !`)
      }, 5000)
    }
    };
  },
  hideLoading: () => {
    this.ready(function (boot) {
      boot.showAppLocalProgress(false)
    })
  },
  showLoading: () => {
    this.ready(function (boot) {
      boot.showAppLocalProgress(true)
    })
  }
}
