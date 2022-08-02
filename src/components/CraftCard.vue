<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${name}.png`" class="nftImage">
    </div>

    <div class="buttonContainer">
      <p> Craft a {{ name }}</p>
      <p>You need: {{ amount }} {{ tradedCardOne }} + {{ amount }} {{ tradedCardTwo }} + 250 Alch</p>
      <p>Available: {{ available }}</p>
      <button v-if="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">250 ALCH</button>
    </div>
  </div>
  <popup-window v-if="popupTriggers.chooseWallet">
    <h2>Connect Your Wallet</h2>
    <button class="boxShadow" @click="connectWallet('myalgo')">
      MyAlgo
    </button><br>
    <button class="boxShadow" @click="connectWallet('walletconnect')">
      WalletConnect
    </button><br>
    <button class="boxShadow" @click="TogglePopup('chooseWallet')">Cancel</button>
  </popup-window>
  <popup-window v-if="popupTriggers.signTransaction">
    <h2>Please open your wallet app to sign the transaction!</h2>
    <button class="boxShadow" @click="TogglePopup('signTransaction')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.processingTransaction">
    <h2>Transaction processing...</h2>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionSuccessful">
    <h2>Successful! Go check out your new Alchemon!</h2>
    <button class="boxShadow" @click="TogglePopup('transactionSuccessful')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionFailed">
    <h2>Failed. Please try again.</h2>
    <p style="text-align: left"> {{ getErrorMessage }}</p>
    <button class="boxShadow" @click="TogglePopup('transactionFailed')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.errorOccured">
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
    text-align: center;
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
    height: 25vw;
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
    height: 30vw;
    width: 45vw;
  }
    .nftImage {
      width: 45vw;
    }
}

@media (max-width: 500px) {
  .buttonContainer {
    height: 35vw;
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
      height: 40vw;
      width: 90vw;
    }
    .nftImage {
      width: 90vw;
    }
}

@media (max-width: 350px) {
  .buttonContainer {
      height: 50vw;
    }

}

// @media (max-width: 1100px) {
//   .nftContainer {
//     height: 485px;
//   }
// }
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import axios from 'axios'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'

import { ref } from 'vue'
import PopupWindow from './PopupWindow.vue'

const apiURL = 'https://l84jesjbd4.execute-api.us-east-1.amazonaws.com/'
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
const tradeInAddresses = {
  527475282: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // zipacute
  527477069: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // hailstorm
  527479654: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // daggerpult
  527481591: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // likachomp
  527483715: 'L6G7FT6UOC5B4OJ37GVN37HD2RMTSXIXAAGNMFW2IKSTPQWQ4S56ZTAH5I', // voltstorm
  527485015: 'XGE7HBT3ORNSIF2V5TLE4BN4T3LK2UZKAZJFZIFV7H3FFO4WAJ5SDXZHFQ', // chomperz
  744528583: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // mmonolyth
  744530969: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // arakumo
  744533302: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // torrment
  744536686: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // incydious
  744538073: 'T2L4WBMXBGLLW5TFYH76QVQYBJ4LCKV4TSFRGOMSOHMOHTT6OSIA4GFMRM', // araknolyth
  744539419: 'SYFVB77GVQKYHCX34UVJ6HVV4TUIUQKC4UGRCQDEXRGJNVPZ74BQNRC4CY' // torcydious
}

const smartContractInfo = {
  Voltstorm: {
    appID: 779101008,
    evolvedAlchemon: 527483715,
    tradedAlchemonOne: 527475282,
    tradedAlchemonTwo: 527477069,
    amount: 2
  },
  Chomperz: {
    appID: 779102943,
    evolvedAlchemon: 527485015,
    tradedAlchemonOne: 527479654,
    tradedAlchemonTwo: 527481591,
    amount: 2
  },
  Cyclostorm: {
    appID: 101167721,
    evolvedAlchemon: 67960303,
    tradedAlchemonOne: 67960230,
    tradedAlchemonTwo: 67960252,
    amount: 1
  },
  Araknolyth: {
    appID: 780911874,
    evolvedAlchemon: 744538073,
    tradedAlchemonOne: 744530969,
    tradedAlchemonTwo: 744528583,
    amount: 2
  },
  Torcydious: {
    appID: 780912756,
    evolvedAlchemon: 744539419,
    tradedAlchemonOne: 744536686,
    tradedAlchemonTwo: 744533302,
    amount: 2
  },
  Araknadevil: {
    appID: 780915147,
    evolvedAlchemon: 744540333,
    tradedAlchemonOne: 744538073,
    tradedAlchemonTwo: 744539419,
    amount: 1
  }
}

let errorMessage
export default {
  components: { PopupWindow },
  props: ['name', 'tradedCardOne', 'tradedCardTwo', 'amount', 'available'],
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
  methods: {
    setAlchemon (name) {
      const id = smartContractInfo[name].appID
      const evolved = smartContractInfo[name].evolvedAlchemon
      const tradedOne = smartContractInfo[name].tradedAlchemonOne
      const tradedTwo = smartContractInfo[name].tradedAlchemonTwo
      const amount = smartContractInfo[name].amount
      const address = localStorage.userAddress
      const wallet = localStorage.userWallet
      this.craftAlchemon(id, evolved, tradedOne, tradedTwo, amount, address, wallet)
    },
    async craftAlchemon (appID, evolvedAlchemon, tradedAlchemonOne, tradedAlchemonTwo, amount, address, wallet) {
      const id = appID
      const evolved = evolvedAlchemon
      const tradedOne = tradedAlchemonOne
      const tradedTwo = tradedAlchemonTwo
      if (!wallet) {
        window.alert('Error: No wallet connected.')
      }
      if (wallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
      const quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveAlchTwo`, {
        customerAddress: address,
        tradeInOneStoreAddress: tradeInAddresses[tradedOne],
        tradeInTwoStoreAddress: tradeInAddresses[tradedTwo],
        quickEvolveAlchTwoAppID: id,
        evolvedAlchemonAssetID: evolved,
        tradeInAlchemonAssetIDOne: tradedOne,
        tradeInAlchemonOneAmount: amount,
        tradeInAlchemonAssetIDTwo: tradedTwo,
        tradeInAlchemonTwoAmount: amount,
        alchecoinAssetID: 78127598,
        requiredAmountOfAlch: 250
      })
      const serializedTxns = quickEvolveOneResponse.data.txns
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
    }
  }
}
</script>
