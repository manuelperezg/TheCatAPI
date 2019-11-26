import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import store from './store/index'

import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
