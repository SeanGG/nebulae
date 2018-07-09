export const formatterDate = (fmDate, fmt) => {
  // author: meizz
  var o = {
    'M+': fmDate.getMonth() + 1, // 月份
    'd+': fmDate.getDate(), // 日
    'h+': fmDate.getHours(), // 小时
    'm+': fmDate.getMinutes(), // 分
    's+': fmDate.getSeconds(), // 秒
    'q+': Math.floor((fmDate.getMonth() + 3) / 3), // 季度
    S: fmDate.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (fmDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  }
  return fmt
}
