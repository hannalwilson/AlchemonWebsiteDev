<template>
    <div class="content">
      <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/Pack.png" class="pack boxShadow"><br>
      <button id="submitbutton" @click="openPack()" v-bind:disabled="!clicked">Open Pack</button>
      <br>Total Number of Packs: {{ numberOfPacks }}
    </div>
    <popup-window v-if="popupTriggers.signTransaction">
        <h2>Please open your wallet app to sign the transaction!</h2>
    </popup-window>
    <popup-window v-if="popupTriggers.processingTransaction">
        <h2>Transaction processing...</h2>
    </popup-window>
    <popup-window v-if="popupTriggers.transactionSuccessful" class="cardPopup">
      <div class="confettiContainer">
        <ConfettiExplosion :particleCount="250" class="confetti"/>
        <ConfettiExplosion :particleCount="250" class="confetti" />
      </div>
      <h2>Congratulations!</h2>
      <h4>Here are your new cards:</h4>
      <div class="packContents">
        <img v-for="image in images" v-bind:key="image" :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${image}.png`">
      </div><br>
        <button class="boxShadow" @click="ReloadWindow()">Close</button>
    </popup-window>
    <popup-window v-if="popupTriggers.transactionFailed">
        <h2>Failed. Please try again.</h2>
        <p style="text-align: left"> {{ getErrorMessage }}</p>
        <button class="boxShadow" @click="TogglePopup('transactionFailed'); ReloadWindow()">Close</button>
    </popup-window>
    <popup-window v-if="popupTriggers.errorOccured">
        <h2>Unknown Server Error. Please try again.</h2>
        <p style="text-align: left">If this error continues, please contact support.</p>
        <button class="boxShadow" @click="TogglePopup('errorOccured'); ReloadWindow()">Close</button>
    </popup-window>
</template>

<style lang="scss" scoped>
.content {
    margin: 5%;
}
img {
  max-width: 250px;

}
.packContents {
  display: contents;
  img {
    padding: 1px;
    max-width: 200px;
  }
}
.cardPopup {
  overflow-y: scroll;
  overflow-x: hidden;
}
.confettiContainer {
  display: flex;
  justify-content: space-between;
}
.pack {
  border: 5px solid black;
}
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import PopupWindow from '../components/PopupWindow'
import { ref } from 'vue'
import axios from 'axios'
import ConfettiExplosion from 'vue-confetti-explosion'

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'

let errorMessage
let numberOfPacks
const images = []

const popupTriggers = ref({
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  processingTransaction: false,
  errorOccured: false
})

const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)

let signedTxn

export default {
  created () {
    const algosdk = require('algosdk')
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)
    client.accountInformation(localStorage.userAddress).do().then(response => {
      for (const userAsset of response.assets) {
        if (userAsset['asset-id'] === 936555917) {
          this.numberOfPacks = userAsset.amount
        } else {
          this.numberOfPacks = 0
        }
      }
    })
  },
  components: { PopupWindow, ConfettiExplosion },
  data () {
    return {
      PopupWindow,
      popupTriggers,
      errorMessage,
      numberOfPacks,
      images,
      clicked: true
    }
  },
  computed: {
    getErrorMessage () {
      return errorMessage
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },

  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    ReloadWindow () {
      window.location.reload()
    },
    async blankSigner () {
      return [new Uint8Array()]
    },
    async openPack () {
      const userWallet = localStorage.userWallet
      const userAddress = localStorage.userAddress
      if (!userWallet) {
        window.alert('Error: No wallet connected.')
      }
      if (userWallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
      this.clicked = false

      const packTradeInResponse = await axios.post(`${apiURL}/packTradeIn`, {
        userAddress: userAddress
      })

      const serializedTxns = packTradeInResponse.data.txns
      const cards = packTradeInResponse.data.cards

      for (const index in packTradeInResponse.data.contents) {
        images.push(packTradeInResponse.data.contents[index])
      }

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
            this.TogglePopup('signTransaction')
          } catch (error) {
            console.log(error)
            errorMessage = error.message
            this.TogglePopup('transactionFailed')
            this.TogglePopup('signTransaction')
          }
          console.log(signedTxn)
          break
      }

      if (signedTxn) {
        this.TogglePopup('processingTransaction')
        try {
          const sendTxnResponse = await axios.post(`${apiURL}/signPackTradeIn`, {
            unsignedCustodialTxns: cards,
            serializedSignedUserTxns: signedTxn
          })
          console.log(sendTxnResponse.data)
          if (sendTxnResponse.status === 200) {
            this.TogglePopup('transactionSuccessful')
          } else {
            errorMessage = sendTxnResponse.data
            this.TogglePopup('transactionFailed')
          }
        } catch (error) {
          errorMessage = error
          this.TogglePopup('transactionFailed')
        }
        this.TogglePopup('processingTransaction')
      }
    }
  }
}

</script>
