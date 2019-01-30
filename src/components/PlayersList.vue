<template>
  <div>
    <h1 class="title">
      Players
    </h1>
    <table class="table is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>name</th>
          <th class="has-text-centered">
            win rate
          </th>
          <th class="has-text-centered">
            status
          </th>
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
            <font-awesome-icon v-if="player.status == 0" />
            <font-awesome-icon v-else-if="player.status == 1" icon="eye" /> 
            <font-awesome-icon v-else icon="gamepad" /> 
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
