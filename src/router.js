import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Counter from './components/Counter.vue'


const CategoryView = () => import(/* webpackChunkName: "item" */ '@/views/CategoryView.vue');
const PostView = () => import(/* webpackChunkName: "item" */ '@/views/PostView.vue');

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
      path: '/counter',
      component: Counter,
      name: 'counter',
    },
    {
      path: '/blog/:key',
      name: 'category',
      component: CategoryView,
      children: [
        {
          path: ':keypost',
          name : 'post',
          component: PostView
        }
      ]
    },
  ]
})



