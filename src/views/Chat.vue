<template>
  <list-wrapper>
    <ChatList :messages="messages" />
  </list-wrapper>
</template>

<script>
import ChatList from '../components/ChatList.vue';
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'Chat',
  components: {
    ChatList,
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
