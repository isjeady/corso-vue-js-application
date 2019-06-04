import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
import it from './it.js';


const i18n = new VueI18n({
  locale: 'it',
  messages: {
    'it': it
  }
});

// Hot updates
if (module.hot) {
    module.hot.accept(['./it'], function () {
      i18n.setLocaleMessage('it', require('./it').default)
      // Or the following hot updates via $i18n property
      // app.$i18n.setLocaleMessage('en', require('./en').default)
    })
}

export default i18n
