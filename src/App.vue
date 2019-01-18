<template>
  <div id="app" class="layout">
    <header>
      <the-header />
    </header>
    <main class="content">
      <the-main />
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: { TheHeader, TheMain },
  created() {
  }
};
</script>

<style>
  * {
    cursor: crosshair;
  }
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    display: block;
    background: black;
    background-image: url('src/assets/city.jpg');
    background-position: bottom;
    background-repeat: repeat-x;
    color: rgba(52, 226, 177, 1.0);
    font-family: "Bitstream Vera Sans Mono", monospace;
  }
</style>
