<template>
  <v-footer
    class="justify-center"
    color="primary"
  >
    <v-container class="title font-weight-light grey--text text--lighten-1 text-center">
      <v-row>
        <v-col>
          Made with 💜 by Thomas Philippot and Quentin Billy
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <nuxt-link to="/donation">
            <v-btn color="amber accent-2" rounded>
              <v-icon left>fab fa-btc</v-icon>
              Donation
            </v-btn>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: "TheFooter"
  }
</script>

<style scoped>

a {
  text-decoration: none;
  color: inherit;
}

</style>
