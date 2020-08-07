import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'Mineral Contest',
    title: 'Mineral Contest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Un plugin minecraft pour server Bukkit 1.14.4' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/custom.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyBnGbOmoQlDGJswRgr5_oR8tCgijQj_Ac0",
      authDomain: "mineral-contest.firebaseapp.com",
      databaseURL: "https://mineral-contest.firebaseio.com",
      projectId: "mineral-contest",
      storageBucket: "mineral-contest.appspot.com",
      messagingSenderId: "194505836837",
      appId: "1:194505836837:web:5324652dd9aa074f95f2cc"
    },
    services: {
      auth: true,
      firestore: true
    }
  },
  sitemap: {
    hostname: 'https://mineral-contest.netlify.app'
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://mineral-contest.netlify.app/sitemap.xml'
  },
  googleAnalytics: {
    id: 'UA-147974021-2'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: 'fa'
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#009688',
          accent: colors.grey.darken3,
          secondary: '#28ceb3',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
