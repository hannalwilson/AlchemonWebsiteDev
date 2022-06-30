<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="require(`@/assets/alchemon/${name}.png`)" v-if="type === 'alchemon'" class="nftImage">
      <img :src="require(`@/assets/alchibilities/${name}.png`)" v-if="type === 'alchibilities'" class="nftImage">
      <video :src="require(`@/assets/art/${name}.mp4`)" v-if="type === 'art'" class="nftImage" autoplay muted loop
        playsinline></video>
    </div>
    <div class="buttonContainer">
      <p> {{ name }}</p>
      <p> {{ id }}</p>
      <p> Available: {{ amount }} </p>
      <button @click="setAlchemonId(id, cost, type)" class="boxShadow nftButton"
        v-if="type === 'alchemon'">{{ cost }} ALGO</button>
      <button @click="setAlchemonId(id, cost, type)" class="boxShadow nftButton"
        v-if="type === 'art'">{{ cost }} ALCH</button>
        <button @click="setAlchemonId(id, cost, type)" class="boxShadow nftButton"
        v-if="type === 'alchibilities'">{{ cost }} ALCH</button>
    </div>
  </div>
  <popup-window v-if="popupTriggers.makePurchase">
    <h2>Confirm Purchase</h2>
    <button class="boxShadow" @click="buyWithAlgo">Buy NFT</button>
    <button class="boxShadow" @click="TogglePopup('makePurchase')">Cancel</button>
  </popup-window>
  <popup-window v-if="popupTriggers.signTransaction">
    <h2>Please open your wallet app to sign the transaction!</h2>
  </popup-window>
    <popup-window v-if="popupTriggers.processingTransaction">
    <h2>Transaction processing...</h2>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionSuccessful">
    <h2>Transaction successful!</h2>
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

const apiURL = 'https://l84jesjbd4.execute-api.us-east-1.amazonaws.com'
// eslint-disable-next-line no-unused-vars
let signedTxn

let alchemonId
let alchemonCost
let alchemonType
let payWithAlgoResponse
let userAddress
let userWallet
let errorMessage
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)
const itemIds = {
  490139078: 753855088,
  490146814: 753855200,
  490141855: 753859901,
  493271743: 753859975,
  744534630: 768104426,
  744531764: 768104851,
  744551347: 768104739,
  744527019: 768104603,
  773003623: 773118898,
  773007053: 773119117,
  773009639: 773119235,
  773012590: 773119381,
  773014307: 773119511,
  773017551: 773119670,
  773019831: 773119807,
  773021991: 773119937,
  773024860: 773120073,
  773028133: 773120220,
  773029596: 773120315,
  773031968: 773120532,
  773060393: 773120705,
  773062744: 773120833,
  773065518: 773120982, // end of mainnet
  96558356: 96562409,
  96558278: 96562430,
  96558168: 96562441,
  96558068: 96562455,
  96557972: 96562468,
  96557866: 96562483,
  96557782: 96562499,
  96557521: 96562512
}
const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  processingTransaction: false,
  errorOccured: false
})
export default {
  components: { PopupWindow },
  props: ['name', 'id', 'amount', 'type', 'cost'],
  data () {
    return {
      PopupWindow,
      popupTriggers,
      errorMessage
    }
  },
  computed: {
    getErrorMessage () {
      return errorMessage
    }
  },
  methods: {
    setAlchemonId (id, cost, type) {
      alchemonId = id
      alchemonCost = cost
      alchemonType = type
      userAddress = localStorage.userAddress
      userWallet = localStorage.userWallet
      this.TogglePopup('makePurchase')
      console.log(userAddress)
      console.log(userWallet)
    },
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    async buyWithAlgo () {
      this.TogglePopup('makePurchase')
      if (userWallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
      switch (alchemonType) {
        case 'alchemon':
          payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
            customerAddress: userAddress,
            itemShopAppId: itemIds[alchemonId],
            forSale: parseInt(alchemonId),
            requestedAmount: 1,
            microalgoAmount: (1000000 * alchemonCost)
          })
          break
        case 'alchibilities':
        case 'art':
          payWithAlgoResponse = await axios.post(`${apiURL}/payWithToken`, {
            customerAddress: userAddress,
            itemShopAppId: itemIds[alchemonId],
            paymentToken: 78127598,
            forSale: parseInt(alchemonId),
            requestedAmount: 1,
            paymentTokenAmount: alchemonCost
          })
          break
      }

      const serializedTxns = payWithAlgoResponse.data.txns
      let signedTxns
      switch (userWallet) {
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
          signedTxn = await walletConnector.sendCustomRequest(request)
          break
      }
      if (userWallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
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
  }
}
</script>
