<template>
  <list-wrapper title="Games">
    <table class="table is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>players</th>
          <th class="has-text-centered">
            move
          </th>
          <th class="has-text-centered">
            model type
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.gameId" :ref="'game_'.concat(game.gameId)">
          <td>{{ game.id1 }} vs {{ game.id2 }}</td>
          <td class="has-text-centered">
            {{ game.move }}
          </td>
          <td class="has-text-centered">
            {{ game.modelType }}
          </td>
        </tr>
      </tbody>
    </table>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'Games',
  components: {
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
