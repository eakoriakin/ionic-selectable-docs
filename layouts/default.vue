<script>
import { PROJECTS_NAV } from '~/models/projects-nav.const';
import { ProjectId } from '~/models/project-id.enum';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      isMenuOpen: null,
      projects: [
        { id: ProjectId.Home, title: 'Home', path: '/', icon: 'mdi-view-dashboard', isRotated: false },
        {
          id: ProjectId.AngularQuickForms,
          title: 'Angular Quick Forms',
          path: '/angular-quick-forms',
          icon: 'mdi-angularjs',
          isRotated: false,
        },
        {
          id: ProjectId.IonicSelectable,
          title: 'Ionic Selectable',
          path: '/ionic-selectable',
          icon: 'mdi-orbit',
          isRotated: true,
        },
      ],
    };
  },
  computed: {
    currentProject() {
      const projectId = this.getCurrentProjectId();
      return this.projects.find((project) => project.id === projectId);
    },
    sideMenuGroups() {
      return PROJECTS_NAV[this.getCurrentProjectId()].groups;
    },
    sideMenuMainItem() {
      return PROJECTS_NAV[this.getCurrentProjectId()].mainItem;
    },
  },
  mounted() {
    setTimeout(() => {
      this.$scrollService.scrollElementIntoView(document.getElementById(this.$route.path), false);
    }, 100);
  },
  methods: {
    getCurrentProjectId() {
      return this.$route.path?.split('/')[1];
    },
  },
};
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="isMenuOpen" app>
      <template #prepend>
        <v-list-item v-if="sideMenuMainItem" two-line>
          <v-list-item-avatar>
            <img :src="sideMenuMainItem.icon" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ sideMenuMainItem.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ sideMenuMainItem.subtitle }}</v-list-item-subtitle>
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
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon :class="{ 'u-rotate--90deg': currentProject?.isRotated }" left>{{ currentProject?.icon }}</v-icon>
            {{ currentProject?.title }}
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="project in projects" :key="project.path" :to="project.path" :nuxt="true" router>
            <v-list-item-icon>
              <v-icon :class="{ 'u-rotate--90deg': project.isRotated }">{{ project.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ project.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
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
