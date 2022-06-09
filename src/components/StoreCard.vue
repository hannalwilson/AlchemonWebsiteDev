<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="require(`@/assets/cards/${name}.png`)" class="nftImage">
    </div>
    <div class="buttonContainer">
      <p> {{ name }}</p>
      <p> {{ id }}</p>
      <p> Available: {{ amount}} </p>
      <button @click="TogglePopup('chooseWallet')" class="boxShadow nftButton">5 ALGO</button>
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
</template>

<style lang="scss" scoped>
.nftContainer {
    border-radius: 1%;
    display: inline-block;
    background-color: lightgray;
    margin: 2%;
}
.imgContainer {
  border-radius: 1% 1% 0% 0%;
}
.nftImage {
    width: 20vw;
    margin: 0%;
}
.buttonContainer {
    margin: 3%;
    margin-bottom: 5%;
}
button {
    font-family: poppins;
    text-align: center;
    background-color: orange;
    border: 2px solid orange;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    padding: 0 5%;
    margin: 1% 4%;
}
button:hover {
  background-color:darkblue;
  border: 2px solid orange;
  color: orange;
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
let signedTxn
let address
let account
let userWallet
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)
const alchemonIds = {
  490139078: 753855088,
  490146814: 753855200,
  490141855: 753859901,
  493271743: 753859975,
  744534630: 768104426,
  744531764: 768104851,
  744551347: 768104739,
  744527019: 768104603
}
const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false
})
export default {
  components: { PopupWindow },
  props: ['name', 'id', 'amount'],
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    async buyWithAlgo () {
      this.TogglePopup('makePurchase')
      if (address === undefined && walletConnector.connected) {
        address = walletConnector.accounts[0]
      }
      console.log(address)
      const payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
        customerAddress: address,
        itemShopAppId: alchemonIds[this.id],
        forSale: parseInt(this.id),
        requestedAmount: 1,
        microalgoAmount: 5000000
      })
      const serializedTxns = payWithAlgoResponse.data.txns
      console.log(serializedTxns)
      let signedTxns
      switch (userWallet) {
        case 'myalgo':
          signedTxns = await myAlgoConnect.signTransaction(serializedTxns)
          console.log(signedTxns)
          if (Array.isArray(signedTxns)) {
            signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
          } else {
            signedTxn = Buffer.from(signedTxns.blob).toString('base64')
          }
          console.log(signedTxn)
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
          console.log(txnsToSign)
          // eslint-disable-next-line no-case-declarations
          const requestParams = [txnsToSign]
          // eslint-disable-next-line no-case-declarations
          const request = formatJsonRpcRequest('algo_signTxn', requestParams)
          console.log(request)
          signedTxn = await walletConnector.sendCustomRequest(request)
          console.log(signedTxn)
          break
      }
      try {
        const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
          txn: signedTxn
        })
        if (sendTxnResponse.status === 200) {
          window.alert('Transaction Successful!')
        }
      } catch {
        window.alert('Transaction Failed.')
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
