<template>
  <div class="chat">
    <ChatList/>
  </div>
</template>

<script>
import ChatList from "@/components/ChatList.vue";

export default {
  name: "chat",
  components: {
    ChatList
  }
};
</script>

<style>
</style>