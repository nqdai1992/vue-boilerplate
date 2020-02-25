import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';

import './plugins/dialog'
import './plugins/snackbar'

Vue.config.productionTip = false

let v = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default v
