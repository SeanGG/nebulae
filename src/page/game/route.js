const route = [
  // 转盘
  {
    path: '/Turntable',
    name: 'Turntable',
    component: r => require.ensure([], () => r(require('@/page/game/turntable/index.js')), 'turntable'),
    meta: {
      title: '转盘'
    }
  },
]

export default route
