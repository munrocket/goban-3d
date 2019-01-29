<template>
  <list-wrapper>
    <GamesList :games="games" />
  </list-wrapper>
</template>

<script>
import GamesList from '../components/GamesList.vue';
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'Games',
  components: {
    GamesList,
    ListWrapper
  },
  data() {
    return {
      games: [
        { gameId: '1', id1: 'player1', id2: 'anon', move: 54, modelType: 'torus' },
        { gameId: '2', id1: 'Kid125', id2: 'CyberIO', move: 124, modelType: 'klein bottle' },
        { gameId: '3', id1: 'player1', id2: 'anon', move: 54, modelType: 'torus' },
        { gameId: '4', id1: 'Kid125', id2: 'CyberIO', move: 124, modelType: 'klein bottle' },
        { gameId: '5', id1: 'player1', id2: 'anon', move: 54, modelType: 'torus' },
        { gameId: '6', id1: 'Kid125', id2: 'CyberIO', move: 124, modelType: 'klein bottle' },
        { gameId: '7', id1: 'player1', id2: 'anon', move: 54, modelType: 'torus' },
      ]
    };
  }
};
</script>
