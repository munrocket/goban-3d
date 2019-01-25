<template>
  <div class="content-page">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "ListWrapper"
};
</script>

<style>
.content-page {
  cursor: default;
  background-color: black;
  font-size: 13px;
  line-height: 21px;
  margin: 20px 0;
  width: 500px;
  padding: 25px 55px;
  border: 1px solid rgba(52, 226, 177, 1);

  -moz-border-radius: 15px;
  border-radius: 15px;

  -moz-box-shadow: 0 0 20px rgba(52, 226, 177, 1);
  -webkit-box-shadow: 0 0 20px rgba(52, 226, 177, 1);
  box-shadow: 0 0 20px rgba(52, 226, 177, 1);
}

.content-page a {
  color: rgb(52, 226, 177);
  text-shadow: 0 0 5px rgba(52, 226, 177, 1);
  cursor: pointer;
}

.content-page h1 {
  margin: 0.8em 0 0 0;
  font-size: 1.7em;
  text-align: center;
  font-weight: bold;
  padding: 0.5em;
  border: 1px solid rgba(36, 198, 24, 1);
  margin-bottom: 1ex;
  font-family: "Bitstream Vera Sans Mono", monospace;

  -moz-border-radius: 1em;
  border-radius: 1em;
  background-color: rgba(52, 226, 177, 1);
  color: black;

  -moz-box-shadow: 0 0 8px rgba(52, 226, 177, 1);
  -webkit-box-shadow: 0 0 8px rgba(52, 226, 177, 1);
  box-shadow: 0 0 8px rgba(52, 226, 177, 1);
}

.content-page blockquote {
  width: 400px;
  font-size: 1.3em;
  text-indent: 0.5em;
  padding: 10px 30px 10px;
  margin: 0.3em auto;

  -moz-border-radius: 1em;
  border-radius: 1em;

  border: 2px solid rgba(52, 226, 177, 1);
  -moz-box-shadow: 0 0 5px rgba(52, 226, 177, 1);
  -webkit-box-shadow: 0 0 5px rgba(52, 226, 177, 1);
  box-shadow: 0 0 5px rgba(52, 226, 177, 1);
}

.content-page code {
  font-family: "Bitstream Vera Sans Mono", monospace;
  font-style: normal;
  color: rgba(39, 215, 243, 1);
  text-shadow: 0 0 5px rgba(39, 215, 243, 1);
}

.content-page blockquote a {
  font-size: 0.85em;
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
  margin: 0.5em 0 0.5em;
  font-size: 13px;
  line-height: 17px;
  font-family: "Bitstream Vera Sans Mono", monospace;
}
</style>
