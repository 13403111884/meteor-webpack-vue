export default [
  {
    path: '/',
    component:  () => import('./../pages/index.vue')
  },
  {
    path: '/user',
    component:  () => import('./../pages/user.vue')
  }
]