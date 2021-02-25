<template>
  <v-main>
    <v-container>
      <v-card class="mt-2">
        <v-card-title>Donation</v-card-title>
        <v-card-text>
          <v-row>
            <v-col md="6">
              Le plugin est opensource, et libre de téléchargement.
              Si tu souhaite soutenir notre travail, c'est içi
            </v-col>
            <v-col md="6">
              <v-row align="center" justify="end">
                <v-col v-for="item in coins" :key="item" md="3">
                  <v-img
                    @click="changeAddr(item)"
                    :class="(item === current) ? 'active' : ''"
                    class="logo"
                    :src="`/img/coins/${item}_LOGO.webp`"
                    contain
                    :alt="item + ' donation'"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-img
                src="/img/btc.svg"
                contain
                alt="Bitcoin donation"
              />
            </v-col>
            <v-col class="text-center">
              {{ addr[current] }}
              <v-btn icon @click="copy">
                <v-icon>{{ copied ? 'fa-clipboard-check' : 'far fa-clipboard'}}</v-icon>
              </v-btn>
              <v-img
                :src="`/img/coins/${current}_add.webp`"
                contain
                height="250"
                alt="Bitcoin donation"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "donation",
  data () {
    return {
      copied: false,
      addr: {
        BTC: 'bc1qrptg2tfdcm7lezert8k46e6hhvsptlhu984rpc',
        ETH: '0x2329ce048A60EC65a821DBb44f100F9201249e29',
        LTC: 'ltc1qclfha7revpwqwa8c50axyj4hfwqxga5elfvruw'
      },
      coins: ['BTC', 'ETH', 'LTC'],
      current: 'BTC'
    }
  },
  methods: {
    changeAddr (item) {
      this.current = item
      this.copied = false
    },
    copy () {
      navigator.clipboard.writeText(this.addr[this.current]).then(() => {
          this.copied = true
        }).catch(() => {
          this.copied = false
        })
    }
  }
}
</script>

<style scoped>

.logo {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.active {
  border: 2px solid black;
}

</style>
