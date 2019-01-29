<template>
  <section id="app" class="section container">
    <div class="columns">
      <div class="column is-half">
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
                  <i :class="item.icon" />
                </span>
                <span>{{ item.name }}</span>
              </a>
            </router-link>
          </ul>
        </div>
        <router-view />
      </div>
      <div class="column">
        <canvas-renderer />
      </div>
    </div>
  </section>
</template>

<script>
import CanvasRenderer from '@/components/CanvasRenderer.vue';

export default {
  name: 'App',
  components: {
    CanvasRenderer
  },
  data() {
    return {
      menu: [
        { url: '/players', name: 'Players', icon: 'fas fa-users' },
        { url: '/games', name: 'Games', icon: 'fas fa-gamepad' },
        { url: '/chat', name: 'Chat', icon: 'fas fa-comments' },
        { url: '/about', name: 'About', icon: 'fas fa-info-circle' },
      ]
    };
  }
}
</script>

<style lang="scss">
// html {
//   height: 100%;
// }
// body {
//   min-height: 100%;
//   display: block;
//   background: black;
//   background-image: url("./assets/city.jpg");
//   background-position: bottom;
//   background-repeat: repeat-x;
//   color: rgba(52, 226, 177, 1);
//   font-family: "Bitstream Vera Sans Mono", monospace;
// }

// ul.menu {
//   list-style: none;
//   right: 500px;
//   list-style-type: none;
// }

// ul.menu li {
//   display: inline;
//   padding: 2px 10px;
//   margin: 1px 3px;
//   -moz-border-radius: 1em;
//   border-radius: 1em;
//   border: 1px solid rgba(52, 226, 177, 1);
//   text-align: center;
//   background-color: rgba(0, 0, 0, 0.7);
//   -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
//   -webkit-box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
//   box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
//   cursor: pointer;
// }

// ul.menu li:hover {
//   color: rgb(52, 226, 177);
//   border-color: rgb(52, 226, 177);
//   box-shadow: 0 0 10px rgba(52, 226, 177, 1);
//   -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 1);
//   text-shadow: 0 0 5px rgba(52, 226, 177, 1);
//   cursor: pointer;
// }

// ul.menu li:hover a {
//   color: rgb(52, 226, 177);
//   text-shadow: 0 0 5px rgba(52, 226, 177, 1);
//   cursor: pointer;
// }

// ul.menu li a {
//   cursor: pointer;
//   text-decoration: none;
//   color: rgba(52, 226, 177, 1);
// }

// ul.menu a:hover,
// ul.menu a:active,
// ul.menu a:visited:hover,
// ul.menu a:active:hover {
//   text-decoration: none;
//   cursor: pointer;
// }

// ul.menu li.menu_break {
//   height: 10px;
//   visibility: hidden;
// }
</style>
