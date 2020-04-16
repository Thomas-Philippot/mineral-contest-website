<template>
  <div>
      <v-content>
        <section id="hero">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="https://i.pinimg.com/originals/e9/45/f5/e945f50264503c78fa0b22421177c9b9.jpg"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                  >
                    <v-col
                      class="white--text text-center"
                      cols="12"
                      tag="h1"
                    >
                    <span
                      class="font-weight-light"
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >
                      WELCOME TO
                    </span>

                      <br>

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black"
                      >
                      Mineral Contest
                    </span>

                    </v-col>

                    <v-btn
                      class="align-self-end"
                      fab
                      outlined
                      @click="$vuetify.goTo('#about-me')"
                    >
                      <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-row>
        </section>

        <section id="about-me">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">A PROPOS</h2>

            <v-responsive
              class="mx-auto mb-8"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
            >
              Mineral Contest est un mode de jeux Minecraft, proposer pas Squeezie lors de ces live du Jeudi soir. Le but du jeux est de miner des ressources afin de faire gagner des points à son équipe.
              L'équipe qui termine la partie avec le plus de point l'emporte.
            </v-responsive>

            <v-avatar
              class="elevation-12 mb-12"
              size="128"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>

            <div></div>

            <v-btn
              color="grey"
              href="https://vuetifyjs.com"
              outlined
              large
            >
            <span class="grey--text text--darken-1 font-weight-bold">
              Vuetify Documentation
            </span>
            </v-btn>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section
          id="features"
          class="grey lighten-3"
        >
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">PRESENTATION</h2>

            <v-responsive
              class="mx-auto mb-12"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ icon, title, text }, i) in features"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card
                  class="py-12 px-4"
                  color="grey lighten-5"
                  flat
                >
                  <v-theme-provider dark>
                    <div>
                      <v-avatar
                        color="primary"
                        size="88"
                      >
                        <v-icon
                          large
                          v-text="icon"
                        ></v-icon>
                      </v-avatar>
                    </div>
                  </v-theme-provider>

                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="title"
                  ></v-card-title>

                  <v-card-text
                    class="subtitle-1"
                    v-text="text"
                  >
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 1000 : 500"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          >
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col
                  v-for="item of stats"
                  :key="item.title"
                  cols="12"
                  md="3"
                >
                  <div class="text-center">
                    <v-img style="margin: auto" aspect-ratio="1" :src="`img/${item.image}`" :alt="item.altText" width="150"/>
                    <div
                      class="display-3 font-weight-black mb-4 text-center"
                      v-text="item.value"
                    ></div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>

        <section id="downloads">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Téléchargement</h2>

            <v-responsive
              class="mx-auto mb-12"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ src, text, title }, i) in downloads"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="src"
                  class="mb-4"
                  height="275"
                  max-width="100%"
                ></v-img>

                <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
                ></h3>

                <div
                  class="title font-weight-light mb-5"
                  v-text="text"
                ></div>

                <v-btn
                  class="ml-n4 font-weight-black"
                  text
                >
                  Continue Reading
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          >
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col class="text-center" md="12">
                  <h1 class="display-3 font-weight-bold mb-4">Arène</h1>
                  <p class="display-1 font-weight-thin">Afin de pimenter la partie, une arène est placé entre toutes les bases sécuriser des équipes.
                    Des coffre y apparaitrons et il faudra se battre pour y récuperer son contenu
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>

      </v-content>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      downloads: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Maps',
          text: 'Télécharger les mondes minecraft avec les bases de chaque équipe et l\'arène. Prêt à démarrer une partie.',
        },
        {
          src: 'https://media.forgecdn.net/attachments/125/517/bukkit.png',
          title: 'Le Plugins',
          text: 'Télécharge le plugins pour l\'installer sur ton serveur Bukkit. Avec toutes les insrtuction d\'installation.',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Structures',
          text: 'Tu à envie de créer ta propre map ? Télécharge les structures des bases et de l\'arène et créer ton monde !',
        },
      ],
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Equipes',
          text: '6 Joueurs s\'affronte par équipe de deux. (Rouge, Bleue, Jaune)'
        },
        {
          icon: 'mdi-update',
          title: 'Durée de la partie',
          text: 'Une partie dure une heure.',
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Coffre aléatoire',
          text: 'Durant la partie des coffre à butin apparaissent de manière aléatoire.',
        },
      ],
      stats: [
        {image: 'iron.png', altText:  'lingot de fer', value :'+10'},
        {image: 'gold.png', altText: 'lingot d\'or', value: '+50'},
        {image: 'diamond.png', altText: 'diamand', value: '+150'},
        {image: 'emerald.png', altText: 'emeraude', value: '+300'},
      ]
    }
  }
}
</script>
