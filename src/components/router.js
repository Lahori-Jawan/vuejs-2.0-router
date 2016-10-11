
import Vue from 'vue'
import VueRouter from 'vue-router'

import Right from './Right'
import Customers from './Customers'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Right },
  { path: '/customers', component: Customers }
]
const router = new VueRouter({
  routes // short for routes: routes
})

export default router
