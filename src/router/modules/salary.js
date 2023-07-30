import layout from '@/layout'
export default {
  path: '/salary',
  component: layout,
  name: 'salary',
  children: [{
    path: '',
    name: 'salary',
    component: () =>
      import ('@/views/salary'),
    meta: {
      title: '工资',
      icon: 'money'
    }
  },
  {
    path: 'setting',
    component: () =>
      import ('@/views/salary/setting'),
    name: 'salarysSetting',
    hidden: true,
    meta: {
      title: '设置'
    }
  },
  {
    path: 'details/:yearMonth/:id',
    component: () =>
      import ('@/views/salary/detail'),
    name: 'salarysDetails',
    hidden: true,
    meta: {
      title: '详情'
    }
  },
  {
    path: 'historicalArchiving',
    component: () =>
      import ('@/views/salary/historical'),
    name: 'salarysHistorical',
    hidden: true,
    meta: {
      title: '历史归档'
    }
  },
  {
    path: 'monthStatement',
    component: () =>
      import ('@/views/salary/month'),
    name: 'salarysMonthStatement',
    hidden: true,
    meta: {
      title: '月报表'
    }
  }
  ]
}
