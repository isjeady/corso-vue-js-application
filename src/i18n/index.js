import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
import it from './it.js';
import en from './en.js';
import dateTimeFormats from './dateTimeFormats.js';


const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale : 'en',
  dateTimeFormats,
  messages: {
    'it': it,
    'en': en
  }
});

// Hot updates
if (module.hot) {
    module.hot.accept(['./it','./en'], function () {
      i18n.setLocaleMessage('it', require('./it').default)
      i18n.setLocaleMessage('en', require('./en').default)
      // Or the following hot updates via $i18n property
      // app.$i18n.setLocaleMessage('en', require('./en').default)
    })
}

export default i18n
