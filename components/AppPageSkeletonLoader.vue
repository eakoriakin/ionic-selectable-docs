<template>
  <v-skeleton-loader class="app-page-skeleton-loader" type="article"></v-skeleton-loader>
</template>

<style lang="scss">
.app-page-skeleton-loader {
  .v-skeleton-loader__article {
    .v-skeleton-loader__heading {
      margin-left: 0;
      margin-right: 0;
    }

    .v-skeleton-loader__paragraph {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
