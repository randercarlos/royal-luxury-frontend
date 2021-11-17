import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 2000,
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
