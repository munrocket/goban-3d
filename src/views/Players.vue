<template>
  <div class="players content-page">
    <PlayersList :players="players"/>
  </div>
</template>

<script>
import PlayersList from "@/components/PlayersList.vue";

export default {
  name: "players",
  components: {
    PlayersList
  },
  data() {
    return {
      players: [
        { id: "wassup_player", win: 19, loss: 1, status: 0 },
        { id: "who_are_here", win: 1, loss: 9, status: 0 },
        { id: "i_am_just_watching", win: 0, loss: 0, status: 1 },
        { id: "i_am_busy", win: 0, loss: 0, status: 10 }
      ]
    };
  }
};
</script>

<style>
  .content-page {
    background-color: black;
    font-size: 13px;
    line-height: 21px;
    margin: 20px 0;
    width: 500px;
    padding: 25px 55px;
    border: 1px solid rgba(52, 226, 177, 1.0);

    -moz-border-radius: 15px;
    border-radius: 15px;

    -moz-box-shadow: 0 0 20px rgba(52, 226, 177, 1.0);
    -webkit-box-shadow: 0 0 20px rgba(52, 226, 177, 1.0);
    box-shadow: 0 0 20px rgba(52, 226, 177, 1.0);
  }

  .content-page a {
    color: rgb(52, 226, 177);
    text-shadow: 0 0 5px rgba(52, 226, 177, 1.0);
    cursor: pointer;
  }

  .content-page h1 {
    margin: .8em 0 0 0;
    font-size: 1.7em;
    text-align: center;
    font-weight: bold;
    padding: .5em;
    border: 1px solid rgba(36, 198, 24, 1.0);
    margin-bottom: 1ex;
    font-family: "Bitstream Vera Sans Mono", monospace;

    -moz-border-radius: 1em;
    border-radius: 1em;
    background-color: rgba(52, 226, 177, 1.0);
    color: black;

    -moz-box-shadow: 0 0 8px rgba(52, 226, 177, 1.0);
    -webkit-box-shadow: 0 0 8px rgba(52, 226, 177, 1.0);
    box-shadow: 0 0 8px rgba(52, 226, 177, 1.0);
  }

  .content-page blockquote {
    width: 400px;
    font-size: 1.3em;
    text-indent: .5em;
    padding: 10px 30px 10px;
    margin: .3em auto;

    -moz-border-radius: 1em;
    border-radius: 1em;

    border: 2px solid rgba(52, 226, 177, 1.0);
    -moz-box-shadow: 0 0 5px rgba(52, 226, 177, 1.0);
    -webkit-box-shadow: 0 0 5px rgba(52, 226, 177, 1.0);
    box-shadow: 0 0 5px rgba(52, 226, 177, 1.0);
  }

  .content-page code {
    font-family: "Bitstream Vera Sans Mono", monospace;
    font-style: normal;
    color: rgba(39, 215, 243, 1.0);
    text-shadow: 0 0 5px rgba(39, 215, 243, 1.0);
  }

  .content-page blockquote a {
    font-size: .85em;
  }

  .content-page ul {
    list-style-type: none;
    padding-left: 1ex;
  }

  .content-page ul li {
    background-repeat: no-repeat;
    background-position: 0 2px;
  }

  .content-page ol {
    list-style: decimal inside;
    padding-left: 1ex;
  }

  .content-page ol li {
    list-style: decimal inside;
    display: list-item;
  }

  /* shared styles for ul and ol items */
  .content-page li {
    margin: 0.5em 0 .5em;
    font-size: 13px;
    line-height: 17px;
    font-family: "Bitstream Vera Sans Mono", monospace;
  }
</style>