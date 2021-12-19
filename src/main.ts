import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// @ts-ignore
import dataV from '@jiaminghi/data-view';
import './element-variables.scss';
Vue.config.productionTip = false;

Vue.use(dataV);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
