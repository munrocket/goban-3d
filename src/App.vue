<template>
  <section id="app" class="section container">
    <div class="columns row-reverse">
      <div id="login">
        <router-link v-if="store.myId == null" to="/login" class="button is-rounded">
          <span class="icon is-small">
            <font-awesome-icon icon="sign-in-alt" />
          </span>
          <span>Login</span>
        </router-link>
        <button v-else class="button is-rounded is-danger" @click="logout()">
          <span class="icon is-small">
            <font-awesome-icon icon="sign-in-alt" />
          </span>
          <span>{{ store.myId }} Logout</span>
        </button>
      </div>
      <div class="column is-half">
        <canvas-renderer />
      </div>
      <div class="column">
        <div class="tabs is-toggle is-toggle-rounded">
          <ul>
            <router-link
              v-for="item in menu"
              :key="item.url"
              :to="item.url"
              tag="li"
            >
              <a>
                <span class="icon is-small">
                  <font-awesome-icon :icon="item.icon" />
                </span>
                <span>{{ item.name }}</span>
              </a>
            </router-link>
          </ul>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import CanvasRenderer from './components/CanvasRenderer.vue';
import store from './utils/store.js';
import router from './router.js';
import axios from './utils/axios.js';
import io from './utils/socket.js';

export default {
  name: 'App',
  components: {
    CanvasRenderer
  },
  data() {
    return {
      showLogin: true,
      menu: [
        { url: '/players', name: 'Players', icon: 'users' },
        { url: '/games', name: 'Games', icon: 'gamepad' },
        { url: '/chat', name: 'Chat', icon: 'comment-dots' },
        { url: '/about', name: 'About', icon: 'info-circle' },
      ],
      store
    };
  },
  methods: {
    logout() {
      axios.get('auth/logout').then(resp => {
        console.log(store.myId, 'is logout.');
        store.myId = null;
      }).catch(err => {console.log(err)});
    },
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/sass/utilities/_all.sass";
@import "../node_modules/bulma/sass/elements/button.sass";

.row-reverse {
  flex-direction: row-reverse;
}
#login {
  position: absolute;
  padding: .75rem;
}
#login .button {
  height: auto;
  padding: 0.5em 1.5em;
}
#login .is-active {
  @extend .is-link;
}
</style>
