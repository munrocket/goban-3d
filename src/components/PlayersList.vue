<template>
  <div>
    <h1>Players</h1>
    <ul>
      <li v-for="player in players" :key="player.id">
        {{ player.id }} (winrate: {{player.win}}/{{player.win + player.loss}}, avalible:{{ !player.status}})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlayersList",
  props: ["players"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
