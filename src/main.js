import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('dot-description',function(value){
    return value.length > 10 ? value.substring(0,10) + '...' : value;
});

Vue.mixin({
  created(){
    console.log('1-Created by Global');
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
