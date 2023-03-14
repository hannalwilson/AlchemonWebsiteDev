<template>
  <div class="evolvestake">
    <p class="orangeHeader spreadText">TRAINING GROUNDS</p>
    <p class="whiteText">Players can send their Common or Uncommon Alchemon to the Training Grounds to evolve!
      After one week, you will be sent back the evolution of your Alchemon, if possible. There are a limited # of
      available NFT Cards
      for your Alchemon to be turned into. The chart below shows what is currently available for Sets 4 and 5. All
      previous sets have been evolved. It is first come, first serve for staked Alchemon to get
      evolved, so if you send in a card that's evolution isn't available, that card will be sent back to your wallet.
    </p><p class="whiteText center"><strong>MAKE SURE YOU ADD THE ASSET OF THE EVOLVED VERSION YOU ARE TO RECEIVE.</strong></p>
    <img class="wallet_1" src="https://alchemon-website-assets.s3.amazonaws.com/assets/wallet_1.jpg" alt="Wallet"
      width="25%">
    <p class="whiteHeader center">Wallet address: <b>5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y</b></p>
    <p class="orangeHeader spreadText">
      CHECK WHICH ALCHEMON YOU ARE STAKING
    </p>
    <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address" ref="address" />
    <button class="boxShadow" id="btn" @click="getStaked">Submit</button>
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
  </div>
  <popup-window v-if="popupTriggers.stakedAlchemon">
    <h2>You have a(n) {{ userStakedCard }} staked!</h2>
    <button class="boxShadow" @click="TogglePopup('stakedAlchemon')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.noStakedAlchemon">
    <h2>You do not have an Alchemon staked. Scan the QR code above to send one to the Training Grounds!</h2>
    <button class="boxShadow" @click="TogglePopup('noStakedAlchemon')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>
.center {
  text-align: center;
}
div {
    padding: 2%;
}
.evolvestake {
    background-color: #007bff;
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

@keyframes spin_1 {
0% { transform: rotate(360deg); }
100% { transform: rotate(0deg); }
}
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}

#trainingAnimation_1 {
position: relative;
animation-name: spin;
animation-duration: 7s;
animation-iteration-count:infinite;
}

#trainingAnimation_2 {
position: relative;
animation-name: spin_1;
animation-duration: 7s;
animation-iteration-count:infinite;
}
</style>

<script>
import { reactive, ref } from 'vue'

import PopupWindow from '../components/PopupWindow.vue'

const alchemonName = {
  798976821: 'Win',
  798978892: 'Twig',
  798981060: 'Jude',
  798983583: 'Ash',
  798977534: 'Wingo',
  798979660: 'Barkly',
  798982205: 'Judodo',
  798984317: 'Cinder',
  798978192: 'Winghost',
  798980408: 'Barkbeak',
  798982872: 'Judopeck',
  798985107: 'Torchfeather',
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

const popupTriggers = ref({
  stakedAlchemon: false,
  noStakedAlchemon: false
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
  setup () {
    const algosdk = require('algosdk')
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)
    const stakingAddress = '5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y'
    const alchemonAddress = 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA'

    const mainWalletAssets = {}
    const stakingWalletAssets = {}
    const rewardsAvailable = reactive({})

    const evolutions = {
      798976821: '798977534', // win to wingo
      798977534: '798978192', // wingo to winghost
      798978892: '798979660', // twig to barkly
      798979660: '798980408', // barlky to barkbeak
      798981060: '798982205', // jude to judodo
      798982205: '798982872', // judodo to judopeck
      798983583: '798984317', // ash to cinder
      798984317: '798985107', // cinder to torchfeather
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
          } else if (alchemonName[rewardCard] !== undefined && amountAvailable <= 0) {
            rewardsAvailable[alchemonName[rewardCard]] = 0
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
      const now = new Date()
      const weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
      const formattedWeekAgo = weekAgo.toISOString()
      // const userTransactions = reactive({})
      client.lookupAccountTransactions(this.$refs.address.value).afterTime(formattedWeekAgo).do().then(response => {
        console.log(response)
        try {
          for (let i = 0; !cardFound; i++) {
            const userTransaction = response.transactions[i]
            if (userTransaction['asset-transfer-transaction'] !== undefined) {
              if (userTransaction['asset-transfer-transaction'].receiver === stakingAddress) {
                userStakedCardId = userTransaction['asset-transfer-transaction']['asset-id']
                if (alchemonName[userStakedCardId] !== undefined) {
                  this.userStakedCard = alchemonName[userStakedCardId]
                  cardFound = true
                  for (const key in response.transactions) {
                    if (response.transactions[key].sender === stakingAddress) {
                      this.TogglePopup('noStakedAlchemon')
                      break
                    }
                  }
                  this.TogglePopup('stakedAlchemon')
                } else {
                  this.TogglePopup('noStakedAlchemon')
                }
              }
            }
          }
        } catch {
          this.TogglePopup('noStakedAlchemon')
        }
      }
      )
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
