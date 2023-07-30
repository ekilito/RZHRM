import layout from '@/layout'
export default {
  path: '/social',
  component: layout,
  name: 'social',
  children: [{
    path: '',
    name: 'social',
    component: () =>
      import ('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'

    }
  },
  // 报表
  {
    path: 'detail/:id',
    hidden: true,
    component: () =>
      import ('@/views/social/detail'),
    name: 'socialDetail',
    meta: {
      title: '社保'
    }
  },
  // 历史归档
  {
    path: 'historicalArchiving',
    hidden: true,
    component: () =>
      import ('@/views/social/historical'),
    name: 'socialHistorical',
    meta: {
      title: '历史归档'
    }
  },
  // 月报表
  {
    path: 'monthStatement',
    component: () =>
      import ('@/views/social/month'),
    name: 'socialMonthStatement',
    hidden: true,
    meta: {
      title: '当月报表'
    }
  }
  ]
}
