import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faGamepad, faCommentDots, faInfoCircle, faEye }
  from '@fortawesome/free-solid-svg-icons';
import './assets/styles.css';

Vue.config.productionTip = false;console.log();

// axios
Vue.prototype.axios = axios;

// fontawesome
library.add(faUsers, faGamepad, faCommentDots, faInfoCircle, faEye);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// authenticate
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

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
