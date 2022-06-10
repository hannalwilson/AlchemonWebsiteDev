<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="require(`@/assets/alchemon/${name}.png`)" v-if="type === 'alchemon'" class="nftImage">
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
    </div>
  </div>
  <popup-window v-if="popupTriggers.chooseWallet">
    <h2>Connect Your Wallet</h2>
    <button class="boxShadow" @click="purchaseItem('myalgo')">
      MyAlgo
    </button>
    <button class="boxShadow" @click="purchaseItem('walletconnect')">
      WalletConnect
    </button>
    <button class="boxShadow" @click="TogglePopup('chooseWallet')">Cancel</button>
  </popup-window>
  <popup-window v-if="popupTriggers.makePurchase">
    <h2>Confirm Purchase</h2>
    <button class="boxShadow" @click="buyWithAlgo">Buy NFT</button>
    <button class="boxShadow" @click="TogglePopup('makePurchase')">Cancel</button>
  </popup-window>
  <popup-window v-if="popupTriggers.signTransaction">
    <h2>Please open your wallet app to sign the transaction!</h2>
    <button class="boxShadow" @click="TogglePopup('signTransaction')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionSuccessful">
    <h2>Transaction successful!</h2>
    <button class="boxShadow" @click="TogglePopup('transactionSuccessful')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionFailed">
    <h2>Transaction failed</h2>
    <button class="boxShadow" @click="TogglePopup('transactionFailed')">Close</button>
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
let address
let account
let userWallet
let alchemonId
let alchemonCost
let alchemonType
let payWithAlgoResponse
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
  773065518: 773120982
}
const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false
})
export default {
  components: { PopupWindow },
  props: ['name', 'id', 'amount', 'type', 'cost'],
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  methods: {
    setAlchemonId (id, cost, type) {
      alchemonId = id
      alchemonCost = cost
      alchemonType = type
      console.log(address)
      if (address !== undefined) {
        this.TogglePopup('makePurchase')
      } else {
        this.TogglePopup('chooseWallet')
      }
    },
    TogglePopup (trigger) {
      if (address !== undefined && trigger === 'chooseWallet') {
        popupTriggers.value.makePurchase = !popupTriggers.value.makePurchase
      }
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    async buyWithAlgo () {
      this.TogglePopup('makePurchase')
      if (address === undefined && walletConnector.connected) {
        address = walletConnector.accounts[0]
      }
      switch (alchemonType) {
        case 'alchemon':
          payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
            customerAddress: address,
            itemShopAppId: itemIds[alchemonId],
            forSale: parseInt(alchemonId),
            requestedAmount: 1,
            microalgoAmount: (1000000 * alchemonCost)
          })
          break
        case 'art':
          payWithAlgoResponse = await axios.post(`${apiURL}/payWithToken`, {
            customerAddress: address,
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
          this.TogglePopup('signTransaction')
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
      try {
        const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
          txn: signedTxn
        })
        if (sendTxnResponse.status === 200) {
          this.TogglePopup('transactionSuccessful')
        }
      } catch {
        this.TogglePopup('transactionFailed')
      }
    },
    async purchaseItem (wallet) {
      // eslint-disable-next-line dot-notation
      if (popupTriggers.value['chooseWallet'] === true) {
        this.TogglePopup('chooseWallet')
      }
      userWallet = wallet
      switch (wallet) {
        case 'myalgo':
          account = await myAlgoConnect.connect()
          address = account[0].address
          break
        case 'walletconnect':
          // Check if connection is already established
          if (!walletConnector.connected) {
            // create new session
            // eslint-disable-next-line no-undef
            walletConnector.createSession()
          }
          // Subscribe to connection events
          walletConnector.on('connect', (error, payload) => {
            if (error) {
              throw error
            }
            address = walletConnector.accounts[0]
          })

          walletConnector.on('session_update', (error, payload) => {
            if (error) {
              throw error
            }
            address = walletConnector.accounts[0]
          })

          walletConnector.on('disconnect', (error, payload) => {
            if (error) {
              throw error
            }
            address = undefined
          })
      }
      this.TogglePopup('makePurchase')
    }
  }
}
</script>
