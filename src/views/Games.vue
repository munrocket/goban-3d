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
          <td>{{ game.white }} vs {{ game.black }}</td>
          <td class="has-text-centered">
            {{ game.move }}
          </td>
          <td class="has-text-centered">
            {{ game.type }}
          </td>
        </tr>
      </tbody>
    </table>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';
import axios from '../utils/axios.js';

export default {
  name: 'Games',
  components: {
    ListWrapper
  },
  data() {
    return {
      games: []
    };
  },
  mounted() {
    axios.get('getGames').then( games => {
      this.games = games;
    }).catch( err => { console.log('games not fetched: ', err) });
  }
};
</script>
