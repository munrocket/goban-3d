import Vue from 'vue';
import Router from 'vue-router';

import Players from './views/Players.vue';
import Games from './views/Games.vue';
import About from './views/About.vue';
import Chat from './views/Chat.vue';
import Login from './views/Login.vue';
import PvP from './views/PvP.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    { path: '/', redirect: '/players' },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      function() {
        return import(/* webpackChunkName: "chat" */ './views/Chat.vue');
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pvp',
      name: 'PvP',
      component: PvP,
      function() {
        return import(/* webpackChunkName: "pvp" */ './views/PvP.vue');
      }
    },
  ]
});
