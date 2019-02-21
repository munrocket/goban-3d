<template>
  <list-wrapper title="This is PVP">
    <p v-for="msg in messages" :key="msg.id" :ref="'msg_'.concat(msg.id)">
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
import store from '../utils/store.js';

export default {
  name: 'PvP',
  components: {
    ListWrapper
  },
  computed: {
    title() {
      return 'PVP:' + store.myId + '-' + store.opponentId;
    }
  },
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    io.emit('join', { roomName:'pvp' }, cb => { console.log(cb)});
  },
  methods: {
    sendMsg() {
      io.emit('pvp', { roomName:'pvp', message: 'test'});
    }
  }
};
</script>
