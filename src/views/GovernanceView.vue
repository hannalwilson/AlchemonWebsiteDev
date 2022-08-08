<template>
  <div>
      <h1>GOVERNANCE</h1>
    <div class="buttonContainer">
      <button @click="getAlchecoinWallets">Get Wallets</button>
      <button @click="castVote('A')">VOTE A</button>
      <button @click="castVote('B')">VOTE B</button>
    </div>
    <popup-window v-if="popupTriggers.signTransaction">
      <h2>Please open your wallet app to sign the transaction!</h2>
    </popup-window>
    <popup-window v-if="popupTriggers.processingTransaction">
      <h2>Transaction processing...</h2>
    </popup-window>
    <popup-window v-if="popupTriggers.transactionSuccessful">
      <h2>Transaction successful!</h2>
      <p>Your vote has been recorded. Thank you for participating in Alchemon governance!</p>
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
  </div>
</template>

<style lang="scss" scoped>

.buttonContainer {
  margin: 5%;
}
img {
  width: 15%;
}
h1 {
    background-color: #007bff;
  margin: 0%;
  font-size: 10vw;
  color: #e6ad10;
  -webkit-text-stroke: 1px rgb(22, 22, 54);
  padding-top: 5%;
}
</style>

<script>
import { reactive, ref } from 'vue'
import algosdk from 'algosdk'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'
import axios from 'axios'
import PopupWindow from '../components/PopupWindow.vue'

const token = ''
const server = 'https://mainnet-api.algonode.cloud'
const port = ''
const client = new algosdk.Algodv2(token, server, port)

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'

const popupTriggers = ref({
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  processingTransaction: false,
  errorOccured: false
})

const userBalances = reactive({})

let errorMessage

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
    async getAlchecoinWallets () {
      let nexttoken = ''
      let numtx = 1;
      // loop until there are no more transactions in the response
      // for the limit(max limit is 1000  per request)
      (async () => {
        const minAmount = 1
        const limit = 1000
        while (numtx > 0) {
          // execute code as long as condition is true
          const nextPage = nexttoken
          const response = await client.lookupAssetBalances(310014962)
            .limit(limit)
            .currencyGreaterThan(minAmount)
            .nextToken(nextPage).do()
          const transactions = response.balances
          numtx = transactions.length
          if (numtx > 0) {
            nexttoken = response['next-token']
            for (const key of transactions) {
              userBalances[key.address] = key.amount
            }
          }
        }
      })().catch(e => {
        console.log(e)
        console.trace()
      })
    },
    async castVote (userVote) {
      const userWallet = localStorage.userWallet

      if (userWallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
      const myAlgoConnect = new MyAlgoConnect()
      const walletConnector = new WalletConnect(
        {
          bridge: 'https://bridge.walletconnect.org', // Required
          qrcodeModal: QRCodeModal
        }
      )

      const params = await client.getTransactionParams().do()

      const receiver = 'KP7DMA2YSVSOCKAA2QBUWNFFEWB47EJZKQ6E74TXGG5GJLXSTSO7VLI3YE'
      const enc = new TextEncoder()
      const note = enc.encode(userVote)
      const amount = 0
      const sender = localStorage.userAddress
      let signedTxn
      const voteTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: sender,
        to: receiver,
        amount: amount,
        note: note,
        suggestedParams: params
      })
      let signedTxns
      switch (userWallet) {
        case 'myalgo':
          signedTxns = await myAlgoConnect.signTransaction(voteTxn)
          if (Array.isArray(signedTxns)) {
            signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
          } else {
            signedTxn = Buffer.from(signedTxns.blob).toString('base64')
          }
          break
        case 'walletconnect':
          // eslint-disable-next-line no-case-declarations
          const voteTxns = [voteTxn]
          // eslint-disable-next-line no-case-declarations
          const txnsToSign = voteTxns.map(txn => {
            const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString('base64')
            return {
              txn: encodedTxn
            }
          })
          console.log(txnsToSign)
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
    sendAlchecoinAmounts () {

    }
  }
}
</script>
