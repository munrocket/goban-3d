<template>
  <list-wrapper>
    <GamesList :games="games"/>
  </list-wrapper>
</template>

<script>
import GamesList from "@/components/GamesList.vue";
import ListWrapper from "@/components/ListWrapper.vue";

export default {
  name: "Games",
  components: {
    GamesList,
    ListWrapper
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
