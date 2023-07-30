import layout from '@/layout'
export default {
  path: '/attendance',
  name: 'attendance',
  component: layout,
  children: [{
    path: '',
    name: 'attendance',
    component: () =>
      import ('@/views/attendance'),
    meta: {
      title: '考勤',
      icon: 'excel'
    }
  },
  {
    path: 'archiving',
    component: () =>
      import ('@/views/attendance/historical'),
    name: 'archiving',
    hidden: true,
    meta: {
      title: '归档'
    }
  },
  {
    path: 'report/:month',
    component: () =>
      import ('@/views/attendance/report'),
    name: 'reports',
    hidden: true,
    meta: {
      title: '报表'
    }
  }
  ]
}
