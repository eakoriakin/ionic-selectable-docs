import { PageClient } from '~/api/clients/page.client';

export default ({ $axios }, inject) => {
  const pageClient = new PageClient($axios);
  inject('pageClient', pageClient);
};
