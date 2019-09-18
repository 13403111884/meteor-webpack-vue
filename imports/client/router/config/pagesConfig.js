export default [
  {
    path: '/',
    component:  () => import('./../../pages/index')
  },
  {
    path: '/user',
    component:  () => import('./../../pages/user')
  }
]