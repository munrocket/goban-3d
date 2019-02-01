<template>
  <list-wrapper title="About">
    <p>
      This is an abstract strategy 3d board game for two players,
      in which the aim is to surround more territory than the opponent.
    </p>
    <br>
    <p>Frontend by Munrocket</p>
    <p>Backend by Gleb-Kulchitskiy</p>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'About',
  components: {
    ListWrapper
  }
};
</script>
