<template>
  <v-app>
    <v-navigation-drawer
      :value="true"
      app
      :mini-variant="drawer"
    >
      <div class="app__logo">
        <img src="https://web.lasa.vn/w/nhakhoa/wp-content/uploads/2019/07/1.png" alt="App Logo">
      </div>
      <v-list rounded dense>
        <AppNavigationItem v-for="item in items" :key="item.text" :item="item"/>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dense
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {navigation} from '@/router'
  import AppNavigationItem from '@/components/AppNavigationItem'
  export default {
    components: {
      AppNavigationItem
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: navigation
    }),
  }
</script>

<style lang="scss">
  .app__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>