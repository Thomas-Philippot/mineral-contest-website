import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mineral Contest',
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Un plugin minecraft pour server Bukkit 1.14.4' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cookie' }
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
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/firebase',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sentry'
  ],
  sitemap: {
    hostname: 'https://mineral-contest.netlify.app'
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://mineral-contest.netlify.app/sitemap.xml'
  },
  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    },
    services: {
      auth: true,
      firestore: true
    }
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    config: {}
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
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
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
