<template>
  <VueShowdown class="app-showdown" v-bind="$attrs" />
</template>

<style lang="scss">
.app-showdown {
  h1 {
    font-size: 3rem;
    font-weight: 300;
    line-height: 3rem;
    letter-spacing: -0.015625em;
    font-family: $heading-font-family;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.6rem;
    letter-spacing: -0.0083333333em;
    font-family: $heading-font-family;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: normal;
    font-family: $heading-font-family;
    margin-top: 20px;
    margin-bottom: 12px;
  }

  pre code {
    display: block;
    padding: 8px 16px;
    margin-bottom: 16px;
  }
}
</style>
