<template>
  <div class="box">
    <article class="media">
      <h1 v-if="title" class="title">
        {{ title }}
      </h1>
      <div>
        <slot />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ListWrapper',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
