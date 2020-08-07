<template>
  <v-app-bar
    app
    color="white"
  >
    <v-toolbar-title class="font-weight-black headline .d-none .d-sm-flex">
      <v-btn
        class="mx-2"
        icon
        nuxt
        to="/"
      >
        <v-avatar
          color="grey lighten-5"
          size="50"
        >
          <v-img
            src="img/diamond.png"
          ></v-img>
        </v-avatar>
      </v-btn>
      Mineral Contest
    </v-toolbar-title>
    <v-spacer />
    <v-avatar class="mx-2" v-if="loggedIn">
      <v-img :src="user.avatar" />
    </v-avatar>
    <v-menu
      v-if="loggedIn"
      class="mx-2"
      bottom
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>fa-ellipsis-v</v-icon>
        </v-btn>
      </template>
      <v-list >
        <v-list-item color="primary" @click="handleLogout">
          <v-list-item-title>
            <v-icon left>fa-sign-out-alt</v-icon>
            Déconnexion
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <template v-slot:extension>
      <v-tabs
        align-with-title
        icons-and-text
      >
        <v-tab nuxt to="/">Accueil</v-tab>
        <v-tab @click="redirect">Téléchargement</v-tab>
        <v-tab nuxt to="/reviews">Avis</v-tab>
      </v-tabs>
    </template>

  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar",
    props: {
      handleLogout: {
        type: Function,
        required: true
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      },
      loggedIn () {
        return this.$store.state.user !== null
      }
    },
    methods: {
      async redirect () {
        if (this.$route.fullPath === '/') {
          await this.$vuetify.goTo('#downloads')
        } else {
          await this.$router.push('/#downloads')
        }
      }
    }
  }
</script>

<style scoped>

</style>
