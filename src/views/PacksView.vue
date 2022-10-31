<template>
    <div class="content">
        <button @click="openPack()">Initiate Transactions</button>
    </div>
    <popup-window v-if="popupTriggers.signTransaction">
        <h2>Please open your wallet app to sign the transaction!</h2>
    </popup-window>
    <popup-window v-if="popupTriggers.processingTransaction">
        <h2>Transaction processing...</h2>
    </popup-window>
    <popup-window v-if="popupTriggers.transactionSuccessful">
        <h2>Transaction successful!</h2>
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
.content {
    margin: 5%;
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

const apiURL = 'https://7fod8a9he1.execute-api.us-east-1.amazonaws.com'

let errorMessage

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
  components: { PopupWindow },
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

      const packTradeInResponse = await axios.post(`${apiURL}/packTradeIn`, {
        userAddress: userAddress
      })

      console.log(packTradeInResponse)
      const serializedTxns = packTradeInResponse.data.txns
      const cards = packTradeInResponse.data.cards

      console.log(cards)

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
          try {
            console.log('here')
            signedTxn = await walletConnector.sendCustomRequest(request)
          } catch (error) {
            console.log(error)
            errorMessage = error.message
            this.TogglePopup('transactionFailed')
            this.TogglePopup('signTransaction')
          }
          console.log(signedTxn)
          break
      }

      // const finalSignedTxn = signedTxn.concat(cards)

      if (signedTxn) {
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
          console.log(error)
          this.TogglePopup('errorOccured')
        }
        this.TogglePopup('processingTransaction')
      }
    }
  }
}

</script>
