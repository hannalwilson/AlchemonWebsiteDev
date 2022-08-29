<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${name}.png`" class="nftImage">
    </div>

    <div class="buttonContainer" v-if="set !== 'Community'">
      <p> Craft a {{ name }}</p>
      <p>You need: 1 {{ tradedCardOne }} + 1 {{ tradedCardTwo }} + 250 ALCH</p>
      <p>Available: {{ available }}</p>
      <button v-if="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">250 ALCH</button>
    </div>
    <div class="buttonContainer" v-if="set === 'Community'">
      <p> Craft a {{ name }}</p>
      <p>You need: 1 {{ tradedCardOne }} + 1 {{ tradedCardTwo }} + 3750 YLDY</p>
      <p>Available: {{ available }}</p>
      <button v-if="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">3750 YLDY</button>
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
    <button class="boxShadow" @click="ReloadWindow()">Close</button>
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
const tradeInAddresses = {
  798985842: 'F2JYVYEKBKBFPCXDYHI4NH7UAIKA62JESRWTOHEASOWJWR4FWSILT7OFYE', // ghostbark
  798986475: 'FSWI456BW23UHP3BZAPSVHNCYJGDGC7BHHFXEOACRZQ5XFBICZ4QDO3MCE' // torchwondo
}

const smartContractInfo = {
  Dreadwing: {
    appID: 852317796,
    evolvedAlchemon: 798987161,
    tradedAlchemonOne: 798985842,
    tradedAlchemonTwo: 798986475,
    amount: 1
  }
}

let errorMessage
export default {
  components: { PopupWindow },
  props: ['name', 'tradedCardOne', 'tradedCardTwo', 'amount', 'available', 'set'],
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
      console.log(smartContractInfo)
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
        alchecoinAssetID: 226701642,
        requiredAmountOfAlch: 3750
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
              window.location.reload()
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
