<script>
export default {
  props: ['url'],
};
</script>

<template>
  <v-btn class="px-0" :href="url" target="_blank" text small plain>
    <v-icon class="ml-0" left>mdi-pencil-box-outline</v-icon>
    Edit this page on GitHub
  </v-btn>
</template>
