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
      redirect: '/Index'
    },
    // 首页
    {
      path: '/Index',
      name: 'Index',
      component: r => require.ensure([], () => r(require('@/page/index/index.js')), 'index'),
      meta: {
        title: '转盘'
      }
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
      component: r => require.ensure([], () => r(require('@/page/game/turntable/index.js')), 'turntable'),
      meta: {
        title: '转盘'
      }
    },
    // 404
    {
      path: '/404',
      name: '404',
      component: r => require.ensure([], () => r(require('@/page/404/index.js')), '404'),
      meta: {
        title: '星云应用-404'
      }
    },
    // 未知页面重定向
    {
      path: '*',
      redirect: '/404'
    },
    // 星云应用-游戏列表
    {
      path: '/NaList',
      name: 'NaList',
      component: r => require.ensure([], () => r(require('@/page/nebulae/list/index.js')), 'naList'),
      meta: {
        title: '星云应用-游戏列表'
      }
    },
    // 星云应用-游戏详情
    {
      path: '/NaItem',
      name: 'NaItem',
      component: r => require.ensure([], () => r(require('@/page/nebulae/item/index.js')), 'naItem'),
      meta: {
        title: '星云应用-游戏详情'
      }
    },
    // 星云应用-游戏详情
    {
      path: '/NaGetInviteCode',
      name: 'NaGetInviteCode',
      component: r => require.ensure([], () => r(require('@/page/nebulae/getInviteCode/index.js')), 'naGetInviteCode'),
      meta: {
        title: '星云应用-邀请'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
