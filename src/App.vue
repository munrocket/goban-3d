<template>
  <div id="app" class="layout">
    <header>
      <app-header title="3d go" />
    </header>
    <div class="body">
      <main class="content">
        <app-body />
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';

export default {
  name: 'App',
  components: { AppHeader, AppBody }
};
</script>
