/* eslint-disable no-new,no-undef */
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from 'routes'

Vue.use(VueResource)
Vue.http.options.root = 'https://photographer-project.firebaseio.com/data.json'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 0}
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
