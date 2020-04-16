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
  </v-app-bar>
</template>

<script>
  export default {
    name: "AppBar"
  }
</script>

<style scoped>

</style>
