<template>
  <div id="app">
    <div id="nav">
      <ul class="menu">
        <li><router-link to="/players">Players</router-link></li>
        <li><router-link to="/games">Games</router-link></li>
        <li><router-link to="/chat">Chat</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <router-view/>
    <canvas-renderer/>
  </div>
</template>

<script>
import CanvasRenderer from "@/components/CanvasRenderer.vue";

export default {
  name: "App",
  components: {
    CanvasRenderer
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  cursor: crosshair;
  min-height: 100%;
  display: block;
  background: black;
  background-image: url("./assets/city.jpg");
  background-position: bottom;
  background-repeat: repeat-x;
  color: rgba(52, 226, 177, 1);
  font-family: "Bitstream Vera Sans Mono", monospace;
}

ul.menu {
  list-style: none;
  right: 500px;
  list-style-type: none;
}

ul.menu li {
  display: inline;
  padding: 2px 10px;
  margin: 1px 3px;
  -moz-border-radius: 1em;
  border-radius: 1em;
  border: 1px solid rgba(52, 226, 177, 1);
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
  -webkit-box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
  box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
  cursor: pointer;
}

ul.menu li:hover {
  color: rgb(52, 226, 177);
  border-color: rgb(52, 226, 177);
  box-shadow: 0 0 10px rgba(52, 226, 177, 1);
  -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 1);
  text-shadow: 0 0 5px rgba(52, 226, 177, 1);
  cursor: pointer;
}

ul.menu li:hover a {
  color: rgb(52, 226, 177);
  text-shadow: 0 0 5px rgba(52, 226, 177, 1);
  cursor: pointer;
}

ul.menu li a {
  cursor: pointer;
  text-decoration: none;
  color: rgba(52, 226, 177, 1);
}

ul.menu a:hover,
ul.menu a:active,
ul.menu a:visited:hover,
ul.menu a:active:hover {
  text-decoration: none;
  cursor: pointer;
}

ul.menu li.menu_break {
  height: 10px;
  visibility: hidden;
}
</style>
