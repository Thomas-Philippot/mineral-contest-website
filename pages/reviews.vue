<template>
  <v-main>
    <v-container>
      <v-card elevation="10">
        <v-card-title>Avis</v-card-title>
        <v-card-subtitle>
          Laissez votre avis sur le plugin.
        </v-card-subtitle>
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
        <v-card-actions v-if="loggedIn">
          <v-row align="center">
            <v-col cols="12" md="8">
              <v-textarea class="mx-4" label="Saisie ton avis" v-model="newItem.review" />
            </v-col>
            <v-col cols="6" md="2">
              <v-rating dense v-model="newItem.rating" />
            </v-col>
            <v-col cols="6" md="1" class="text-right">
              <v-btn color="primary" class="mx-2" @click="sendReview">Envoyé</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-row>
            <v-col class="text-center">
              <v-card-subtitle>Vous devez être connecté pour laisser un avis.</v-card-subtitle>
              <v-btn color="primary" @click="login">
                <v-icon left>fab fa-google</v-icon>
                Connexion
              </v-btn>
            </v-col>
          </v-row>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'Reviews',
  data () {
    return {
      reviews: [],
      newItem: {
        review: '',
        rating: 0
      }
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.user !== null
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
        const user = response.user
        this.$store.commit('setUser', { username: user.displayName, avatar: user.photoURL })
      })
    },
    sendReview () {
      const data = {
        review: this.newItem.review,
        rating: this.newItem.rating,
        username: this.$store.state.user.username,
        avatar: this.$store.state.user.avatar,
      }
      this.$fireStore.collection('reviews').doc().set(data).then(() => {
        this.reviews.push(data)
        this.newItem = {
          review: '',
          rating: 0
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
