export class PageClient {
  constructor(axios) {
    this.axios = axios;
  }

  getPage(pageName) {
    return this.axios.$get(
      // We cannot request files directly from GitHub because of CORS limitation.
      // Preflight OPTIONS request to GitHub always returns 403 error preventing a file from loading.
      // `https://raw.githubusercontent.com/ionic-selectable/ionic-selectable-pages/main/pages/${pageName}.md`
      `https://unpkg.com/ionic-selectable-pages@1.0.0/pages/${pageName}.md`
    );
  }

  getPageUrl(pageName) {
    return `https://github.com/ionic-selectable/ionic-selectable-pages/blob/main/pages/${pageName}.md`;
  }
}
