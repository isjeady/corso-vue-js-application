import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('evidenzia',{
    bind(el,binding,vnode){
      if(binding.arg == 'sfondo'){
        if(binding.modifiers['bigfont']){
          el.style.fontSize = '80px';
        }
        if(binding.modifiers['pad']){
          el.style.padding = '25px';
        }
        el.style.backgroundColor = binding.value;
      }else{
        el.style.color = binding.value;
      }
      
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
