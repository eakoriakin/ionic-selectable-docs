<script>
export default {
  props: ['src'],
  data() {
    return {
      height: 500,
      isLoading: true,
    };
  },
};
</script>

<template>
  <div class="app-stack-blitz">
    <v-skeleton-loader v-if="isLoading" class="rounded-0" type="image" :height="height"></v-skeleton-loader>
    <iframe :src="src" :style="{ height: `${height}px` }" @load="isLoading = false"></iframe>
  </div>
</template>

<style lang="scss">
.app-stack-blitz {
  position: relative;

  iframe {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
  }

  .v-skeleton-loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &__image {
      height: 100%;
    }
  }
}
</style>
