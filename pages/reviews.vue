<template>
  <v-main>
    <v-container>
      <v-card elevation="10">
        <v-card-title>Avis</v-card-title>
        <v-card-subtitle>
          Laissez votre avis sur le plugin.
        </v-card-subtitle>
        <v-card-text>
          <v-skeleton-loader
            :loading="loading"
            transition="scale-transition"
            type="list-item-avatar-three-line"
          >
            <v-list
              three-line
              disabled
            >
              <v-list-item
                v-for="(item, i) in reviews"
                :key="i"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar" alt="reviewer avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-black">
                    {{ item.username }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="wrap-text">
                    {{ item.review }}
                  </v-list-item-subtitle>
                  <v-list-item-action>
                    <v-rating dense v-model="item.rating" />
                  </v-list-item-action>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-skeleton-loader>
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
    <div class="py-6">
    </div>
  </v-main>
</template>

<script>
export default {
  name: 'Reviews',
  data () {
    return {
      reviews: [],
      loading: true,
      newItem: {
        review: '',
        rating: 0
      },
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ]
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
      const documents = await this.$fireStore.collection('reviews').get().catch((e) => {
        this.$sentry.captureException(e)
      })
      this.loading = false
      documents.forEach(doc => {
        this.reviews.push(doc.data())
      })
    },
    login () {
      const provider = new this.$fireAuthObj.GoogleAuthProvider
      this.$fireAuth.signInWithPopup(provider).then((response) => {
        const fullUser = response.user
        console.log(fullUser)
        const user = {
          username: fullUser.displayName,
          avatar: fullUser.photoURL,
          mail: fullUser.email
        }
        this.$store.commit('setUser', user)
      }).catch((e) => {
        this.$sentry.captureException(e)
      })
    },
    sendReview () {
      const data = {
        review: this.newItem.review,
        rating: this.newItem.rating,
        mail: this.$store.state.user.mail,
        username: this.$store.state.user.username,
        avatar: this.$store.state.user.avatar,
      }
      this.$fireStore.collection('reviews').doc().set(data).then(() => {
        this.reviews.push(data)
        this.newItem = {
          review: '',
          rating: 0
        }
      }).catch((e) => {
        this.$sentry.captureException(e)
      })
    }
  }
}
</script>

<style scoped>

</style>
