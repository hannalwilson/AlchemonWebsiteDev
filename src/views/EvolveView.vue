<template>
  <div>
    <div class="background">
      <h1 class="spreadText">CRAFT & EVOLVE</h1>
      <button v-if="!foundAddress" @click="TogglePopup('chooseWallet')">CONNECT WALLET</button>
      <p v-if="foundAddress" class="connectedWallet">Connected wallet: {{ this.address }}</p>
    </div>
    <div class="forSale">
      <div v-if="foundAddress">
      <craft-card v-for="card in craftFive" :key="card.name" :name="card.name" :tradedCardOne="card.tradedCardOne" :tradedCardTwo="card.tradedCardTwo" :amount="card.amount" :address="this.address" :available="card.available" :wallet="wallet"></craft-card>
        <evolve-card-two v-for="card in rareFive" :key="card.name" :name="card.name" :tradedCard="card.tradedCard" :address="address" :available="card.available"></evolve-card-two>
        <evolve-card v-for="card in uncommonFive" :key="card.name" :name="card.name" :tradedCard="card.tradedCard" :address="address" :available="card.available" :wallet="wallet"></evolve-card>
        <craft-card v-for="card in craft" :key="card.name" :name="card.name" :tradedCardOne="card.tradedCardOne" :tradedCardTwo="card.tradedCardTwo" :amount="card.amount" :address="this.address" :available="card.available" :wallet="wallet"></craft-card>
        <evolve-card-two v-for="card in rare" :key="card.name" :name="card.name" :tradedCard="card.tradedCard" :address="address" :available="card.available"></evolve-card-two>
        <evolve-card v-for="card in uncommon" :key="card.name" :name="card.name" :tradedCard="card.tradedCard" :address="address" :available="card.available" :wallet="wallet"></evolve-card>
      </div>
    </div>
  </div>
  <popup-window v-if="popupTriggers.chooseWallet">
    <h3>Connect Your Wallet</h3>
    <button class="boxShadow" @click="connectWallet('myalgo')">
      MyAlgo
    </button><br>
    <button class="boxShadow" @click="connectWallet('walletconnect')">
      WalletConnect
    </button><br>
    <button class="boxShadow" @click="TogglePopup('chooseWallet')">Cancel</button>
  </popup-window>
</template>

<style lang="scss" scoped>

.background {
  background-image: url("../assets/alcheshop_coin.png") ,linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5% 0% 2%;

}
p {
    text-align: center;
    margin: 0;
}
h1 {
  padding: 0%;
}
.connectedWallet {
    background-color: #fff9e8;
    padding: 1%;
    border: 4px black solid;
    border-radius: 15px;
    width: 80%;
    margin: auto;
}
img {
  width: 100%;
  margin: 0%;
  padding: 0%;
}
h1 {
  font-size: 10vw;
  color: #e6ad10;
  -webkit-text-stroke:1px rgb(22, 22, 54);
}
button {
  font-family: poppins;
  text-align: center;
  background-color: orange;
  border: 2px solid orange;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
  padding: .5%;
}

button:hover {
  background-color: darkblue;
  border: 2px solid orange;
  color: orange;
}
</style>

<script>
import { ref } from 'vue'
import EvolveCard from '@/components/EvolveCard.vue'
import EvolveCardTwo from '@/components/EvolveCardTwo.vue'
import CraftCard from '@/components/CraftCard.vue'
import PopupWindow from '../components/PopupWindow.vue'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import algosdk from 'algosdk'
// import alchemon from '../data/alchemon.json'

const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)

const popupTriggers = ref({
  chooseWallet: false
})
const uncommon = [
  {
    name: 'Chomp',
    id: 509850827,
    tradedCard: 'Lika',
    available: 0
  },
  {
    name: 'Daggerz',
    id: 509848775,
    tradedCard: 'Dagz',
    available: 0
  },
  {
    name: 'Hailpuff',
    id: 509844088,
    tradedCard: 'Puff',
    available: 0
  },
  {
    name: 'Zipadol',
    id: 509842608,
    tradedCard: 'Zip',
    available: 0
  }
]

const rare = [
  {
    name: 'Likachomp',
    id: 527481591,
    tradedCard: 'Chomp',
    available: 0
  },
  {
    name: 'Daggerpult',
    id: 527479654,
    tradedCard: 'Daggerz',
    available: 0
  },
  {
    name: 'Hailstorm',
    id: 527477069,
    tradedCard: 'Hailpuff',
    available: 0
  },
  {
    name: 'Zipacute',
    id: 527475282,
    tradedCard: 'Zipadol',
    available: 0
  }
]

const craftFive = [
  {
    name: 'Araknadevil',
    id: 744540333,
    tradedCardOne: 'Araknolyth',
    tradedCardTwo: 'Torcydious',
    amount: 1,
    available: 0
  },
  {
    name: 'Torcydious',
    id: 744539419,
    tradedCardOne: 'Torrden',
    tradedCardTwo: 'Incydious',
    amount: 2,
    available: 0
  },
  {
    name: 'Araknolyth',
    id: 744538073,
    tradedCardOne: 'Monolyth',
    tradedCardTwo: 'Araukmo',
    amount: 2,
    available: 0
  }
]

