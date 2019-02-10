import Vue from 'vue';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;console.log();

// axios
import axios from 'axios';
Vue.prototype.axios = axios.create({ withCredentials: true, baseURL: 'http://localhost:3000/'});

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faGamepad, faCommentDots, faInfoCircle, faEye, faSignInAlt }
  from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import './assets/styles.css';
library.add(faUsers, faGamepad, faCommentDots, faInfoCircle, faEye, faSignInAlt, faFacebook, faTwitter, faGoogle, faGithub);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
