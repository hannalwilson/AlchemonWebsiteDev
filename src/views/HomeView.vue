<template>
  <div id="about" class="whiteGrayBackground">
    <img src="../assets/banner.png" class="banner">
    <img class="centerImage venoreaper"
      src="https://alchemon-website-assets.s3.amazonaws.com/assets/45_venoreaper_back.gif" alt="Venoreaper">
    <img class="centerImage araknadevil"
      src="https://alchemon-website-assets.s3.amazonaws.com/assets/75_araknadevil.gif" alt="Araknadevil">
    <p class="orangeHeader spreadText">ALCHEMON = ALGO+ALCHEMY+MONSTER<br><br>
      <span class="darkBlueHeader spreadText">STAKE! TRADE! EVOLVE! &nbsp;&nbsp;CRAFT! COLLECT!
        EARN!</span>
    </p>
    <p class="darkGrayText_1 marginFix_2">Alchemon is the first monster-collecting NFT staking, crafting and trading
      card game only on the Algorand Blockchain! <br><br>Get your Alchemon, evolve them and then craft Epic and
      Legendary Alchemon that will never be for sale (in the official store)!</p>
  </div>
  <div class="blueBackground">
    <p class="yellowHeader spreadText">QUICKLINKS</p>
    <router-link to="/governance" class="whiteText" ><p>NEW! Governance Voting</p></router-link>
    <router-link to="/craftandevolve">
      <p class="whiteText">Craft & Evolve</p>
    </router-link>
    <a href="https://www.randgallery.com/algo-collection/?address=310014962%2C320570576" target="__blank">
      <p class="whiteText">Add
        AlcheCoin and Alchemon Stake Flag NFTs</p>
    </a>
    <p class="whiteText" @click="TogglePopup('huntingGrounds')">Hunting Grounds Top 15</p>
    <p class="whiteText" @click="TogglePopup('trainingGrounds')">Evolutions Available</p>
    <a href=" https://app.humble.sh/swap" target="__blank">
      <p class="whiteText">HumbleSwap ALCH Trade</p>
    </a>
    <a href="https://app.tinyman.org/#/swap?asset_in=0&asset_out=310014962" target="__blank">
      <p class="whiteText">Tinyman ALCH Trade</p>
    </a>
  </div>
  <div class="orangeBackground">
    <p class="grayHeader spreadText">ALCHEMON INC'S WALLET</p>
    <p class="whiteText">OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA</p>
    <img class="wallet zoomIn_1" src="https://alchemon-website-assets.s3.amazonaws.com/assets/wallet.jpg"
      alt="Creator's wallet" width="35%">
  </div>
  <div id="disclaimer">
    <p class="orangeHeader spreadText">DISCLAIMER</p>
    <p class="darkGrayText_1">
    <ol>
      <li>See existing Store and Craft & Evolve pages for current rates.</li>
      <li>All the rules here are liable to change at any time for any reason. Announcements beforehand will be attempted
        in all circumstances.</li>
      <li>Read the AlcheCoin Legal Opinion Letter.</li>
      <li>Alchemon NFT Cards, AlcheCoin, Packs, Art, or any Alchemon product are all inherently worthless and were
        created for entertainment value only. Any and all value (real or imagined) assigned to them is created by the
        community. Prices for getting the NFT Cards is for entertainment in collecting or participation in the game.
        This is not an investment or security.</li>
    </ol>
    </p>
  </div>
  <popup-window v-if="popupTriggers.huntingGrounds" class="homePopup">
      <button class="boxShadow" @click="TogglePopup('huntingGrounds')">Close</button><br><br>
    <table class="boxShadow">
      <tr class="tableTitle">
        <td>Wallet Address</td>
        <td>Amount of Entries</td>
      </tr>
      <tr v-for="(amount, address) in leaderboard" :key="address">
        <td class="justifyText"> {{ address }} </td>
        <td> {{ amount }}</td>
      </tr>
    </table>
  </popup-window>
  <popup-window v-if="popupTriggers.trainingGrounds" class="homePopup">
      <button class="boxShadow" @click="TogglePopup('trainingGrounds')">Close</button><br><br>
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
  </popup-window>
</template>

<script>
import axios from 'axios'
import { reactive, ref } from 'vue'
import PopupWindow from '@/components/PopupWindow.vue'

const popupTriggers = ref({
  huntingGrounds: false,
  trainingGrounds: false
})

const leaderboard = reactive({})
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
export default {
  setup () {
    let n = 0

    axios.get('https://mj7nw0yoxf.execute-api.us-east-1.amazonaws.com/getEntries').then(response => {
      for (const key in response.data) {
        if (n < 15) {
          leaderboard[key.slice(0, 8) + '...'] = response.data[key]
          n++
        }
      }
    })
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

    return { leaderboard, rewardsAvailable }
  },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    PopupWindow
  },
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  margin: 50px 0 0 0;
  width: 100vw;
}
@media (max-width: 990px) {
.banner {
    margin-top: 40px;
  }
}
.homePopup {
  overflow-y: scroll;
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

.justifyText {
  text-align: justify;
}
.araknadevil {
  margin-bottom: 10%;
  width: 30%;
  margin-top: 8%;
}
.venoreaper {
    margin-bottom: 0%;
      width: 38%;
      margin-top: 10%;
}
#backgroundVideo {
  width: 100%;
}
.videoContainer {
  img {
    width: 100vw;
    margin: 0;
  }
}

/* Hover effect for contact and submit buttons */
button:hover {
    color: orange; /* This makes the text in the buttons white when hovered over */
    background-color: #000080; /* The background of the button changes to black when hovered over */
    transition-duration: 1s; /* This makes the transition last 1 second */
    -webkit-transition-duration: 1s; /* For Safari 4.0-8.0 */
    border-color: orange; /* The border turns silver when the button is hovered over */
}
#about{
  padding-bottom: 5%;
  background-image: linear-gradient(to left, #D8D8D8, #DEDEDE, #E5E5E5, #EBEBEB, #F2F2F2, #F8F8F8, #FFFFFF);
}
.evolution{
  width: 90%;
  margin: 5% 0;
}
.orangeBackground {
  background-image: linear-gradient(to right, #ffa500, #ffb327);
}
ol {
  padding: 0 10%;
}
li {
  padding: 1% 0;
}
.blueBackground {
  background-color: #136af8;
  padding-bottom: 2%;
  .whiteText {
    text-decoration: underline;
  }

  p:hover, a:hover {
    color: orange;
    cursor: pointer;
  }
}
</style>
