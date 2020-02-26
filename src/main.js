import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import clientStorage from "localforage"

import './plugins/dialog'
import './plugins/snackbar'

Vue.config.productionTip = false
let seedDB = [...Array(100).keys()].map((element, index) => {
  return {
    productId: index,
    productName: `Product ${index + 1}`,
    productTypeId: {id: 1,
      label: "Simple",
      value: "simple"},
      status: true,
      price: "123",
      priceCost: "123",
      unitId: 1
  }
});
clientStorage.getItem("products")
.then(value => {
  console.log(value)
  if (!value) {
    clientStorage.setItem("products", seedDB)
  }
})

let v = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default v
