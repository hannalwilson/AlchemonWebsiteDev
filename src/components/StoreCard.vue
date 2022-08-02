<template>
  <div class="nftContainer boxShadow">
    <span v-if="hover" class="itemDescription">{{ description }}</span>
    <div class="imgContainer" @mouseover="hover = true" @mouseleave="hover = false">
      <img :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${name}.png`"
        v-if="type === 'alchemon'" class="nftImage">
      <img
        :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchebilities/${name.replace(/\s+/g, '')}.png`"
        v-if="type === 'alchebilities'" class="nftImage">
      <video :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/art/${name}.mp4`"
        v-if="type === 'art'" class="nftImage" autoplay muted loop playsinline></video>
    </div>
    <div class="buttonContainer">
      <p> {{ name }}</p>
      <p> {{ id }}</p>
      <p> Available: {{ amount }} </p>
      <button @click="setAlchemonId(id, cost, type)" class="boxShadow nftButton"
        v-if="type === 'alchemon' && amount > 0">{{ cost }}
        ALGO</button>
      <button @click="setAlchemonId(id, cost, type)" class="boxShadow nftButton" v-if="type === 'art' && amount > 0">{{
      cost }}
        ALCH</button>
      <button @click="setAlchemonId(id, cost, type)" class="boxShadow nftButton"
        v-if="type === 'alchebilities' && amount > 0">{{ cost
        }} ALCH</button>
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

.itemDescription {
  position: absolute;
  background-color: darkgray;
  padding: 1%;
  display: inline-flex;
  border-radius: 10px;
  margin: 1%;
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

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
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
  773065518: 773120982,
  799720185: 800651534,
  799720875: 800651706,
  799721646: 800651835,
  799722298: 800651976,
  799723642: 800652129,
  799725137: 800652244,
  799725874: 800652395,
  799726595: 800652510,
  799727884: 800652612,
  799728466: 800652730
}
const popupTriggers = ref({
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  processingTransaction: false,
  errorOccured: false
})
export default {
  components: { PopupWindow },
  props: ['name', 'id', 'amount', 'type', 'cost', 'description'],
  data () {
    return {
      PopupWindow,
      popupTriggers,
      errorMessage,
      hover: false
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
    },
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    async buyWithAlgo () {
      this.TogglePopup('makePurchase')
      if (!userWallet) {
        window.alert('Error: No wallet connected.')
      }
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
        case 'alchebilities':
        case 'art':
          payWithAlgoResponse = await axios.post(`${apiURL}/payWithToken`, {
            customerAddress: userAddress,
            itemShopAppId: itemIds[alchemonId],
            paymentToken: 310014962,
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
    }
  }
}
</script>
