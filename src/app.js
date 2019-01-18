import Vue from 'vue';
import App from './App.vue';
//import THREE from 'three';
//Object.defineProperty(Vue.prototype, '$three', { value: THREE });

const app = new Vue({
  render: h => h(App)
});

//console.log(THREE);

export { app };
