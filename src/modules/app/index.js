import http from '@/utils/http'
import router from '@/router'
import config from '@/configs'
import * as requestApi from '@/api'
import * as types from '../mutation-type'

const state = {
  appName: null
}

/**
 * getters定义，为保证命名唯一性：
 * 规范：
 * module名称_action名称_state对象
 * 示例代码：appGetAppName
 * @type {Object}
 */
const getters = {
  appGetAppName(state) {
    return state.appName
  }
}

/**
 * actions 统一定义规范,为保证命名唯一性：
 * 规范
 * module名称_action名称_state对象
 * 初始化：init_XXX
 * 添加属性：add_XXX
 * 更新属性：update_XXX
 * 删除属性内容：del_XXX
 * 查询属性内容：query_XXX
 * 示例代码：appAddApiName
 * @type {String}
 */
const actions = {
  appAddApiName({ commit, state }, payload) {
    // 发送请求示例
    return http.get(requestApi.API_QUERY_PRODUCT_INFO, payload).then(res => {
      // commit 修改store对象数据
      commit(types.INIT_APP_NAME, payload)
      // 处理请求，支持promise调用模式...
      console.log(res)
      return res
    })
  }
}

// mutations
const mutations = {
  [types.INIT_APP_NAME](state, data) {
    state.appName = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
