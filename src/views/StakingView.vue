<template>
  <div class="available">
    <p class="orangeHeader spreadText">EVOLUTIONS AVAILABLE</p>
    <table class="boxShadow">
      <tr class="tableTitle">
        <td>Alchemon</td>
        <td>Amount Available</td>
      </tr>
      <tr v-for="(index, alchemon) in rewardsAvailable" :key="index">
        <td> {{ alchemon }} </td>
        <td> {{ index }}</td>
      </tr>
    </table>
    <p class="whiteText">
      Check what Alchemon you are staking by entering your wallet address below!
    </p>
    <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address" ref="address" />
    <button class="boxShadow" id="btn" @click="getStaked">Submit</button>
  </div>
  <popup-window v-if="popupTriggers.stakedAlchemon">
    <h2>You have a(n) {{ userStakedCard }} staked!</h2>
    <button class="boxShadow" @click="TogglePopup('stakedAlchemon')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>

div {
    padding: 2%;
}
table {
  margin: auto;
  background: orange;
  border: 2px white solid;
  border-collapse: collapse;
  color: white;
}
td {
  text-align: center;
  padding: 1vw 5vw;
}
tr {
  border-bottom: 2px white solid;
}
.tableTitle {
  background: darkorange;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 1%;
  font-weight: bold;
}
</style>

<script>
import { reactive, ref } from 'vue'

import PopupWindow from '../components/PopupWindow.vue'

const alchemonName = {
  744527019: 'Lyth',
  744527932: 'Golyth',
  744528583: 'Monolyth',
  744551347: 'Kumo',
  744530060: 'Araku',
  744530969: 'Arakumo',
  744531764: 'Torr',
  744532520: 'Torrden',
  744533302: 'Torrment',
  744534630: 'Cyd',
  744535776: 'Cydevil',
  744536686: 'Incydious'
}

const popupTriggers = ref({
  stakedAlchemon: false
})

let userStakedCard

export default {
  data () {
    return {
      PopupWindow,
      popupTriggers,
      userStakedCard
    }
  },
  components: { PopupWindow },
  mounted () {
    window.scrollTo(0, 0)
  },
  setup () {
    const algosdk = require('algosdk')
    const token = { 'X-API-key': 'sxwIKIENYg9Es5rsmoanF5WAYXBBHDQ70vGvhI4g' }
    const server = 'https://mainnet-algorand.api.purestake.io/ps2'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)
    const stakingAddress = '5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y'
    const alchemonAddress = 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA'

    const mainWalletAssets = {}
    const stakingWalletAssets = {}
    const rewardsAvailable = reactive({})

    const evolutions = {
      744527019: '744527932', // lyth to golyth
      744527932: '744528583', // golyth to monolyth
      744551347: '744530060', // kumo to araku
      744530060: '744530969', // araku to arakumo
      744531764: '744532520', // torr to torrden
      744532520: '744533302', // torrden to torrment
      744534630: '744535776', // cyd to cydevil
      744535776: '744536686', // cydevil to incydious
      490146814: '509850827', // lika to chomp
      509850827: '527481591', // chomp to likachomp
      493271743: '509848775', // dagz to daggerz
      509848775: '527479654', // daggerz to daggerpult
      490141855: '509844088', // puff to hailpuff
      509844088: '527477069', // hailpuff to hailstorm
      490139078: '509842608', // zip to zipadol
      509842608: '527475282' // zipadol to zipacute
    }

    const alchemonName = {
      744527019: 'Lyth',
      744527932: 'Golyth',
      744528583: 'Monolyth',
      744551347: 'Kumo',
      744530060: 'Araku',
      744530969: 'Arakumo',
      744531764: 'Torr',
      744532520: 'Torrden',
      744533302: 'Torrment',
      744534630: 'Cyd',
      744535776: 'Cydevil',
      744536686: 'Incydious',
      490146814: 'Lika',
      509850827: 'Chomp',
      527481591: 'Likachomp',
      493271743: 'Dagz',
      509848775: 'Daggerz',
      527479654: 'Daggerpult',
      490141855: 'Puff',
      509844088: 'Hailpuff',
      527477069: 'Hailstorm',
      490139078: 'Zip',
      509842608: 'Zipadol',
      527475282: 'Zipacute'
    }
    client.accountInformation(alchemonAddress).do().then(response => {
      for (const a of response.assets) {
        const amount = a.amount
        const id = a['asset-id']

        mainWalletAssets[id] = amount
      }
      client.accountInformation(stakingAddress).do().then(response2 => {
        for (const a of response2.assets) {
          const amount = a.amount
          const id = a['asset-id']

          stakingWalletAssets[id] = amount
        }
        for (const asset in stakingWalletAssets) {
          const stakedCard = asset // staking asset
          const rewardCard = evolutions[stakedCard] // matching evolution to asset being staked
          const stakedCardAmount = stakingWalletAssets[asset] // amount of assets being staked
          const rewardCardAmount = mainWalletAssets[rewardCard] // amount of rewards in creator wallet

          const amountAvailable = rewardCardAmount - stakedCardAmount // calulates how many rewards are available
          if (alchemonName[rewardCard] !== undefined && amountAvailable > 0) {
            rewardsAvailable[alchemonName[rewardCard]] = amountAvailable // adds alchemon name as key and amount available as value to dictionary
          }
        }
      })
    })
    return { rewardsAvailable }
  },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    getStaked () {
      const algosdk = require('algosdk')
      const token = ''
      const server = 'https://algoindexer.algoexplorerapi.io'
      const port = ''
      const client = new algosdk.Indexer(token, server, port)
      const stakingAddress = '5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y'
      let cardFound = false
      let userStakedCardId
      // const userTransactions = reactive({})
      client.lookupAccountTransactions(this.$refs.address.value).afterTime().do().then(response => {
        try {
          for (let i = 0; !cardFound; i++) {
            const userTransaction = response.transactions[i]
            if (userTransaction['asset-transfer-transaction'] !== undefined) {
              if (userTransaction['asset-transfer-transaction'].receiver === stakingAddress) {
                console.log(userTransaction)
                userStakedCardId = userTransaction['asset-transfer-transaction']['asset-id']
                if (alchemonName[userStakedCardId] !== undefined) {
                  this.userStakedCard = alchemonName[userStakedCardId]
                  this.TogglePopup('stakedAlchemon')
                  cardFound = true
                } else {
                  window.alert('No card staked!')
                }
              }
            }
          }
        } catch {
          window.alert('No card staked!')
        }
      }
      )
    }
  }
}
</script>
