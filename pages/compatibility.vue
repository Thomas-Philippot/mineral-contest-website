<template>
  <v-main>
    <v-container>
      <h1>Version Compatibles</h1>
      <p>
        Voici la liste des versions compatibles avec Mineral Contest.
        <v-icon color="warning">fa-question-circle</v-icon> signifie que le plugin n'a pas été tester sous cette version
        il peut être compatible, mais peut aussi ne pas l'être
      </p>
      <v-data-table
        :headers="headers"
        :items="items"
        hide-default-footer
        :items-per-page="-1"
      >
        <template v-slot:item.vanilla="{ item }">
          <v-icon :color="getColor(item, 'vanilla')">{{ getIcon(item, 'vanilla') }}</v-icon>
        </template>
        <template v-slot:item.paperMC="{ item }">
          <v-icon :color="getColor(item, 'paperMC')">{{ getIcon(item, 'paperMC') }}</v-icon>
        </template>
        <template v-slot:item.spigot="{ item }">
          <v-icon :color="getColor(item, 'spigot')">{{ getIcon(item, 'spigot') }}</v-icon>
        </template>
        <template v-slot:item.bukkit="{ item }">
          <v-icon :color="getColor(item, 'bukkit')">{{ getIcon(item, 'bukkit') }}</v-icon>
        </template>
        <template v-slot:item.sponge="{ item }">
          <v-icon :color="getColor(item, 'sponge')">{{ getIcon(item, 'sponge') }}</v-icon>
        </template>
      </v-data-table>
    </v-container>
    <Ad />
  </v-main>
</template>

<script>
export default {
name: "compatibility",
  data () {
    return {
      headers: [
        {
          text: 'Version',
          value: 'version'
        },
        {
          text: 'Vanilla',
          value: 'vanilla'
        },
        {
          text: 'Paper Mc',
          value: 'paperMC'
        },
        {
          text: 'Spigot',
          value: 'spigot'
        },
        {
          text: 'Bukkit',
          value: 'bukkit'
        },
        {
          text: 'Sponge',
          value: 'sponge'
        },
      ],
      items: [
        {
          version: '1.16',
          vanilla: false,
          paperMC: true,
          spigot: true,
          bukkit: true,
          sponge: null
        },
        {
          version: '1.15',
          vanilla: false,
          paperMC: true,
          spigot: true,
          bukkit: true,
          sponge: null
        },
        {
          version: '1.14',
          vanilla: false,
          paperMC: true,
          spigot: true,
          bukkit: true,
          sponge: null
        },
        {
          version: '1.13',
          vanilla: false,
          paperMC: null,
          spigot: null,
          bukkit: null,
          sponge: null
        },
        {
          version: '1.12',
          vanilla: false,
          paperMC: null,
          spigot: null,
          bukkit: null,
          sponge: null
        },
        {
          version: '1.11',
          vanilla: false,
          paperMC: null,
          spigot: null,
          bukkit: null,
          sponge: null
        },
        {
          version: '1.10',
          vanilla: false,
          paperMC: null,
          spigot: null,
          bukkit: null,
          sponge: null
        },
        {
          version: '1.9',
          vanilla: false,
          paperMC: null,
          spigot: null,
          bukkit: null,
          sponge: null
        },
        {
          version: '1.8',
          vanilla: false,
          paperMC: null,
          spigot: null,
          bukkit: null,
          sponge: null
        }
      ]
    }
  },
  methods: {
    getIcon(item, prop) {
      if (item[prop] === null) return 'fa-question-circle'
      return item[prop] ? 'fa-check-circle' : 'fa-times-circle'
    },
    getColor(item, prop) {
      if (item[prop] === null) return 'warning'
      return item[prop] ? 'success' : 'error'
    }
  }
}
</script>

<style scoped>

</style>
