import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Counter from './components/Counter.vue'
import ToDo from './components/ToDo.vue'
import Coupon from './components/Coupon.vue'

Vue.use(Router)

function dynamicPropsFn (route) {
  return {
    title: route.params.title,
    body: route.params.body
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/counter',
      component: Counter,
      name: 'counter',
    },
    {
      path: '/todo',
      component: ToDo,
      name: 'todo',
    },
    {
      path: '/coupon',
      component: Coupon,
      name: 'coupon',
    }
  ]
})
