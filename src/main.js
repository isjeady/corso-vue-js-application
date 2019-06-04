import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import FlagIcon from 'vue-flag-icon'
Vue.use(FlagIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
