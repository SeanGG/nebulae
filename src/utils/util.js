import zDate from './date'

// location.search获取
export const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

// 设置页面基础参数
export const setInitParams = (query) => {
  let host = window.location.host
  host = ''

  let url = ''
  if (!host || host === 'ngc.ztgame.com') {
    url = 'https://ngc.ztgame.com/'
  } else {
    url = 'http://' + host + '/'
  }

  const initParams = {
    page_sessionid: getQueryString('session'),
    page_udid: getQueryString('udid'),
    page_appid: getQueryString('page_appid'),
    url: url
  }

  if (query && query !== '') {
    initParams.page_sessionid = query.session
    initParams.page_udid = query.udid
    initParams.page_appid = query.page_appid
  }

  return initParams
}

// slider动态下拉高度
export const slideHeight = (target, height, time) => { // time, 数值，可缺省
  let targetHeight = target.height() + 'px'
  let targetCss = {}
  if (!height && height !== 0) {
    target.css({
      'height': 0 + 'px',
      'display': 'block'
    })
    targetCss = {
      'height': targetHeight
    }
  } else {
    targetHeight = 'auto'
    target.css({
      'height': 0 + 'px'
    })
    targetCss = {
      'height': targetHeight,
      'display': 'none'
    }
  }
  let targetTime = time || 0
  let clock = setTimeout(() => {
    if (!height && height !== 0) {
      target.css(targetCss)
    } else {
      target.removeAttr('style')
    }
    clearTimeout(clock)
  }, targetTime)
}

// slider动态下拉高度
export const scrollTo = (target, time) => { // time, 数值，可缺省
  let offtop = parseInt($(target).offset().top)
  window.scrollTo({
    top: offtop
  })
}

// 设置页面title
export const setTitle = (name) => { // time, 数值，可缺省
  document.title = name
}

export const getAge = (range, type) => { // range 时间, type:max（最大年龄），min（最小年龄）
  let age = Number.parseInt(range)
  let birth = ''
  if (type === 'min') {
    birth = zDate.addYear(-age - 1, zDate.addDay(2, zDate.today()))
  }
  if (type === 'max') {
    birth = zDate.addYear(-age, zDate.today())
  }
  return zDate.format(birth, 'yyyy-mm-dd')
}

// 跳转锚点
export const handleAnchor = (el) => {
  el.scrollIntoView(true)
}
