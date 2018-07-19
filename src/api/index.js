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
const proApi = apiConfig.dev.proxyTable['/pro'].target
const devApi = apiConfig.dev.proxyTable['/dev'].target
const mockApi = apiConfig.dev.proxyTable['/mock'].target

const env = process.env.NODE_ENV
console.log('config=' + env)
const localApi = '/dev' // 模拟地址 /mock /test /ngc
const api = env === 'production' ? devApi : localApi
const configs = {
  API_DAtestTA_getPrem: `${api}/promote/standard/getPrem.json`,
  test1: `${api}/test1.json`,
  goodsList: `${api}/goods/list`,
  createOrder: `${api}/order/create`,
}
module.exports = configs
