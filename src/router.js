import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Counter from './components/Counter.vue'
import Register from './components/auth/Register.vue'
import Login from './components/auth/Login.vue'
import Dashboard from './components/auth/Dashboard.vue'

import store from './store';

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
      path: '/register',
      component: Register,
      name: 'register',
      beforeEnter (to,from,next){
        if(store.getters.isAuth){
          next('/dashboard');
        }
      }
    },
    {
      path: '/login',
      component: Login,
      name: 'login',
      beforeEnter (to,from,next){
        if(store.getters.isAuth){
          next('/dashboard');
        }
      }
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'dashboard',
      beforeEnter (to,from,next){
        if(store.getters.isAuth){
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
