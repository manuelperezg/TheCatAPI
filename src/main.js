import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from './plugins/vuetify';
import Argon from "./plugins/argon-kit";
import store from './store/index';
import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
