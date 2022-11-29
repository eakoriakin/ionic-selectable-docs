import { IonicSelectablePagesClient } from '~/api/clients/ionic-selectable-pages.client';

export default ({ $axios }, inject) => {
  const ionicSelectablePagesClient = new IonicSelectablePagesClient($axios);
  inject('ionicSelectablePagesClient', ionicSelectablePagesClient);
};
