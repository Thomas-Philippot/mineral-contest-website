<template>
  <v-content>
    <v-container>
      <h1>Plugins</h1>
      <p>Le plugin existe sous différentes version, choisie celle que tu souhaite</p>
      <v-timeline>
        <v-timeline-item
          v-for="(item, id) in releases"
          :key="id"
          color="secondary"
        >
          <v-card color="secondary">
            <v-card-title class="title">{{ item.tag }}</v-card-title>
            <v-card-text class="white text--primary">
              <p class="pt-2 font-weight-medium">{{ item.description }}.</p>
              <p class="font-weight-light">Date de publication :{{ item.date }}</p>
              <v-btn color="secondary"
                 link
                 href="https://github.com/kaq666/mineral-contest/releases/download/v1.0.0/mineral-contest.jar"
              >
                Télécharger
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name:'Plugins',
  data () {
    return {
      releases: [
        {
          tag: 'v1.0.0',
          description: 'La toute première version jouable de Mineral Contest',
          date: '17/04/2020'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Plugins',
      meta: [
        { hid: 'description', name: 'description', content: 'Télécharger les différentes versions du plugin' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
