<template>
  <section id="app" class="section container">
    <div class="columns row-reverse">
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
import CanvasRenderer from '@/components/CanvasRenderer.vue';

export default {
  name: 'App',
  components: {
    CanvasRenderer
  },
  data() {
    return {
      menu: [
        { url: '/players', name: 'Players', icon: 'users' },
        { url: '/games', name: 'Games', icon: 'gamepad' },
        { url: '/chat', name: 'Chat', icon: 'comment-dots' },
        { url: '/about', name: 'About', icon: 'info-circle' },
      ]
    };
  }
}
</script>

<style lang="scss">
.row-reverse {
  flex-direction: row-reverse;
}
</style>
