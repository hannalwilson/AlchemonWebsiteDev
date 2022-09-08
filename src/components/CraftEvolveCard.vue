<template>
    <div class="nftContainer boxShadow">
        <div class="imgContainer">
            <img :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${name}.png`" class="nftImage">
        </div>
        <div class="buttonContainer" v-show="rarity > 2">
            <p> Evolve {{ name }}</p>
            <p>You need:<br>
            <ul v-if="set !=='Community'">
                <li>2 {{ tradedCardOne }}</li>
                <li>100 ALCH</li>
            </ul>
            <ul v-else>
              <li>2 {{ tradedCardOne }}</li>
              <li>1500 YLDY</li>
            </ul>
            </p>
            <p>Available: {{ available }}</p>
            <button v-if="set !=='Community'" v-show="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">100 ALCH</button>
            <button v-else v-show="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">1500 YLDY</button>
        </div>
        <div class="buttonContainer" v-show="rarity < 3">
            <p> Craft {{ name }}</p>
            <p>You need: <br>
            <ul v-show="rarity === 2">
                <li>2 {{ tradedCardOne }}</li>
                <li>2 {{ tradedCardTwo }}</li>
                <li> 3750 YLDY</li>
            </ul>
            <ul v-show="rarity == 1">
                <li>1 {{ tradedCardOne }}</li>
                <li>1 {{ tradedCardTwo }}</li>
                <li> 3750 YLDY</li>
            </ul>
            </p>
            <p>Available: {{ available }}</p>
            <button v-show="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">3750 YLDY</button>
        </div>
    </div>
    <popup-window v-show="popupTriggers.chooseWallet">
        <h2>Connect Your Wallet</h2>
        <button class="boxShadow" @click="connectWallet('myalgo')">
            MyAlgo
        </button><br>
        <button class="boxShadow" @click="connectWallet('walletconnect')">
            WalletConnect
        </button><br>
        <button class="boxShadow" @click="TogglePopup('chooseWallet')">Cancel</button>
    </popup-window>
    <popup-window v-show="popupTriggers.signTransaction">
        <h2>Please open your wallet app to sign the transaction!</h2>
        <button class="boxShadow" @click="TogglePopup('signTransaction')">Close</button>
    </popup-window>
    <popup-window v-show="popupTriggers.processingTransaction">
        <h2>Transaction processing...</h2>
    </popup-window>
    <popup-window v-show="popupTriggers.transactionSuccessful">
        <h2>Successful! Go check out your new Alchemon!</h2>
        <button class="boxShadow" @click="ReloadWindow()">Close</button>
    </popup-window>
    <popup-window v-show="popupTriggers.transactionFailed">
        <h2>Failed. Please try again.</h2>
        <p style="text-align: left"> {{ getErrorMessage }}</p>
        <button class="boxShadow" @click="TogglePopup('transactionFailed')">Close</button>
    </popup-window>
    <popup-window v-show="popupTriggers.errorOccurred">
        <h2>Unknown Server Error. Please try again.</h2>
        <p style="text-align: left">If this error continues, please contact support.</p>
        <button class="boxShadow" @click="TogglePopup('errorOccured')">Close</button>
    </popup-window>
</template>

<style lang="scss" scoped>
p {
    text-align: center;
}

.nftContainer {
    border-radius: 1%;
    display: inline-block;
    background-color: lightgray;
    margin: 2%;
    vertical-align: top;
}

.nftImage {
    width: 20vw;
    margin: 0%;
}

button {
    padding: 1% 5%;
}

.buttonContainer {
    margin-top: 3%;
    margin-bottom: 5%;
    width: 20vw;
}

@media (max-width: 1100px) {
    .buttonContainer {
        width: 25vw
    }

    .nftImage {
        width: 25vw;
    }
}

@media (max-width: 800px) {
  .buttonContainer {
    height: 40vw;
    width: 35vw;
  }

  .nftImage {
    width: 35vw;
  }

  button {
    padding: 2% 20%;
  }
}

@media (max-width: 650px) {
  .buttonContainer {
    height: 50vw;
    width: 45vw;
  }

  .nftImage {
    width: 45vw;
  }
}

@media (max-width: 500px) {
  .buttonContainer {
    height: 60vw;
    width: 70vw;
  }

  .nftImage {
    width: 70vw;
  }

  button {
    padding: 2% 30%;
  }
}

@media (max-width: 350px) {
  .buttonContainer {
    height: 70vw;
    width: 90vw;
  }

  .nftImage {
    width: 90vw;
  }
}
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import axios from 'axios'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'

import { ref, reactive } from 'vue'
import PopupWindow from './PopupWindow.vue'

import alchemon from '../data/craftandevolve.json'

const alchemons = reactive({})

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com/'
// eslint-disable-next-line no-unused-vars
let signedTxn
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)

const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  errorOccurred: false
})

let errorMessage
let id
let evolved
let tradedCardOne
let tradedCardTwo
let token
let cost
let tradedAddressOne
let tradedAddressTwo
let rarity
let address
let wallet
let quickEvolveResponse

export default {
  components: { PopupWindow },
  props: ['name', 'tradedCardOne', 'tradedCardTwo', 'available', 'set', 'rarity'],
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  computed: {
    getErrorMessage () {
      return errorMessage
    }
  },
  setup () {
    for (const item in alchemon) {
      alchemons[item] = alchemon[item]
    }
  },
  methods: {
    setAlchemon (name) {
      for (const item in alchemons) {
        if (alchemons[item].name === name) {
          console.log(alchemons[item])
          id = alchemons[item].appID
          evolved = alchemons[item].id
          tradedCardOne = alchemons[item].tradedCardOne
          tradedCardTwo = alchemons[item].tradedCardTwo
          token = alchemons[item].alchecoinAssetID
          cost = alchemons[item].requiredAmountOfAlchecoin
          tradedAddressOne = alchemons[item].tradeInOneStoreAddress
          tradedAddressTwo = alchemons[item].tradeInTwoStoreAddress
          rarity = alchemons[item].rarity
          address = localStorage.userAddress
          wallet = localStorage.userWallet
          this.evolveAlchemon()
          break
        }
      }
    },
    async evolveAlchemon () {
      let serializedTxns
      if (!wallet) {
        window.alert('Error: No wallet connected.')
      }
      if (wallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }

      switch (rarity) {
        case 4:
          quickEvolveResponse = await axios.post(`${apiURL}/quickEvolveAlchOne`, {
            customerAddress: address,
            tradeInStoreAddress: tradedAddressOne,
            quickEvolveAlchOneAppID: id,
            evolvedAlchemonAssetID: evolved,
            tradeInAlchemonAssetID: tradedCardOne,
            tradeInAlchemonAssetAmountSent: 2,
            alchecoinAssetID: token,
            requiredAmountOfAlchecoin: cost
          })
          serializedTxns = quickEvolveResponse.data.txns
          break
        case 3:
          // eslint-disable-next-line no-case-declarations
          quickEvolveResponse = await axios.post(`${apiURL}/quickEvolveAlchTwo`, {
            customerAddress: address,
            tradeInOneStoreAddress: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA',
            tradeInTwoStoreAddress: tradedAddressOne,
            quickEvolveAlchTwoAppID: id,
            evolvedAlchemonAssetID: evolved,
            tradeInAlchemonAssetIDOne: tradedCardOne,
            tradeInAlchemonOneAmount: 1,
            tradeInAlchemonAssetIDTwo: tradedCardOne,
            tradeInAlchemonTwoAmount: 1,
            alchecoinAssetID: token,
            requiredAmountOfAlch: cost
          })
          serializedTxns = quickEvolveResponse.data.txns
          break
        case 2:
          // eslint-disable-next-line no-case-declarations
          quickEvolveResponse = await axios.post(`${apiURL}/quickEvolveAlchThree`, {
            customerAddress: address,
            tradeInOneStoreAddress: tradedAddressOne,
            tradeInTwoStoreAddress: tradedAddressTwo,
            otherAccount: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA',
            quickEvolveAlchThreeAppID: id,
            evolvedAlchemonAssetID: evolved,
            tradeInAlchemonAssetIDOne: tradedCardOne,
            tradeInAlchemonOneAmount: 1,
            tradeInAlchemonAssetIDTwo: tradedCardTwo,
            tradeInAlchemonTwoAmount: 1,
            amountSentToOther: 1,
            alchecoinAssetID: token,
            requiredAmountOfAlch: cost
          })
          serializedTxns = quickEvolveResponse.data.txns
          break
        case 1:
          quickEvolveResponse = await axios.post(`${apiURL}/quickEvolveAlchTwo`, {
            customerAddress: address,
            tradeInOneStoreAddress: tradedAddressOne,
            tradeInTwoStoreAddress: tradedAddressTwo,
            quickEvolveAlchTwoAppID: id,
            evolvedAlchemonAssetID: evolved,
            tradeInAlchemonAssetIDOne: tradedCardOne,
            tradeInAlchemonOneAmount: 1,
            tradeInAlchemonAssetIDTwo: tradedCardTwo,
            tradeInAlchemonTwoAmount: 1,
            alchecoinAssetID: 226701642,
            requiredAmountOfAlch: 3750000000
          })
          serializedTxns = quickEvolveResponse.data.txns
          break
      }
      let signedTxns
      switch (wallet) {
        case 'myalgo':
          signedTxns = await myAlgoConnect.signTransaction(serializedTxns)
          if (Array.isArray(signedTxns)) {
            signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
          } else {
            signedTxn = Buffer.from(signedTxns.blob).toString('base64')
          }
          break
        case 'walletconnect':
          // eslint-disable-next-line no-case-declarations
          const txnsToSign = serializedTxns.map(txn => {
            const encodedTxn = txn
            return {
              txn: encodedTxn
            }
          })
          // eslint-disable-next-line no-case-declarations
          const requestParams = [txnsToSign]
          // eslint-disable-next-line no-case-declarations
          const request = formatJsonRpcRequest('algo_signTxn', requestParams)
          try {
            signedTxn = await walletConnector.sendCustomRequest(request)
          } catch (error) {
            errorMessage = error.message
            this.TogglePopup('transactionFailed')
            this.TogglePopup('signTransaction')
          }
          this.TogglePopup('signTransaction')
          break
      }

      if (signedTxn) {
        this.TogglePopup('processingTransaction')
        try {
          const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
            txn: signedTxn
          })
          if (sendTxnResponse.status === 200) {
            if (sendTxnResponse.data.txnId) {
              this.TogglePopup('transactionSuccessful')
            } else if (sendTxnResponse.data.message) {
              errorMessage = sendTxnResponse.data.message
              this.TogglePopup('transactionFailed')
            }
          }
        } catch (error) {
          this.TogglePopup('errorOccured')
        }
        this.TogglePopup('processingTransaction')
      }
    },
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    ReloadWindow () {
      window.location.reload()
    }
  }
}
</script>
