import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta:{
      layout: 'DashboardLayout'
    },
    children: [
      {
        path: 'ch1',
        component: () => import('../components/Ch1')
      },
      {
        path: 'ch2',
        component: () => import('../components/Ch2')
      }
    ]
  },
  {
    path:'/test',
    name: 'Test',
    component: () => import('../views/Test')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
