<template>
  <list-wrapper>
    <PlayersList :players="players" />
  </list-wrapper>
</template>

<script>
import PlayersList from '../components/PlayersList.vue';
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'Players',
  components: {
    PlayersList,
    ListWrapper
  },
  data() {
    return {
      players: [
        { id: 'wassup_player', win: 19, loss: 1, status: 0 },
        { id: 'who_are_here', win: 1, loss: 9, status: 0 },
        { id: 'i_am_just_watching', win: 0, loss: 0, status: 1 },
        { id: 'i_am_busy', win: 0, loss: 0, status: 10 },
        { id: 'wassup_player', win: 19, loss: 1, status: 0 },
        { id: 'who_are_here', win: 1, loss: 9, status: 0 },
        { id: 'i_am_just_watching', win: 0, loss: 0, status: 1 },
        { id: 'i_am_busy', win: 0, loss: 0, status: 10 },
        { id: 'wassup_player', win: 19, loss: 1, status: 0 },
        { id: 'who_are_here', win: 1, loss: 9, status: 0 },
        { id: 'i_am_just_watching', win: 0, loss: 0, status: 1 },
        { id: 'i_am_busy', win: 0, loss: 0, status: 10 },
        { id: 'wassup_player', win: 19, loss: 1, status: 0 },
      ]
    };
  }
};
</script>
