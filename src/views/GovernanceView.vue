<template>
  <div class="background">
    <h1 class="spreadText">GOVERNANCE</h1>
  </div>
  <div class="voteSection">
      <p class="orangeHeader spreadText">HOW IT WORKS</p>
      <p>AlcheCoin is Alchemon's Governance Token. It gives holders the right to vote on the
        development and operations of Alchemon, i.e., it gives our community decision making power.
        Each AlcheCoin is worth one vote and each wallet is only allowed to vote once. Before voting opens, a
        snapshot of all AlcheCoin is taken and the amount of AlcheCoin held in your wallet at the time of
        the snapshot is how many times your vote counts. For example, if you had 5400 AlcheCoin and voted for
        option A, that would count as 5400 'A' votes.
      </p>
    <p class="orangeHeader spreadText">DURATION</p>
    <p class="centerText">1 week. Thursday Dec 29th 2022-Thursday Jan 5th 2023</p>
    <p class="orangeHeader spreadText">QUESTION</p>
    <p class="centerText">Should Alchemon build a way to purchase Hunting Grounds Entries with ALCH?</p>
    <p class="orangeHeader spreadText">INFO</p>
    <p>We have seen the idea of Hunting Grounds entries being purchased for AlcheCoin, for those who cannot grind, as a way for
    others to participate in the weekly contest.
    <br><br>
    We determined this is possible and would be something we would be happy to build as long as users would take advantage
    of it.
    <br><br>
    There are definitely some pros and cons to this. A new utility for ALCH is always good as well as another avenue for
    Alchemon to earn it back. Diluting those entries to the players that are grinding is a notable con. Also, building this
    and having no one use it would be a waste of developer resources.
  <br><br>
  If this vote passes we will build and test this with entries at 5 ALCH each. We may increase or decrease the price until
  we find a sweet spot. Timeline to launch this would be 2–3 weeks if the vote passes.
  <br><br>
</p>
    <p class="orangeHeader spreadText">VOTE</p>
    <p class="centerText">A: No. Continue Hunting Grounds as is. Only in-game wins(for now).<br>
    B: Yes. Build a way for entries in Hunting Grounds to be purchased for ALCH.
    </p>
    <!-- Comment out header when voting is live -->
    <h3>VOTING IS CLOSED</h3>
    <!-- Uncomment buttonContainer div when voting is live -->
    <!-- <div class="buttonContainer">
      <button class="boxShadow voteButton" @click="castVote('A')">VOTE A</button>
      <button class="boxShadow voteButton" @click="castVote('B')">VOTE B</button>
    </div> -->
    <p class="orangeHeader spreadText">RESULTS</p>
    <table>
      <tr>
        <th>VOTE</th>
        <th>PERCENT</th>
      </tr>
      <tr v-for="( percent, vote ) in currentVotesPercents" :key="vote">
        <td>{{ vote }}</td>
        <td>{{ percent }}%</td>
      </tr>
    </table>
    <p class="orangeHeader spreadText">VOTE BREAKDOWN</p>
    <table>
      <tr>
        <th>ADDRESS</th>
        <th>VOTE</th>
      </tr>
      <tr v-for="entry in currentVoteBreakdown" :key="entry">
        <td>{{ entry['wallet_address'] }}</td>
        <td>{{ entry['alchecoin_amount']}}&nbsp;-&nbsp;{{entry.vote }}</td>
      </tr>
    </table>
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
  .centerText {
    text-align: center;
  }
.voteButton {
  padding: 0 3%;
  margin: 3%;
  width: 25vw;
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
  p {
    text-align: center;
  }
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

.center {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
td {
  text-align: left;
  padding: 1vw 2vw;
  word-wrap: break-word;
  max-width: 60vw;
}
th {
  padding: 10px 20px;
}
table,
th,
td {
  border: 1px solid orange;
  width: auto !important;
}
table {
  margin: auto;
  border-collapse: collapse;
  display: inline-block;
}
</style>

<script>
import { ref, reactive } from 'vue'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'
import axios from 'axios'
import PopupWindow from '../components/PopupWindow.vue'

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'

const popupTriggers = ref({
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  processingTransaction: false,
  errorOccurred: false,
  alreadyVoted: false
})

let errorMessage

const currentVotesTotals = reactive({})
const currentVotesPercents = reactive({})
const currentVoteBreakdown = reactive({})

let totalVotes

export default {
  components: { PopupWindow },
  mounted () {
    window.scrollTo(0, 0)
  },
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
  setup () {
    totalVotes = 0
    axios.get('https://rkv7rfg9rb.execute-api.us-east-1.amazonaws.com/getGovernanceVotingResults').then(response => {
      for (const key in response.data) {
        currentVotesTotals[key] = response.data[key]
        totalVotes += response.data[key]
      }
      for (const key in currentVotesTotals) {
        const percentVote = currentVotesTotals[key] / totalVotes * 100
        currentVotesPercents[key] = percentVote.toFixed(1)
      }
    })

    axios.get('https://rkv7rfg9rb.execute-api.us-east-1.amazonaws.com/getUsersGovernanceVotes').then(response => {
      for (const entry in response.data) {
        currentVoteBreakdown[entry] = response.data[entry]
      }
    })

    return { currentVotesTotals, currentVotesPercents, currentVoteBreakdown, totalVotes }
  },
  methods: {
    async castVote (userVote) {
      if (!localStorage.userAddress) { // checks if user has connected their wallet and alerts them to, if they haven't
        window.alert('Please connect you wallet to vote')
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
        let voteResponse
        try {
          voteResponse = await axios.post(`${apiURL}/castVote`, {
            userAddress: sender,
            userVote: userVote
          })
        } catch {
          this.TogglePopup('errorOccured')
        }

        if (voteResponse.status === 250) { // api gateway return 250 if the db has a vote for the connected wallet address already
          this.TogglePopup('alreadyVoted')
        } else {
          if (userWallet === 'walletconnect') {
            this.TogglePopup('signTransaction')
          }
          const voteTxns = voteResponse.data.txns
          let signedTxns
          switch (userWallet) {
            case 'myalgo':
              signedTxns = await myAlgoConnect.signTransaction(voteTxns)
              if (Array.isArray(signedTxns)) {
                signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
              } else {
                signedTxn = Buffer.from(signedTxns.blob).toString('base64')
              }
              break
            case 'walletconnect':
              // eslint-disable-next-line no-case-declarations
              const txnsToSign = voteTxns.map(txn => {
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
              const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, { // sends transaction
                txn: signedTxn
              })
              if (sendTxnResponse.status === 200) {
                if (sendTxnResponse.data.txnId) {
                  this.TogglePopup('transactionSuccessful')
                  try {
                    voteResponse = await axios.post(`${apiURL}/recordVote`, { // if transaction is successful, inserts vote into db
                      userAddress: sender,
                      userVote: userVote
                    })
                  } catch {
                    this.TogglePopup('errorOccured')
                  }
                } else if (sendTxnResponse.data.message) {
                  errorMessage = sendTxnResponse.data.message
                  this.TogglePopup('transactionFailed')
                  this.TogglePopup('signTransaction')
                }
              }
            } catch (error) {
              this.TogglePopup('errorOccured')
              this.TogglePopup('signTransaction')
            }
            this.TogglePopup('processingTransaction')
          }
        }
      }
    },
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
  }
}
</script>
