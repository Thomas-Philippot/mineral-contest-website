<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, id) in maps"
          :key="id"
          cols="12"
          xs="1"
          sm="6"
          lg="3"
        >
          <v-card elevation="5">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.image"
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>
            <div style="min-height: 8rem">
              <v-card-subtitle>
                Biôme : {{ item.biome }}
              </v-card-subtitle>
              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                link
                :href="`/maps/${item.name}.rar`"
              >
                <v-icon>mdi-download</v-icon>
                Télécharger
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      maps: [
        {
          title: 'Snow Map',
          description: 'Une map dans la neige, avec d\'énormes montagne à proximité.',
          biome: 'Jungle',
          name: 'snow',
          image: '/img/maps/snow.png'
        },
        {
          title: 'Desert Map',
          description: 'Une map dans le desert avec de nombreuses grottes et faille.',
          biome: 'Desert',
          name: 'desert',
          image: '/img/maps/desert.png'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Maps',
      meta: [
        { hid: 'description', name: 'description', content: 'Télécharger les différentes maps existante et tester par la communauté' }
      ]
    }
  }
}

</script>
