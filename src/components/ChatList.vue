<template>
  <div>
    <h1 class="title">
      Chat
    </h1>
    <div>
      <p v-for="msg in messages" :key="msg.id" :ref="'msg_'.concat(msg.id)">
        <span class="has-text-weight-semibold">
          {{ msg.player }}:
        </span> {{ msg.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatList',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>
