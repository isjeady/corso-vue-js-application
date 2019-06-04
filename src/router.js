import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DragAdvanced from './components/DragAdvanced.vue'
import DragSample from './components/DragSample.vue'

Vue.use(Router)

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
      path: '/dragsample',
      component: DragSample,
      name: 'dragsample',
    },
    {
      path: '/dragadvanced',
      component: DragAdvanced,
      name: 'dragadvanced',
    },
  ]
})
