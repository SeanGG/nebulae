import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../configs/'
Vue.use(VueResource)

Vue.http.options.emulateJSON = false
Vue.http.options.emulateHTTP = true

/**
 * initLoad
 * @authors zhangxiang
 * @param  {...[type]} requests [description]
 * @return {[type]}             [description]
 */
export const initLoad = requests => {
  // const $http = Vue.http

  if (requests.length > 0) {
    let reqlist = []
    requests.forEach((item, index) => {
      reqlist.push(item)
    })
    return Promise.all(reqlist)
      .then(data => {
        return Promise.resolve(data)
      })
      .catch(res => {
        if (!res.ok) {
          switch (res.status) {
            case 404:
              window.location.href = '/404'
              break
            default:
              console.log(res)
              alert('请求出错了！')
              break
          }
        }
        return Promise.reject(res)
      })
  }
  return
}

/**
 * get request
 * @authors zhangxiang
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const get = (opts) => {
  const $http = Vue.http

  const url = opts.url
  const query = opts.data

  return $http
    .get(config.callApi ? `${config.host}` + url : `${config.mockHost}` + url, {
      params: query
    })
    .then(response => {
      const res = response.data
      return Promise.resolve(res)
    })
    .catch(err => {
      console.log(`request get error:`)
      console.log(err)
      return Promise.reject(err)
    })
}

/**
 * post request
 * @authors zhangxiang
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const post = (opts) => {
  const $http = Vue.http

  const url = opts.url
  const data = opts.data
  if (opts.emulateJSON) {
    $http.options.emulateJSON = opts.emulateJSON
  }
  $http.headers['post'] = Object.assign({}, $http.headers['post'], opts.headers)
  return $http
    .post(config.callApi ? `${config.host}` + url : `${config.mockHost}` + url, data)
    .then(response => {
      const res = response.data
      return Promise.resolve(res)
    })
    .catch(err => {
      console.log(`request post error:`)
      console.log(err)
      return Promise.reject(err)
    })
}

/**
 * jsonp request
 * @authors zhangxiang
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const getJsonp = (opts) => {
  const $http = Vue.http

  const url = opts.url
  const data = opts.data
  const session = data.session || ''
  const cb = 'jsonp_' + session.slice(0,8)

  if (opts.emulateJSON) {
    $http.options.emulateJSON = opts.emulateJSON
  }
  return $http
    .jsonp(
      config.callApi ? `${config.host}` + url : `${config.mockHost}` + url, {
        params: data, // 请求参数
        jsonp: 'callback',
        jsonpCallback: cb
      })
    .then(response => {
      const res = response.data
      return Promise.resolve(res)
    })
    .catch(err => {
      console.log(`request jsonp error:`)
      console.log(err)
      return Promise.reject(err)
    })
}
/**
 * 表单提交
 * @param string url
 * @param string method  请求方式, POST, GET ...
 * @param object params  请求数据
 */
export const formSubmit = ({
  url,
  method,
  params,
  target
}) => {
  const hasOwn = {}.hasOwnProperty

  if (typeof window === 'undefined') {
    console.log(`Not a browser, form submit url: ${url}`)
    return
  }
  const form = document.createElement('form')
  form.setAttribute('method', method || 'POST')
  form.setAttribute('action', url)
  if (target) {
    form.setAttribute('target', target)
  }
  for (const key in params) {
    if (hasOwn.call(params, key)) {
      const hiddenField = document.createElement('input')
      hiddenField.setAttribute('type', 'hidden')
      hiddenField.setAttribute('name', key)
      hiddenField.setAttribute('value', params[key])
      form.appendChild(hiddenField)
    }
  }
  // 解决js脚本调用新窗口导致的拦截问题
  const submitBtnField = document.createElement('input')
  submitBtnField.setAttribute('type', 'submit')
  submitBtnField.setAttribute('style', 'opacity:0;display:block;width:0;height:0')
  submitBtnField.setAttribute('class', 'zaPayBtn')
  form.appendChild(submitBtnField)

  document.body.appendChild(form)
  submitBtnField.onclick = function (ev) {
    form.submit()
  }
  submitBtnField.click()
}

export default {
  initLoad,
  get,
  post,
  getJsonp,
  formSubmit
}