const uncommonFive = [
  {
    name: 'Cydevil',
    id: 744535776,
    tradedCard: 'Cyd',
    available: 0
  },
  {
    name: 'Torrden',
    id: 744532520,
    tradedCard: 'Torr',
    available: 0
  },
  {
    name: 'Araku',
    id: 744530060,
    tradedCard: 'Kumo',
    available: 0
  },
  {
    name: 'Golyth',
    id: 744527932,
    tradedCard: 'Lyth',
    available: 0
  }
]

const rareFive = [
  {
    name: 'Incydious',
    id: 744536686,
    tradedCard: 'Cydevil',
    available: 0
  },
  {
    name: 'Torrment',
    id: 744533302,
    tradedCard: 'Torrden',
    available: 0
  },
  {
    name: 'Arakumo',
    id: 744530969,
    tradedCard: 'Araku',
    available: 0
  },
  {
    name: 'Monolyth',
    id: 744528583,
    tradedCard: 'Golyth',
    available: 0
  }
]

const addresses = [
  'DWGPVTDCFM3DADFBHTE7S4DX7QL4HUJHGHC6DFGJXUPD5P5HPSII4MRGQ4',
  'SAWCR4D342HOKTHK7EDNE6UONGHGRVYGYKTCCHVMJD4BPX4KLMAF5JNK6Y',
  'DORWEXHUPVXMLELBTGAGGG4PGPRB6GB77YZ5WHHTT3TFASE5A25LBMQIWY',
  'HFIAQTXJC5QJKXNY5TQ7GRUPXDI46DWQQNH4WLONANCX6WLGGAQYOIUFDU',
  '6N5FSXFNNIQIW6HQNGNYIK7GNATKTEP6CPB6MLXTWMUPGCXPTTYGXQ2H64',
  'SMCMVU2C2BST7ULL3EJQCNHQT55UAA2JYBN22SSQYDAOC4FATROIJJXZRQ',
  'EQGB3XI46J6NQ6MAP6PWDUZZGRHAOHDOL5MZ5FGKBMWHOW2KXXKDN5VYQU',
  'VYMXJKQSQBBIBSGNFDPI3T33YYOVVPD4EJXRYRBKCIFK6WB5DDHME77VY4',
  'L6G7FT6UOC5B4OJ37GVN37HD2RMTSXIXAAGNMFW2IKSTPQWQ4S56ZTAH5I',
  'XGE7HBT3ORNSIF2V5TLE4BN4T3LK2UZKAZJFZIFV7H3FFO4WAJ5SDXZHFQ',
  'SNWYQ7QUL6DLZZ5YZ24PNHKVXOKYN6PLRRHVZ4CFGLFKPG5LOHET5JGGUQ'
]

let account
// eslint-disable-next-line no-unused-vars
let address
let wallet
let foundAddress
export default {
  setup () {
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    for (const index in addresses) {
      client.accountInformation(addresses[index]).do().then(response => {
        for (const asset of response.assets) {
          uncommon.forEach(item => {
            if (item.id === asset['asset-id']) {
              item.available = asset.amount
            }
          })
          rare.forEach(item => {
            if (item.id === asset['asset-id']) {
              item.available = asset.amount
            }
          })
          // craft.forEach(item => {
          //   if (item.id === asset['asset-id']) {
          //     item.available = asset.amount
          //   }
          // })
        }
      })
    }
  },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    async connectWallet (wallet) {
      switch (wallet) {
        case 'myalgo':
          account = await myAlgoConnect.connect()
          // eslint-disable-next-line no-unused-vars
          this.address = account[0].address
          this.wallet = 'myalgo'
          break
        case 'walletconnect':
          // Check if connection is already established
          if (!walletConnector.connected) {
            // create new session
            // eslint-disable-next-line no-undef
            walletConnector.createSession()
          } else {
            this.address = walletConnector.accounts[0]
            this.wallet = 'walletconnect'
          }
          // Subscribe to connection events
          walletConnector.on('connect', (error, payload) => {
            if (error) {
              throw error
            }
            this.address = walletConnector.accounts[0]
            this.wallet = 'walletconnect'
          })

          walletConnector.on('session_update', (error, payload) => {
            if (error) {
              throw error
            }
            this.address = walletConnector.accounts[0]
            this.wallet = 'walletconnect'
          })

          walletConnector.on('disconnect', (error, payload) => {
            if (error) {
              throw error
            }
            this.address = undefined
          })
      }
      console.log(this.address)
      this.foundAddress = true
      this.TogglePopup('chooseWallet')
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    EvolveCard,
    EvolveCardTwo,
    CraftCard,
    PopupWindow
  },
  data () {
    return {
      uncommon,
      rare,
      uncommonFive,
      rareFive,
      craftFive,
      PopupWindow,
      popupTriggers,
      foundAddress,
      address,
      wallet
    }
  }
}
</script>
