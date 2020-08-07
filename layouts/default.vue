<template>
  <v-app>
    <app-bar
      :handle-logout="logout"
    />
    <v-snackbar
      :timeout="3000"
      :value="snack"
      bottom
      color="success"
    >
      Vous êtes déconnecté.
    </v-snackbar>
    <nuxt />
    <the-footer />
  </v-app>
</template>

<script>
import AppBar from '../components/appBar'
import TheFooter from '../components/TheFooter'
export default {
  components: {TheFooter, AppBar},
  data () {
    return {
      snack: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  created() {
    this.$on('loggedOut', () => {
      this.snack = true
    })
  },
  methods: {
    logout () {
      this.$fireAuth.signOut().then(() => {
        this.$store.commit('setUser', null)
        this.snack = true
      })
    }
  }
}
</script>
