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
          <a href="https://www.buymeacoffee.com/ThomasPhilippot">
            <v-btn color="white" rounded>
              <v-icon left>fa-coffee</v-icon>
              Buy me a coffee
            </v-btn>
          </a>
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
