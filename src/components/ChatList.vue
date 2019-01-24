<template>
  <div>
    <h1>Chat</h1>
    <p>fish fish fish</p>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  watch: {
    fish: function() {
      let result;
      this.axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
          this.fish = response;
        });
      return result;
    }
  }
};
</script>
