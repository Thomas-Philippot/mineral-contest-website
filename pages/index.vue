<template>
  <div>
      <v-main>
        <section id="hero">
          <v-row no-gutters>
            <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="img/main.webp"
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
                      BIENVENUE DANS
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
                      <v-icon>fa-chevron-down</v-icon>
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
              Mineral Contest est un mode de jeux Minecraft, proposé par Squeezie lors de ces live du jeudi soir.
              Le but du jeu est de miner des ressources afin de faire gagner des points à son équipe.
              L'équipe qui termine la partie avec le plus de points l'emporte.
              Cette version est une adaptation du jeu.
            </v-responsive>


            <v-hover v-slot:default="{ hover }">
              <a href="https://discord.gg/A9jfTAN" target="_blank" style="text-decoration: none;">
                <v-avatar
                  :class="hover ? 'elevation-14' : 'elevation-4'"
                  class="mb-12"
                  size="128"
                >
                  <v-icon color="primary" size="90">fab fa-discord</v-icon>
                </v-avatar>
              </a>
            </v-hover>

            <div></div>

            <v-btn
              color="grey"
              href="https://github.com/kaq666/mineral-contest/blob/master/README.md"
              target="_blank"
              outlined
              large
            >
            <span class="grey--text text--darken-1 font-weight-bold">
              Documentation
            </span>
            </v-btn>
          </v-container>

          <div class="py-6">
          </div>
        </section>

        <section class="py-5">
          <v-container>
            <v-row>
              <v-col>
                <adsbygoogle />
              </v-col>
            </v-row>
          </v-container>
        </section>

        <section
          id="features"
          class="grey lighten-3"
        >
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="font-weight-bold mb-3 text-uppercase text-center text-h4 text-md-h3">
              PRESENTATION
            </h2>

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
          <v-lazy
            v-model="statsLazy"
            min-height="200"
            :options="{
              threshold: .5
            }"
            transition="fade-transition"
          >
            <v-parallax
              :height="$vuetify.breakpoint.smAndDown ? 1000 : 500"
              src="/img/in-action.webp"
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
          </v-lazy>
        </section>

        <section id="downloads">
          <div class="py-12"></div>

          <v-container>
            <h2 class="font-weight-bold mb-3 text-uppercase text-center text-h4 text-md-h3">
              Téléchargement
            </h2>

            <v-responsive
              class="mx-auto mb-12"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ src, text, title, link }, i) in downloads"
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
                  outlined
                  nuxt
                  :to="link"
                  color="secondary"
                >
                  Voir
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-6">
          </div>
        </section>

        <section id="arena">
          <v-lazy
            v-model="arenaLazy"
            :options="{
              threshold: .5
            }"
            min-height="200"
            transition="fade-transition"
          >
            <v-parallax
              :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
              src="img/thumbnails/arena.webp"
            >
              <v-container fill-height>
                <v-row class="mx-auto">
                  <v-col class="text-center text-arena" md="12">
                    <h1 class="display-3 font-weight-bold mb-4">Arène</h1>
                    <p class="display-1 font-weight-light">Afin de pimenter la partie, une arène est placée entre toutes
                      les bases sécuriser des équipes. Des coffres y apparaîtrons et il faudra se battre pour y récupérer son contenu
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-parallax>
          </v-lazy>
        </section>
      </v-main>
  </div>
</template>

<script>

export default {
  data () {
    return {
      arenaLazy: false,
      statsLazy: false,
      downloads: [
        {
          src: 'img/thumbnails/maps.webp',
          title: 'Maps',
          text: 'Télécharger les mondes minecraft avec les bases de chaque équipe et l\'arène. Prêt a démarrer une partie.',
          link: '/maps'
        },
        {
          src: 'https://media.forgecdn.net/attachments/125/517/bukkit.png',
          title: 'Le Plugins',
          text: 'Télécharge le plugin pour l\'installer sur ton serveur Bukkit. Avec toutes les instructions d\'installation.',
          link: '/plugins'
        },
        {
          src: 'img/thumbnails/structures.webp',
          title: 'Structures',
          text: 'Tu as envie de créer ta propre carte ? Télécharge les structures des bases et de l\'arène et créer ton monde !',
          link: '/structures'
        },
      ],
      features: [
        {
          icon: 'fa-users',
          title: 'Equipes',
          text: '6 Joueurs s\'affronte par équipe de deux. (Rouge, Bleue, Jaune)'
        },
        {
          icon: 'fa-clock',
          title: 'Durée de la partie',
          text: 'Une partie dure une heure.',
        },
        {
          icon: 'fa-gem',
          title: 'Coffre aléatoire',
          text: 'Durant la partie des coffres à butin apparaissent de manière aléatoire.',
        },
      ],
      stats: [
        {image: 'iron.webp', altText:  'lingot de fer', value :'+10'},
        {image: 'gold.webp', altText: 'lingot d\'or', value: '+50'},
        {image: 'diamond.webp', altText: 'diamand', value: '+150'},
        {image: 'emerald.webp', altText: 'emeraude', value: '+300'},
      ]
    }
  },
  head () {
    return {
      title: 'Mineral Contest'
    }
  }
}
</script>

<style>
  .text-arena {
    text-shadow: 2px 2px 10px black;
  }
</style>
