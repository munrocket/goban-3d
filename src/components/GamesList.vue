<template>
  <div>
    <h1 class="title">
      Games
    </h1>
    <table class="table is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>players</th>
          <th>move</th>
          <th>model type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in games" :key="game.gameId" :ref="'game_'.concat(game.gameId)">
          <td>{{ game.id1 }} vs {{ game.id2 }}</td>
          <td>{{ game.move }}</td>
          <td>{{ game.modelType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GamesList',
  props: {
    games: {
      type: Array,
      required: true
    }
  }
};
</script>
