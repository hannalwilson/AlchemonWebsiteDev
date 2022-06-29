<template>
  <div>
    <div class="background">
      <h1 class="spreadText">ALCHESHOP</h1>
      <button v-if="!foundAddress" @click="TogglePopup('chooseWallet')">CONNECT WALLET</button>
      <p v-if="foundAddress" class="connectedWallet">Connected wallet: {{ this.address }}</p>
    </div>
    <div class="forSale">
      <div>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'alchemon'">Alchemon</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'alchibilities'">Alchibilities</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'art'">Art</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'all'">View All</button>
      </div>
      <div>
        <store-card v-for="item in filteredItems" :key="item.id" :type="item.type" :cost="item.cost" :name="item.name" :id="item.id" :amount="item.amount">
        </store-card>
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
.connectedWallet {
    background-color: #fff9e8;
    padding: 1%;
    border: 4px black solid;
    border-radius: 15px;
    width: 75%;
    margin: auto;
}
p {
    text-align: center;
    margin: 0;
}
.forSale {
    background-color: white;
    background-image: linear-gradient(to left, #D8D8D8, #DEDEDE, #E5E5E5, #EBEBEB, #F2F2F2, #F8F8F8, #FFFFFF);
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
import items from '../data/storeItems.json'
import algosdk from 'algosdk'
import { reactive, ref } from 'vue'
import StoreCard from '../components/StoreCard.vue'
import PopupWindow from '../components/PopupWindow.vue'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'

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

const storeItems = reactive([])

const addresses = [
  '7OVSLHCECWQZ7R4DVV64VWCPG4AL6JTDBLQZZX6FPG22JCIIVFOSTC6GBQ',
  'I3QBOS6X6IWOY7S65CRRU47RAS2IK3TPLXAF3HYVY5JIEP7IXWARBWMJYQ',
  '5BSQOOEXICBRFBWBAQKFDUF4YFQN67OQFAH5NFHE2FUHTNHEHNGXJ6MPJU',
  '5HPPE2OE6L3UDVG2LOU3LKD56TS6AQAMRY37FGRN45B7UG5ZJAQCZ2TWAM',
  'WP55X5NNDLVSD2KRL4MHUYR2QGFART6V4OUQN54ETURA5AGM6Y5J4AI6I4',
  'O3BY3EN4SA75TBYKE6OTOCWIYK4CT7EY47HMYJGKET2PICWLNVCO4P2P6E',
  '4CBGCW7NNKN6YQRODCTQ5TDWYK5HGP7N6QLAYIV2ZG6JER3A7GUENNKYN4',
  'BLBMPJ2T2R34STSEIMR2M3ONWRUQKDVERCJA6FYSK563KBNCWWDKKXXPLM',
  '2RDDILD3SKA2TU2O5C6CMFJ2I2YS7FK6JSZUZWXTMGODWT2WPP6NEGXGIU',
  '4ZAR57SX4TBQAB2PJXBIKXNWJRU2Z7UPQZ2CHZCTSTUR6X5KNRQ4RPDSJI',
  'CWH5PDGPEX33F7JXDKSUNQIKJWJGQ4BFUB7I5Z7GKU4MXIBDTZRVP4XVAE',
  'COXD5PMNUOR3ZDARMSJQ452DOIGUB762ICKST4LAZKIBZRIZEFLJSDUCUU',
  'NSISL4T4IHPOVTWIUKRDXO5GWGWYNVX6IBQ2SHB3S4DECJXIOZGZ67LVBM',
  'OUHUW4FMSVUGMMCO46YVWPJOSFAPWN3QM45BISMYHJ6R5EMM56U5N25V5M',
  'CVDTGN4O45VJ4PEMNYQEPHZPJ23BSWMVRAHCHCC3UBGTZDNFIHEMI55RCM',
  'SJ6XHJ5OIRPT5FDNDAAH6F2K4DFJFHXLBFTRPYHQXUSZAFYEGO3SSCJ7NY',
  'P2MXHIMDODPHESURBFNZDBI57BFIJPYBPVS5VBY3UPVBPLIXLQ2ANR4Y6Q',
  'SQ24B6O32QNEKFZVRXHYETFMAMBOKPWKXKMOQV6YPTOHFF3DMEFEHGHYII',
  'LGONPU7H74GY63F5SE445SUPUG5Y7D2LA5NP6Y3JH5WPYRYFGLF7EHC52I',
  '6GN65BOLLZRUBMYD73GLZCRORABTWVRM3ALPC6LQ3KJDGTEHXVOATYJM7A',
  'TFY2WW37XK7NSPG7CJMT4ILJRANXYXMI2FQBIDMFDHHHWQRYSQZSH3RKSQ',
  'OX5UZFYVLKDHCOFZ7MGNPLJUKOLV43NLJJOM47KM2SNHCCJVKGERQAC4OA',
  'E3VNMDHNLVZW4SGASBXICP2PU5CDVELGJTIOBMEXOJNHFYRHQVFIVI7OZA', // end of mainnet address
  'FRXI3QYOFQHBKCUMQJDEJUWCI3EPMMM7RUWABKBR5MH3XYGMNSR6ALINAI', // beginning of testnet address
  'KPJ2FHS3OATRTGGVKCRF24RXYC64BR6HX75Y3FHQYBUGAD53EV6ZACEVOU',
  'RZU5ZBINSGLIEOJMM44RA45KRXUH5DCXE32TPGSMKYWBYICS6MSFHLJSRM',
  'RYDUCUN2Q6OA5BDSTKI5IL7KDRUHU646B6SJECWUUHKO366UFR33T4JTRQ',
  '7IFZJ2KKJ4B7TRE3H72GWHZFYCOLLQQ5GJJUN4GYJRYTS2X4GGXGKDDSP4',
  '3OQKVI7ZCOHVBRN63MQAJWZUUWT3DSBEL7V5CX7CNPS6K4ZFHZQKK5XHSQ',
  'L75YE6ONHD3HGDR6V64IGE4GIYIYEX6UVCEWNKC4I2NFDBGENOYSSXWUFM',
  'BDXWFKZNOLXM73ISYUFW4THIVMFQSLVQUU5J576ZRB6OUHFJK7MG3ZDI6Q'
]

let account
// eslint-disable-next-line no-unused-vars
let address
let wallet
let foundAddress

export default {
  setup () {
    const token = ''
    const server = 'https://testnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    if (storeItems.length === 0) {
      for (const item of items) {
        storeItems.push(item)
      }
    }

    for (const index in addresses) {
      client.accountInformation(addresses[index]).do().then(response => {
        for (const asset of response.assets) {
          storeItems.forEach(item => {
            if (item.id === asset['asset-id']) {
              item.amount = asset.amount
            }
          })
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
          localStorage.userAddress = this.address
          localStorage.userWallet = this.wallet
          break
        case 'walletconnect':
          // Check if connection is already established
          if (!walletConnector.connected) {
            // create new session
            // eslint-disable-next-line no-undef
            walletConnector.createSession()
          } else {
            this.address = walletConnector.accounts[0]
            localStorage.userAddress = this.address
            this.wallet = 'walletconnect'
            localStorage.userWallet = this.wallet
          }
          // Subscribe to connection events
          walletConnector.on('connect', (error, payload) => {
            if (error) {
              throw error
            }
            this.address = walletConnector.accounts[0]
            localStorage.userAddress = this.address
            this.wallet = 'walletconnect'
            localStorage.userWallet = this.wallet
          })

          walletConnector.on('session_update', (error, payload) => {
            if (error) {
              throw error
            }
          })

          walletConnector.on('disconnect', (error, payload) => {
            if (error) {
              throw error
            }
          })
          break
      }
      this.foundAddress = true
      this.TogglePopup('chooseWallet')
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    if (localStorage.userAddress) {
      this.address = localStorage.userAddress
      this.foundAddress = true
    } else {
      this.foundAddress = false
    }
  },
  components: {
    StoreCard,
    PopupWindow
  },
  data () {
    return {
      viewOnly: 'all',
      PopupWindow,
      popupTriggers,
      foundAddress,
      address,
      wallet
    }
  },
  computed: {
    filteredItems () {
      let tempItems = storeItems.filter(item => item.amount > 0)

      if (this.viewOnly === 'alchemon') {
        tempItems = tempItems.filter(item => {
          return item.type.includes('alchemon')
        })
      }
      if (this.viewOnly === 'art') {
        tempItems = tempItems.filter(item => {
          return item.type.includes('art')
        })
      }
      if (this.viewOnly === 'alchibilities') {
        tempItems = tempItems.filter(item => {
          return item.type.includes('alchibilities')
        })
      }
      if (this.viewOnly === 'all') {
        tempItems = storeItems
      }
      return tempItems
    }
  }
}
</script>
