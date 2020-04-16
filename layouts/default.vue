<template>
  <v-app>
    <app-bar />
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
  }
}
</script>
