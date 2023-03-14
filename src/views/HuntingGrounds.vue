<template>
  <div class="huntinggrounds">
    <p class="orangeHeader spreadText">HUNTING GROUNDS</p>
    <p>The Hunting Grounds is evolving! Players no longer need to stake one of their Alchemon for a whole week to
      earn entries in the Hunting Grounds raffle. Entries can be earned through battling your Alchemon in our
     <router-link to="/getting-started-step-10">desktop game</router-link> or purchased below. Each
      battle won equals one entry to the raffle and there is no limit to the number of entries any wallet can have. The
      raffle will occur
      weekly on Fridays after 1PM PST and winners will be determined by RNG! Good luck, you will need it.
    </p>
        <p class="orangeHeader spreadText">
          PURCHASE HUNTING GROUNDS ENTRIES</p>
          <img src="../assets/hgticket.png" id="ticket"><br>
          <button @click="minusCount()" class="boxShadow">-</button>
          <input type="text" v-model="counter" id="counter" class="darkGrayText_1 boxShadow">
          <button @click="addCount()" class="boxShadow">+</button><br>
          <button v-show="this.counter > 0" @click="purchaseEntries()" class="boxShadow">PURCHASE {{ this.counter }} FOR {{totalCost}} ALCH</button>

    <p class="orangeHeader spreadText">
CALCULATE HUNTING GROUNDS ENTRIES</p>
    <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address" ref="address" />
    <button class="boxShadow" id="btn" @click="calculateEntries">Submit</button>
    <p class="orangeHeader spreadText">WEEKLY ENTRIES</p>
    <table class="boxShadow">
      <tr class="tableTitle">
        <td>Wallet Address</td>
        <td>Amount of Entries</td>
      </tr>
      <tr v-for="(amount, address) in allEntries" :key="address">
        <td class="justifyText"> {{ address }} </td>
        <td> {{ amount }}</td>
      </tr>
    </table>
  </div>
  <popup-window v-if="popupTriggers.userEntries">
    <h2>You have {{ userEntries }}/{{ totalEntries }} entries in this week's Hunting Grounds!</h2>
    <button class="boxShadow" @click="TogglePopup('userEntries')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.signTransaction">
    <h2>Please open your wallet app to sign the transaction!</h2>
  </popup-window>
  <popup-window v-if="popupTriggers.processingTransaction">
    <h2>Transaction processing...</h2>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionSuccessful">
    <h2>Transaction successful!</h2>
    <p>Your entries have been recorded!</p>
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
    <h2>This wallet's vote has already been recorded.</h2>
    <button class="boxShadow" @click="TogglePopup('alreadyVoted')">Close</button>
  </popup-window>
  <popup-window v-show="popupTriggers.errorOccurred">
    <h2>Unknown Server Error. Please try again.</h2>
    <p style="text-align: left">If this error continues, please contact support.</p>
    <button class="boxShadow" @click="TogglePopup('errorOccured')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>
#counter {
  width: 50px;
  font-family: poppins;
  border: none;
  padding: .5%;
  font-weight: bold;
  text-align: right;
}
#ticket {
  width: 350px;
}
div {
  padding: 2%;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 1%;
  font-weight: bold;
}
.huntinggrounds {
    background-color: #007bff;
    color: white;
}
table {
  margin: auto;
  background: orange;
  border: 2px white solid;
  border-collapse: collapse;
  color: white;
  table-layout:fixed;
  width: 90vw;
}

td {
  text-align: center;
  padding: 1vw 5vw;
  word-wrap: break-word;
}

tr {
  border-bottom: 2px white solid;
}

.tableTitle {
  background: darkorange;
}
.justifyText {
  text-align: justify;
}
</style>

<script>
import axios from 'axios'
import { reactive, ref } from 'vue'

import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'

import PopupWindow from '../components/PopupWindow.vue'

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'

const popupTriggers = ref({
  userEntries: false,
  noUserEntries: false
})

