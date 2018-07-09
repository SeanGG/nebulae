let _ua = window.navigator.userAgent

export const isApp = () => {
  return /zhonganwebview/i.test(_ua)
}

export const isWeixin = () => {
  return /micromessenger/i.test(_ua)
}

// 手机类型判定
export const typePhone = () => {
  // const u = navigator.userAgent,
    // device = ''
  if (_ua.indexOf('Android') > -1 || _ua.indexOf('Linux') > -1) {
    return 'android'
  } else if (_ua.indexOf('iPhone') > -1) {
    return 'ios'
  }
}
