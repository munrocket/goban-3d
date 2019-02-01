<template>
  <list-wrapper title="Players">
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
            <span v-if="player.status == 0" />
            <font-awesome-icon v-else-if="player.status == 1" icon="eye" /> 
            <font-awesome-icon v-else icon="gamepad" /> 
          </td>
        </tr>
      </tbody>
    </table>
  </list-wrapper>
</template>

<script>
import ListWrapper from '../components/ListWrapper.vue';

export default {
  name: 'Players',
  components: {
    ListWrapper
  },
  data() {
    return {
      players: [
        { id: 'wassup_player', win: 19, loss: 1, status: 0 },
        { id: 'who_are_here', win: 1, loss: 9, status: 0 },
        { id: 'i_am_just_watching', win: 0, loss: 0, status: 1 },
        { id: 'i_am_busy', win: 0, loss: 0, status: 10 },
        { id: 'wassup_player1', win: 19, loss: 1, status: 0 },
        { id: 'who_are_here1', win: 1, loss: 9, status: 0 },
        { id: 'i_am_just_watching1', win: 0, loss: 0, status: 1 },
        { id: 'i_am_busy1', win: 0, loss: 0, status: 10 },
        { id: 'wassup_player2', win: 19, loss: 1, status: 0 },
        { id: 'who_are_here2', win: 1, loss: 9, status: 0 },
        { id: 'i_am_just_watching2', win: 0, loss: 0, status: 1 },
        { id: 'i_am_busy2', win: 0, loss: 0, status: 10 },
        { id: 'wassup_player3', win: 19, loss: 1, status: 0 },
      ]
    };
  }
};
</script>
