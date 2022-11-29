<script>
import { IONIC_SELECTABLE_PAGES_METADATA } from '~/models/ionic-selectable-pages-metadata.const';

const pageId = 'about';

export default {
  data() {
    return {
      content: null,
      metadata: null,
      pageUrl: null,
    };
  },
  head() {
    return this.metadata?.head;
  },
  async serverPrefetch() {
    this.content = await this.loadPage();
    this.metadata = this.getPageMetadata(pageId);
    this.pageUrl = this.$ionicSelectablePagesClient.getPageUrl(pageId);
  },
  async mounted() {
    this.content = this.content ?? (await this.loadPage());
    this.metadata = this.metadata ?? this.getPageMetadata(pageId);
    this.pageUrl = this.pageUrl ?? this.$ionicSelectablePagesClient.getPageUrl(pageId);
  },
  methods: {
    getPageMetadata() {
      return IONIC_SELECTABLE_PAGES_METADATA.find((pageMetadata) => pageMetadata.id === pageId);
    },
    loadPage() {
      return this.$ionicSelectablePagesClient.getPage(pageId);
    },
  },
};
</script>

<template>
  <div class="mt-4">
    <AppShowdown :markdown="content ?? ''"></AppShowdown>
    <template v-if="metadata?.examples">
      <div v-for="example in metadata.examples" :key="example.id">
        <h2 class="text-h2 mt-10 mb-4">{{ example.title }}</h2>
        <AppStackBlitz :src="example.url"></AppStackBlitz>
      </div>
    </template>
    <div class="mt-10">
      <AppGitHubPageLink :url="pageUrl"></AppGitHubPageLink>
    </div>
  </div>
</template>
