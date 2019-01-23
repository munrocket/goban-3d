<template>
  <div class="games">
    <GamesList :games="games"/>
  </div>
</template>

<script>
import GamesList from "@/components/GamesList.vue";

export default {
  name: "games",
  components: {
    GamesList
  },
  data() {
    return {
      games: [
        { id1: "player1", id2: "anon", move: 54, modelType: "torus" },
        { id1: "Kid125", id2: "CyberIO", move: 124, modelType: "klein bottle" }
      ]
    };
  }
};
</script>

<style>
</style>