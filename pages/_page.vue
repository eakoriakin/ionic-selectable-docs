<script>
import { PAGES_METADATA } from '~/models/pages-metadata.const';

export default {
  data() {
    return {
      content: null,
      metadata: null,
      pageUrl: null,
      // isLoading: false,
    };
  },
  head() {
    return this.metadata?.head;
  },
  async serverPrefetch() {
    const pageId = this.getPageId();
    this.content = await this.loadPage(pageId);
    this.metadata = this.getPageMetadata(pageId);
    this.pageUrl = this.$pageClient.getPageUrl(pageId);
  },
  async mounted() {
    const pageId = this.getPageId();

    if (!this.content) {
      // this.isLoading = true;
      this.content = await this.loadPage(pageId);
      // this.isLoading = false;
    }

    this.metadata = this.metadata ?? this.getPageMetadata(pageId);
    this.pageUrl = this.pageUrl ?? this.$pageClient.getPageUrl(pageId);
  },
  methods: {
    getPageId() {
      return this.$route.path?.split('/')[1];
    },
    getPageMetadata(pageId) {
      return PAGES_METADATA.find((pageMetadata) => pageMetadata.id === pageId);
    },
    loadPage(pageId) {
      return this.$pageClient.getPage(pageId);
    },
  },
};
</script>

<template>
  <div class="mt-4">
    <!-- <AppPageSkeletonLoader v-if="isLoading"></AppPageSkeletonLoader> -->
    <AppShowdown :markdown="content ?? ''"></AppShowdown>
    <template v-if="metadata?.examples">
      <div v-for="example in metadata.examples" :key="example.id">
        <h2 class="text-h2 mt-10 mb-4">{{ example.title }}</h2>
        <AppStackBlitz :src="example.url"></AppStackBlitz>
      </div>
    </template>
    <div v-if="!isLoading" class="mt-10">
      <AppGitHubPageLink :url="pageUrl"></AppGitHubPageLink>
    </div>
  </div>
</template>
