<template>
  <div id="app" class="layout">
    <header>
      <the-header />
    </header>
    <div class="body">
      <main class="content">
        <the-main />
      </main>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';

export default {
  name: 'App',
  components: { TheHeader, TheMain }
};
</script>

<style>
  * {
    cursor: crosshair;
  }

  body {
    display: block;
    background: black;
    color: rgba(21, 171, 195, 1.0);
    font-family: "Bitstream Vera Sans Mono", monospace;
    /* give all text a cold glow */
    text-shadow: 0 0 5px rgba(103, 166, 175, 0.7);
  }
</style>
