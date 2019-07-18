import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios';


//axios.defaults.baseURL = 'https://vue-js-advance-course.firebaseio.com';
//axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
