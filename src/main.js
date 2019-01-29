import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './assets/styles/custom-bulma.css';

Vue.config.productionTip = false;

// import VueAuthenticate from 'vue-authenticate';
// Vue.use(VueAuthenticate, {
//   baseUrl: 'http://localhost:3000',
//   providers: {
//     github: {
//       clientId: '',
//       redirectUri: 'http://localhost:8080/auth/callback'
//     }
//   }
// });

Vue.prototype.axios = axios;
new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
