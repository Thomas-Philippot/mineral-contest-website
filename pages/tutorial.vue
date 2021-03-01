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
          <h2>Extraire la map de son archive</h2>
          <p>
            Une fois votre archive `.rar` télécharger, il vous faut l'éxtraire à la racine de votre serveur.
            Si tout s'est bien déroulé vous avez désormais un dossier `Mineral_1` dans votre serveur.
          </p>

          <v-row>
            <v-col>
              <img src="/img/maps/tutorial/Capture.webp" alt="main image" height="400"/>
            </v-col>
            <v-col>
              <img src="/img/maps/tutorial/serveur.webp" alt="main image" height="400"/>
            </v-col>
          </v-row>
          <p>
            Ensuite, il vous suffit d'édité le fichier `server.properties`.
            Remplacer `world` par le nom de votre dossier (ici `Mineral_1`) à la ligne `level_name`
          </p>

          <v-row>
            <v-col>
              <img src="/img/maps/tutorial/server2.webp" alt="main image" height="800"/>
            </v-col>
            <v-col>
              <img src="/img/maps/tutorial/server1.webp" alt="main image" height="800"/>
            </v-col>
          </v-row>

          <p>Enfin, relancer votre serveur pour charger votre nouvel map.</p>
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
  name: "tutorial.vue"
}
</script>

<style scoped>

</style>
