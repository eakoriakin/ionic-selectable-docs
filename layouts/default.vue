<script>
import { SIDE_MENU_GROUPS } from '~/models/side-menu-groups.const';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      isMenuOpen: null,
      project: {
        title: 'Ionic Selectable',
        subtitle: 'An Ionic Component',
        icon: 'https://avatars.githubusercontent.com/u/61024758?v=4',
      },
    };
  },
  computed: {
    sideMenuGroups() {
      return SIDE_MENU_GROUPS;
    },
  },
  mounted() {
    setTimeout(() => {
      this.$scrollService.scrollElementIntoView(document.getElementById(this.$route.path), false);
    }, 100);
  },
};
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="isMenuOpen" app>
      <template #prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="project.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ project.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ project.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </template>
      <v-list dense expand nav>
        <v-list-group
          v-for="sideMenuGroup in sideMenuGroups"
          :key="sideMenuGroup.title"
          :value="true"
          no-action
          :default="true"
          :prepend-icon="sideMenuGroup.icon"
        >
          <template #activator>
            <v-list-item-title>{{ sideMenuGroup.title }}</v-list-item-title>
          </template>
          <v-list-item
            v-for="item in sideMenuGroup.items"
            :id="item.path"
            :key="item.path"
            :to="item.path"
            :nuxt="true"
            class="v-list-item--default v-list-item--wrap"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="isMenuOpen = !isMenuOpen" />
      <v-toolbar-title>{{ project.title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <v-row justify="center" no-gutters>
        <v-btn class="px-0" text small plain href="/privacy-policy">Privacy policy</v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
.v-list-item {
  &.v-list-item--default {
    min-height: 32px;
  }

  &.v-list-item--wrap .v-list-item__title {
    white-space: initial;
  }
}
</style>
