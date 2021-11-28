import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

axios.defaults.baseURL = '/api';
 
// Cookieを有効にする。
axios.defaults.withCredentials = true;

Vue.use(Vuetify)

new Vue({
  router,
  store,
  axios,
  vuetify : new Vuetify(),
  render: h => h(App)
}).$mount('#app')
