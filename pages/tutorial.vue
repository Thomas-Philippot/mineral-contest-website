<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h1>Installer une maps sur son serveur</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <nuxt-content :document="page" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            color="primary"
            nuxt
            to="/maps"
          >
            Retour
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Instruction Vidéo</h2>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UjrSz-daGCA?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "tutorial.vue",
  async asyncData ({ $content }) {
    const page = await $content('tutorial').fetch()
    return {
      page
    }
  },
}
</script>

<style scoped>

</style>
