import { SideMenuService } from '~/services/side-menu.service';
import { ScrollService } from '~/services/scroll.service';

export default ({ app }, inject) => {
  const sideMenuService = new SideMenuService();
  const scrollService = new ScrollService();
  inject('sideMenuService', sideMenuService);
  inject('scrollService', scrollService);
};
