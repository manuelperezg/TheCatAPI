import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from './plugins/vuetify';
import Argon from "./plugins/argon-kit";
import store from './store/index';
import './registerServiceWorker';

import VueLazyload from 'vue-lazyload'


// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/img/cat_error.gif'),
  loading: require('@/assets/img/cat_loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
