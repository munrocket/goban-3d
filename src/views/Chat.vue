<template>
  <list-wrapper title="Chat">
    <p v-for="(msg, id) in messages" :key="id" :ref="'msg_'.concat(id)">
      <span class="has-text-weight-semibold">
        {{ msg.player }}:
      </span> {{ msg.text }}
    </p>
    <button class="button is-primary" @click="sendMsg()">Send</button>
    <div class="new-msg">
      <input id="new-msg" class="input" type="text" placeholder="type message here.." required>
    </div>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';
import io from '../utils/socket.js';

export default {
  name: 'Chat',
  components: {
    ListWrapper
  },
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    io.on('onInvite', (id, cb) => {
      store.opponentId = id;
      cb(null, {assept: true});
    });

    io.on('newGame', game => {
      if (store.opponentId) {
        router.push({ name: 'PvP' /*, params: { game } */ });
      }
    });

    io.on('message', data => {
      if (data.roomName == 'global') {
        this.messages.push({ player: data.userId, text: data.message });
      }
    });
  },
  methods: {
    sendMsg() {
      io.emit('global', { roomName:'global', message: document.getElementById('new-msg').value });
    }
  }
};
</script>

<style scoped>
  #new-msg {
    width: 100%;
  }
  .new-msg {
    overflow: hidden;
    padding-right: .5em;
  }
</style>
