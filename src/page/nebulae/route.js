const route = [
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
]

export default route