const allEntries = reactive({})

let userEntries

let errorMessage

// eslint-disable-next-line prefer-const
let totalEntries = 0

export default {
  setup () {
    axios.get('https://mj7nw0yoxf.execute-api.us-east-1.amazonaws.com/getEntries').then(response => { // calls lambda to get all HG entries
      for (const key in response.data) {
        allEntries[key] = response.data[key]
      }
    })

    return { allEntries }
  },
  components: { PopupWindow },
  computed: {
    getErrorMessage () {
      return errorMessage
    },
    totalCost () {
      const total = this.counter * 5
      return total
    }
  },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    calculateEntries () { // takes users address (only if their wallet is connected) and returns # of HG entries they have
      this.totalEntries = 0
      for (const key in allEntries) {
        this.totalEntries += allEntries[key]
      }
      if (allEntries[this.$refs.address.value]) {
        this.userEntries = allEntries[this.$refs.address.value]
      } else {
        this.userEntries = 0
      }
      this.TogglePopup('userEntries')
    },
    minusCount () {
      if (this.counter !== 1) {
        this.counter--
      }
    },
    addCount () {
      this.counter++
    },
    async purchaseEntries () {
      if (!localStorage.userAddress) { // checks if user has connected their wallet and alerts them to, if they haven't
        window.alert('Please connect your wallet to purchase Hunting Grounds entries')
      } else {
        const userWallet = localStorage.userWallet

        const myAlgoConnect = new MyAlgoConnect()
        const walletConnector = new WalletConnect(
          {
            bridge: 'https://bridge.walletconnect.org', // Required
            qrcodeModal: QRCodeModal
          }
        )

        const sender = localStorage.userAddress
        let signedTxn

        const purchaseResponse = await axios.post(`${apiURL}/purchaseEntries`, {
          userAddress: sender,
          numberOfEntries: this.counter
        })

        if (purchaseResponse.status === 250) { // api gateway return 250 if the db has a vote for the connected wallet address already
          this.TogglePopup('alreadyVoted')
        } else {
          if (userWallet === 'walletconnect') {
            this.TogglePopup('signTransaction')
          }
          const purchaseTxns = purchaseResponse.data.txns
          let signedTxns
          switch (userWallet) {
            case 'myalgo':
              signedTxns = await myAlgoConnect.signTransaction(purchaseTxns)
              if (Array.isArray(signedTxns)) {
                signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
              } else {
                signedTxn = Buffer.from(signedTxns.blob).toString('base64')
              }
              break
            case 'walletconnect':
              // eslint-disable-next-line no-case-declarations
              const txnsToSign = purchaseTxns.map(txn => {
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
              break
          }

          if (signedTxn) {
            if (userWallet === 'walletconnect') {
              this.TogglePopup('signTransaction')
            }
            this.TogglePopup('processingTransaction')
            try {
              // eslint-disable-next-line no-unused-vars
              const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, { // sends transaction
                txn: signedTxn
              })
              if (sendTxnResponse.status === 200) {
                if (sendTxnResponse.data.txnId) {
                  await axios.post(`${apiURL}/recordEntries`, { // if transaction is successful, inserts # of entries purchase into db
                    userAddress: sender,
                    numberOfEntries: this.counter
                  })
                  this.TogglePopup('processingTransaction')
                  this.TogglePopup('transactionSuccessful')
                } else if (sendTxnResponse.data.message) {
                  errorMessage = sendTxnResponse.data.message
                  this.TogglePopup('transactionFailed')
                  this.TogglePopup('processingTransaction')
                }
              }
            } catch (error) {
              console.log(error)
              this.TogglePopup('errorOccured')
              this.TogglePopup('processingTransaction')
            }
          }
        }
      }
    }
  },
  data () {
    return {
      PopupWindow,
      popupTriggers,
      userEntries,
      totalEntries,
      counter: 1,
      errorMessage
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
