<template>
  <list-wrapper>
    <ChatList/>
  </list-wrapper>
</template>

<script>
import ChatList from "@/components/ChatList.vue";
import ListWrapper from "@/components/ListWrapper.vue";

export default {
  name: "Chat",
  components: {
    ChatList,
    ListWrapper
  }
};
</script>
