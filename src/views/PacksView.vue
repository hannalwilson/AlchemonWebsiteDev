<template>
    <div class="content">
        <button @click="packTransactions()">Initiate Transactions</button>
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
import { Algodv2, Indexer, makeAssetTransferTxnWithSuggestedParamsFromObject, AtomicTransactionComposer, encodeUnsignedTransaction } from 'algosdk'
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

// Connect your client
const token = { 'X-API-Key': 'unD5uuW8C186BFO7Z9KkC5JNCuPVE3Wb8lkQnDGT' }
const algodServer = 'https://testnet-algorand.api.purestake.io/ps2'
const indexerServer = 'https://testnet-algorand.api.purestake.io/idx2'
const port = ''
const algodClient = new Algodv2(token, algodServer, port)
const indexerClient = new Indexer(token, indexerServer, port)

const alchemon = [
  67959959, // venoreaper
  67959931, // demoreaper
  67959908, // venafrost
  67959895, // demolisher
  67959885, // demolite
  67959863, // demo
  67959801, // mantireaper
  67959779, // mantigrip
  67959763, // manti
  67959735, // frostbite
  67959715, // icesaber
  67959685, // sable
  67959665, // venatrix
  67959648, // ventar
  67959614 // vena
]

const rares = [67959895, 67959801, 67959735, 67959665]

const packContents = {}

const userWallet = 'walletconnect'

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
    async packTransactions () {
      await this.getPackContents()
      try {
        // Construct the transaction
        const params = await algodClient.getTransactionParams().do()

        const tradegroup = new AtomicTransactionComposer()

        // trading in pack transaction
        const cardAccount = 'GVX33TKM6W6K367PEMHP4UZOF4JAHQUJJ2TTO7S2UHNJ4HRCN6LVQKBMRU'
        const packAccount = 'QTOCX5EVIH73V5QSO5TXEHZW2WW7EUYIVLBLYDBLFO4MSXXBBDY6RVWZ2E'
        const enc = new TextEncoder()
        const note = enc.encode('Pack Trade-In')
        const amount = 1
        const userAccount = 'T3TAUMOFPLHY2WAOTCDL7QVWMMXZVFN7FOPGNFI44N2ZXCAHATINDIZG3M'
        const packTxn = {
          txn: makeAssetTransferTxnWithSuggestedParamsFromObject({
            from: userAccount,
            to: packAccount,
            amount: amount,
            note: note,
            assetIndex: 67960172, // lika
            suggestedParams: params
          }),
          signer: this.blankSigner
        }
        tradegroup.addTransaction(packTxn)

        // opt-in transactions
        for (const item in packContents) {
          const id = Number(item)
          tradegroup.addTransaction({
            txn: makeAssetTransferTxnWithSuggestedParamsFromObject({
              from: userAccount,
              to: userAccount,
              amount: 0,
              assetIndex: id,
              suggestedParams: params
            }),
            signer: this.blankSigner
          })
        }

        // send cards transactions
        for (const item in packContents) {
          const id = Number(item)
          tradegroup.addTransaction({
            txn: makeAssetTransferTxnWithSuggestedParamsFromObject({
              from: cardAccount,
              to: userAccount,
              amount: packContents[item],
              assetIndex: id,
              suggestedParams: params
            }),
            signer: this.blankSigner
          })
        }

        const finalTradegroup = tradegroup.buildGroup()

        const serializedTxns = finalTradegroup.map(txnObj => {
          const txn = encodeUnsignedTransaction(txnObj.txn)
          return Buffer.from(txn).toString('base64')
        })

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
              signedTxn = await walletConnector.sendCustomRequest(request)
            } catch (error) {
              console.log(error)
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
            console.log(error)
            this.TogglePopup('errorOccured')
          }
          this.TogglePopup('processingTransaction')
        }
      } catch (err) {
        console.log('err', err)
      }
    },

    async getPackContents () {
      let num = 0
      while (num < 5) {
        if (num === 0) {
          const index = Math.floor(Math.random() * rares.length)
          const available = await this.isAlchemonAvailable(rares[index])
          if (available) {
            packContents[rares[index]] = 1
            num++
          }
        } else {
          const index = Math.floor(Math.random() * alchemon.length)
          const available = await this.isAlchemonAvailable(alchemon[index])
          if (available) {
            if (packContents[alchemon[index]]) {
              packContents[alchemon[index]] = packContents[alchemon[index]] + 1
              num++
            } else {
              packContents[alchemon[index]] = 1
              num++
            }
          }
        }
      }
      console.log(packContents)
    },

    async isAlchemonAvailable (id) {
      const response = await indexerClient.lookupAccountAssets('GVX33TKM6W6K367PEMHP4UZOF4JAHQUJJ2TTO7S2UHNJ4HRCN6LVQKBMRU').assetId(id).do()
      const assetObject = response.assets
      const amount = assetObject[0].amount
      if (amount > 0) {
        return true
      } else {
        return false
      }
    }
  }
}

</script>
