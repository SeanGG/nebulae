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
]

export default route
