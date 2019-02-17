import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./views/info.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/work.vue')
    },
    {
      path: '/production',
      name: 'production',
      component: () => import('./views/production.vue')
    }
  ]
})
