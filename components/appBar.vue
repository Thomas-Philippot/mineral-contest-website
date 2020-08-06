<template>
  <v-app-bar
    app
    color="white"
    height="100"
  >
    <v-avatar
      class="mr-3"
      color="grey lighten-5"
      size="70"
    >
      <v-img
        contain
        max-height="70%"
        src="img/diamond.png"
      ></v-img>
    </v-avatar>

    <v-toolbar-title class="font-weight-black headline">
      Mineral Contest
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      class="mx-2"
      color="primary"
      nuxt
      to="/"
    >
      <v-icon left>fa-home</v-icon>Accueil
    </v-btn>
    <v-btn
      class="mx-2"
      color="primary"
      nuxt
      to="/reviews"
    >
      <v-icon left>fa-star</v-icon>
      Avis
    </v-btn>
    <v-menu
      v-if="loggedIn"
      class="mx-2"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-avatar>
            <v-img :src="user.avatar" alt="user image"/>
          </v-avatar>
        </v-btn>
      </template>
      <v-list >
        <v-list-item color="primary" @click="logout">
          <v-list-item-title><v-icon left>fa-sign-out-alt</v-icon>Déconnexion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar",
    computed: {
      user () {
        return this.$store.state.user
      },
      loggedIn () {
        return this.$store.state.user !== null
      }
    },
    methods: {
      logout () {
        this.$fireAuth.signOut().then(() => {
          this.$store.commit('setUser', null)
        })
      }
    }
  }
</script>

<style scoped>

</style>
