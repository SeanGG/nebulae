/**
 * 统一API方法清单定义文件配置
 * 示例 api (json)
 * 规范：使用API_ACTION_NAME格式（api标识别，方法类型，方法名称）
 * ACTION名称约定：
 * QUERY：查询
 * ADD：添加
 * UPDATE：更新
 * DEL：删除
 * @type {String}
 */

const apiConfig = require('../../config')
// console.log(apiConfig.dev.proxyTable['/ngc'].target)
const prdApi = apiConfig.dev.proxyTable['/ngc'].target
const testApi = apiConfig.dev.proxyTable['/test'].target
console.log(testApi)

const env = process.env.NODE_ENV
console.log('config=' + env)
let devApi = '/test' // 模拟地址 /mock /test /ngc
const api = env === 'production' ? testApi : devApi
const configs = {
  API_DAtestTA_getPrem: `${api}/promote/standard/getPrem.json`,
  test1: `${api}/test1.json`,
  goodsList: `${api}/goods/list`
}
module.exports = configs
