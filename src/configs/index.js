/**
 * 常量预配置
 * @type {Object}
 */
const configs = {
  chunkMode: true,
  callApi: true, // 是否调用真实API服务，否则mock服务调试
  root: '', // 路由根路径,一般在使用虚拟目录跳转时配置
  mockHost: 'https://www.easy-mock.com/mock/5a38ab6ae859572ed685340b/api', // easy-mock url
  host: '' // 请求的服务host地址：http://xxxx.zhongan.com/api/xxxx
}
module.exports = configs
