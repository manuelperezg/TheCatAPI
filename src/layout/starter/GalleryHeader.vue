<template>
  <div>
      <v-navigation-drawer v-model="drawer" app clipped>
        <v-list-item>
            <v-list-item-avatar>
            <v-img 
            src="https://gatosyhumanos.com/wp-content/uploads/2018/04/cropped-logo-3.png"></v-img>
            </v-list-item-avatar>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="ml-2">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
         
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app clipped-left color="primary" dense>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
          <span class="material-icons">menu</span>
        </v-app-bar-nav-icon>

        <v-toolbar-title class="mr-12 align-center">
          <span class="title">
            <a href="/">
              <img
                src="https://gatosyhumanos.com/wp-content/uploads/2018/04/cropped-logo-3.png"
                width="30px"
              />
            </a>
              Gatitos
          </span>
        </v-toolbar-title>
        <v-spacer />
      </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "trending_up", text: "Mas popular" },
      { icon: "subscriptions", text: "Votes" },
      { icon: "featured_play_list", text: "Favourites" },
      { icon: "history", text: "History" }
    ]
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
