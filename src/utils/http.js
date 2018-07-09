import Vue from 'vue'
import VueResource from 'vue-resource'
import config from '../configs/'
Vue.use(VueResource)

Vue.http.options.emulateJSON = false
Vue.http.options.emulateHTTP = true

/**
 * initLoad
 * @authors zhanwang.ye
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
 * @authors zhanwang.ye
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const get = (opts) => {
  let $http = Vue.http

  let url = opts.url
  let query = opts.data

  return $http
    .get(config.callApi ? `${config.host}` + url : `${config.mockHost}` + url, {
      params: query
    })
    .then(response => {
      let res = response.data
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
 * @authors zhanwang.ye
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const post = (opts) => {
  let $http = Vue.http

  let url = opts.url
  let data = opts.data
  return $http
    .post(config.callApi ? `${config.host}` + url : `${config.mockHost}` + url, data)
    .then(response => {
      let res = response.data
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
 * @authors zhanwang.ye
 * @param  {[type]} url   [description]
 * @param  {[type]} query [description]
 * @return {[type]}       [description]
 */
export const getJsonp = (url, query) => {
  let $http = Vue.http
  return $http
    .jsonp(config.callApi ? `${config.host}` + url : `${config.mockHost}` + url, query)
    .then(response => {
      let res = response.data
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
export const formSubmit = ({ url, method, params, target }) => {
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
  submitBtnField.onclick = function(ev) {
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
