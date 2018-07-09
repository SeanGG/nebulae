import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

// const router = new Router({
export default new Router({
  mode: 'hash',
  routes: [
    // 默认加载页面
    {
      path: '/',
      redirect: '/AppApi'
    },
    // app原生接口
    {
      path: '/AppApi',
      name: 'AppApi',
      component: r => require.ensure([], () => r(require('@/page/appApi/index.js')), 'appApi'),
      meta: {
        title: 'app原生接口'
      }
    },
    // 转盘
    {
      path: '/Turntable',
      name: 'Turntable',
      component: r => require.ensure([], () => r(require('@/page/turntable/index.js')), 'turntable'),
      meta: {
        title: '转盘'
      }
    },
    // 星云应用-游戏列表
    {
      path: '/list',
      name: 'List',
      component: r => require.ensure([], () => r(require('@/page/list/index.js')), 'list'),
      meta: {
        title: '星云应用-游戏列表'
      }
    },
    // 星云应用-游戏详情
    {
      path: '/item',
      name: 'Item',
      component: r => require.ensure([], () => r(require('@/page/item/index.js')), 'item'),
      meta: {
        title: '星云应用-游戏详情'
      }
    },
    // 星云应用-游戏详情
    {
      path: '/getInviteCode',
      name: 'GetInviteCode',
      component: r => require.ensure([], () => r(require('@/page/getInviteCode/index.js')), 'getInviteCode'),
      meta: {
        title: '星云应用-邀请'
      }
    },
    // 星云应用-404
    {
      path: '/404',
      name: '404',
      component: r => require.ensure([], () => r(require('@/page/404/index.js')), '404'),
      meta: {
        title: '星云应用-404'
      }
    },
    // 星云应用-未知页面重定向
    {
      path: '*',
      redirect: '/404'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
