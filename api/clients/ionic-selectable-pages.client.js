export class IonicSelectablePagesClient {
  constructor(axios) {
    this.axios = axios;
  }

  getPage(pageName) {
    return this.axios.$get(
      `https://raw.githubusercontent.com/ionic-selectable/ionic-selectable-pages/main/pages/${pageName}.md`
    );
  }

  getPageUrl(pageName) {
    return `https://github.com/ionic-selectable/ionic-selectable-pages/blob/main/pages/${pageName}.md`;
  }
}
