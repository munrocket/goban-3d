<template>
  <div>
    <h1 class="title">
      Players
    </h1>
    <table class="table is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>name</th>
          <th>win rate</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>
            {{ player.id }}
          </td>
          <td class="has-text-centered">
            {{ player.win }}/{{ player.win + player.loss }}
          </td>
          <td class="has-text-centered">
            <i v-if="player.status == 0" />
            <i v-else-if="player.status == 1" class="fas fa-eye" />
            <i v-else class="fas fa-gamepad" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PlayersList',
  props: {
    players: {
      type: Array,
      required: true
    }
  }
};
</script>
