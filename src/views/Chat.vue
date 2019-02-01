<template>
  <list-wrapper title="Chat">
    <p v-for="msg in messages" :key="msg.id" :ref="'msg_'.concat(msg.id)">
      <span class="has-text-weight-semibold">
        {{ msg.player }}:
      </span> {{ msg.text }}
    </p>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'Chat',
  components: {
    ListWrapper
  },
  data() {
    return {
      messages: [
        { id: '1', player: 'wassup_player', text: 'hey hey' },
        { id: '2', player: 'who_are_here', text: 'hi!' },
        { id: '3', player: 'wassup_player', text: 'this is really cool' },
        { id: '4', player: 'who_are_here', text: 'yep, i love it too' }
      ]
    }
  }
};
</script>
