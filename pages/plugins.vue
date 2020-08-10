<template>
  <v-main>
    <v-container>
      <h1>Plugins</h1>
      <p>Le plugin existe sous différentes version, choisie celle que tu souhaite</p>
      <v-timeline>
        <v-timeline-item
          v-for="item in releases"
          :key="item.id"
          color="secondary"
        >
          <v-card color="secondary">
            <v-card-title class="white--text">
              <v-row>
                <v-col><v-icon color="white">fa-tag</v-icon> {{ item.tag_name }}</v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="white black--text">
              <p class="pt-2 font-weight-medium">{{ item.body }}.</p>
              <v-row>
                <v-col class="font-weight-light">
                  <v-icon>fa-download</v-icon> {{ item.assets[0].download_count }} downloads
                </v-col>
              </v-row>
              <v-row>
                <v-col class="font-weight-light">
                  <v-icon>fa-clock</v-icon> Date de publication :{{ item.published_at }}
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions class="white">
              <v-spacer />
              <v-btn color="primary"
                     link
                     :href="item.assets[0].browser_download_url"
              >
                Télécharger
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <div class="py-6">
      <v-container>
        <adsbygoogle />
      </v-container>
    </div>
  </v-main>
</template>

<script>
export default {
  name:'Plugins',
  asyncData (context) {
    return context.app.$axios.get('https://api.github.com/repos/kaq666/mineral-contest/releases').then((response) => {
      return {
        releases: response.data
      }
    })
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
