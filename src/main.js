// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './components/router'

import App from './App'
// import Right from './components/Right'
// import Sidebar from './components/Sidebar'

// Vue.use(VueRouter)
//
// const routes = [
//   { path: '/foo', component: Right },
//   // { path: '/bar', component: Bar }
// ]
// const router = new VueRouter({
//   routes // short for routes: routes
// })
/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  render: h => h(App)
}).$mount('#app')
