<template>
  <div>
    <h1>Games</h1>
    <ul>
      <li v-for="game in games" :key="game.gameId" :ref="'game_'.concat(game.gameId)">
        {{ game.id1 }} vs {{ game.id2 }} ({{game.move}}, {{game.modelType}})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GamesList",
  props: {
    games: {
      type: Object,
      required: true
    }
  }
};
</script>
