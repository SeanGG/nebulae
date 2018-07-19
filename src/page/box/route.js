const route = [
  // 盒子页面聚合
  {
    path: '/BoxIndex',
    name: 'BoxIndex',
    component: r => require.ensure([], () => r(require('@/page/box/index/index.js')), 'boxIndex'),
    meta: {
      title: '盒子页面聚合'
    }
  },
  // 盒子--商品列表
  {
    path: '/prdList',
    name: 'prdList',
    component: r => require.ensure([], () => r(require('@/page/box/prdList/index.js')), 'prdList'),
    meta: {
      title: '盒子--商品列表'
    }
  },
  // 盒子--商品详情
  {
    path: '/prd',
    name: 'prd',
    component: r => require.ensure([], () => r(require('@/page/box/prd/index.js')), 'prd'),
    meta: {
      title: '盒子--商品详情'
    }
  },
  // 盒子--文案页面
  {
    path: '/message',
    name: 'message',
    component: r => require.ensure([], () => r(require('@/page/box/message/index.js')), 'message'),
    meta: {
      title: '盒子--商品详情'
    }
  },
  // 盒子--文案页面
  {
    path: '/message2',
    name: 'message2',
    component: r => require.ensure([], () => r(require('@/page/box/message2/index.js')), 'message2'),
    meta: {
      title: '盒子--商品详情'
    }
  },
  // 盒子--文案页面
  {
    path: '/message3',
    name: 'message3',
    component: r => require.ensure([], () => r(require('@/page/box/message3/index.js')), 'message3'),
    meta: {
      title: '盒子--商品详情'
    }
  }
]

export default route
