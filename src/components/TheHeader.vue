<template>
  <header>
    <ul class="menu">
      <li><a title="asdf" href="/rules">Rules</a></li>
      <li><a title="asdf" href="/tags">Wtf layout</a></li>
      <li><a title="asdf" href="/about">About</a></li>
    </ul>
  </header>
</template>

<style>
  ul.menu {
    list-style: none;
    right: 500px;
    list-style-type: none;
  }

  ul.menu li {
    display: inline;
    padding: 2px 10px;
    margin: 1px 3px;
    width: 110px;
    -moz-border-radius: 1em;
    border-radius: 1em;
    border: 1px solid rgba(52, 226, 177, 1.0);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    margin-bottom: 0.5ex;
    -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
    -webkit-box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
    box-shadow: 0 0 10px rgba(52, 226, 177, 0.5);
    cursor: pointer;
  }

  ul.menu li:hover {
    color: rgb(52, 226, 177);
    border-color: rgb(52, 226, 177);
    -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 1.0);
    -moz-box-shadow: 0 0 10px rgba(52, 226, 177, 0.9);
    text-shadow: 0 0 5px rgba(52, 226, 177, 1.0);
    cursor: pointer;
  }

  ul.menu li:hover a {
    color: rgb(52, 226, 177);
    text-shadow: 0 0 5px rgba(52, 226, 177, 1.0);
    cursor: pointer;
  }

  ul.menu li a {
    cursor: pointer;
    text-decoration: none;
    color: rgba(52, 226, 177, 1.0);
  }

  ul.menu a:hover,
  ul.menu a:active,
  ul.menu a:visited:hover,
  ul.menu a:active:hover {
    text-decoration: none;
    cursor: pointer;
  }

  ul.menu li.menu_break {
    height: 10px;
    visibility: hidden;
  }
</style>

<script>
export default {
  name: 'TheHeader'
};
</script>
