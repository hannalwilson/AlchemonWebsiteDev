<template>
  <div class="background">
    <h1>GOVERNANCE</h1>
  </div>
  <div class="voteSection">
    <div>
      <p class="orangeHeader spreadText">HOW IT WORKS</p>
      <p>AlcheCoin is Alchemon's Governance Token. It gives holders the right to vote on the
        development and operations of Alchemon, i.e., it gives our community decision making power.
        Each AlcheCoin is worth one vote and each wallet is only allowed to vote once. Before voting opens, a
        snapshot of all AlcheCoin is taken and the amount of AlcheCoin held in your wallet at the time of
        the snapshot is how many times your vote counts. For example, if you had 5400 AlcheCoin and voted for
        option A, that would count as 5400 'A' votes.
      </p>
    </div>
    <p class="orangeHeader spreadText">QUESTION</p>
    <div class="buttonContainer">
      <button class="boxShadow voteButton" @click="castVote('A')">VOTE A</button>
      <button class="boxShadow voteButton" @click="castVote('B')">VOTE B</button>
    </div>
  </div>
  <popup-window v-if="popupTriggers.signTransaction">
    <h2>Please open your wallet app to sign the transaction!</h2>
  </popup-window>
  <popup-window v-if="popupTriggers.processingTransaction">
    <h2>Vote transaction processing...</h2>
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
  <popup-window v-if="popupTriggers.alreadyVoted">
    <p style="text-align: left">This wallet's vote has already been recorded.</p>
    <button class="boxShadow" @click="TogglePopup('alreadyVoted')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>
.voteButton {
  padding: 0 3%;
  margin: 3%;
}
.container {
  background-color: #D8D8D8;
  width: 75vw;
  margin: 0 auto;
}
.voteSection {
  background-color: white;
  background-image: linear-gradient(to left, #D8D8D8, #DEDEDE, #E5E5E5, #EBEBEB, #F2F2F2, #F8F8F8, #FFFFFF);
  padding: 3%;
}
.question {
  text-align: center;
}
.buttonContainer {
  margin: 5%;
}
h1 {
  font-size: 10vw;
  color: #e6ad10;
  -webkit-text-stroke: 1px rgb(22, 22, 54);
  padding: 0%;
}

.background {
  background-image: url("../assets/alcheshop_coin.png"),linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5% 0% 2%;

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
  errorOccured: false,
  alreadyVoted: false
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

      const sender = localStorage.userAddress
      let signedTxn
      const voteResponse = await axios.post(`${apiURL}/castVote`, {
        userAddress: sender,
        userVote: userVote
      })
      let signedTxns
      switch (userWallet) {
        case 'myalgo':
          signedTxns = await myAlgoConnect.signTransaction(voteResponse)
          if (Array.isArray(signedTxns)) {
            signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
          } else {
            signedTxn = Buffer.from(signedTxns.blob).toString('base64')
          }
          break
        case 'walletconnect':
          // eslint-disable-next-line no-case-declarations
          const voteTxns = [voteResponse]
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
