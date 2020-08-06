<template>
  <v-content>
    <v-container>
      <v-card elevation="10">
        <v-card-title>Reviews</v-card-title>
        <v-card-text>
          <v-list disabled>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, i) in reviews"
                :key="i"
              >
                <v-list-item-icon>
                  <v-avatar>
                    <img :src="item.avatar" alt="reviewer avatar">
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.review"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-rating dense v-model="item.rating" />
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-textarea class="mx-4" label="Saisie un avis" />
          <v-rating />
          <v-btn color="primary" class="mx-2" @click="login">Envoyé</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Reviews',
  data () {
    return {
      reviews: []
    }
  },
  created() {
    this.getReviews()
  },
  methods: {
    async getReviews () {
      const documents = await this.$fireStore.collection('reviews').get()
      documents.forEach(doc => {
        this.reviews.push(doc.data())
      })
    },
    login () {
      const provider = new this.$fireAuthObj.GoogleAuthProvider
      this.$fireAuth.signInWithPopup(provider).then((response) => {
        console.log(response)
        const user = response.user
      })
    }
  }
}
</script>

<style scoped>

</style>
