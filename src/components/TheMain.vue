<template>
  <main>
    <div class="content-page">
      <h1>Play</h1>
      <p>This is an abstract strategy 3d board game for two players, in which the aim is to surround more territory than the opponent.</p>
      <blockquote>
        <h2>Active games:</h2>
        <ul>
          <li>Player1 vs Anon &nbsp; &nbsp; (move ~54, torus)</li>
          <li>Kid125 vs CyberIO &nbsp; (move ~10, klein bottle)</li>
        </ul>
      </blockquote>
      <blockquote>
        <h2>Lobby:</h2>
        <ul>
          <li>wassap_player</li>
          <li>who_are_here</li>
          <li>i_am_just_wathing</li>
          <li>fuck_off</li>
        </ul>
      </blockquote>
    </div>
  </main>
</template>

<style>
  main {
    margin: 20px
  }
  .content-page {
    font-size: 13px;
    line-height: 21px;
    margin: 20px 0;
    width: 500px;
    padding: 25px 55px;
    border: 1px solid rgba(21, 171, 195, 1.0);

    -moz-border-radius: 15px;
    border-radius: 15px;

    -moz-box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);
    -webkit-box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);
    box-shadow: 0 0 9px rgba(21, 171, 195, 1.0);
  }

  .content-page a {
    color: rgb(36, 198, 224);
    text-shadow: 0 0 5px rgba(36, 198, 224, 1.0);
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
    background-color: rgba(36, 198, 224, 1.0);
    color: black;

    -moz-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);
    -webkit-box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);
    box-shadow: 0 0 10px rgba(36, 198, 224, 1.0);
  }

  .content-page blockquote {
    width: 400px;
    font-size: 1.3em;
    text-indent: .5em;
    padding: 10px 30px 10px;
    margin: .3em auto;

    -moz-border-radius: 1em;
    border-radius: 1em;

    border: 2px solid rgba(21, 171, 195, 1.0);
    -moz-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);
    -webkit-box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);
    box-shadow: 0 0 5px rgba(21, 171, 195, 1.0);
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

<script>
export default {
  name: 'AppBody'
};
</script>
