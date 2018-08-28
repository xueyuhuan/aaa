import "babel-polyfill";
import Vue from "vue";
import ElementUI from 'element-ui';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './axios';
import url from './url';

import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$ajax=axios;
Vue.prototype.$url=url;

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
