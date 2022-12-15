<template>
  <div>
    <div class="whiteGrayBackground">
      <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/alchedex.png" class="alchedex" />
      <p class="darkBlueHeader spreadText">ALCHEDEX</p>
    </div>
    <div class="cards">
      <p class="whiteText">
        View your Alchemon NFT Cards by entering your wallet address below!
      </p>
      <select name="filterBy" id="select" v-model="showAll" class="boxShadow">
        <option value="all">View All</option>
        <option value="mine">View Mine</option>
      </select>
      <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address"
        ref="address" />
      <button class="submitButton boxShadow" id="btn" @click="getUserAlchemon">Submit</button>
      <p class="whiteText">
        Opt-in to Alchemon NFT Card Assets:<br>
        <button @click="optInToSets(1)">Set 1</button>
        <button @click="optInToSets(2)">Set 2</button>
        <button @click="optInToSets(3)">Set 3</button>
        <button @click="optInToSets(4)">Set 4</button>
        <button @click="optInToSets(5)">Set 5</button>
        <button @click="optInToSets(6)">Set 6</button>
        <button @click="optInToSets('Community')">Community Set</button>
      </p>
      <p class="whiteText marginFix_2">
        Here are all released Alchemon NFT cards!:
      </p>
      <div class="cards">
        <div class="searchBar">
          <select name="filterBy" id="select" v-model="filterBy" class="boxShadow">
            <option value="Filter By">Filter By:</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <input type="text" v-model="searchValue" placeholder="Search Alchemon" id="search-input" class="boxShadow" />
          <i class="fa fa-search"></i>
        </div>
        <div id="sort-bar">
          <select name="viewSet" id="select" v-model="viewSet" class="boxShadow">
            <option value="View All">View All Sets</option>
            <option value='1'>Set 1</option>
            <option value='2'>Set 2</option>
            <option value='3'>Set 3</option>
            <option value='4'>Set 4</option>
            <option value='5'>Set 5</option>
            <option value='6'>Set 6</option>
            <option value='Community'>Community Set</option>
          </select>
          <select name="sortBy" id="select" v-model="sortBy" class="boxShadow">
            <option value="Sort By">Sort By:</option>
            <option value="alphabetically">Name</option>
            <option value="number">Number</option>
            <option value="rarity">Rarity</option>
          </select>
          <button @click="ascending = !ascending" class="sort-button boxShadow">
            <i v-if="ascending">▲</i>
            <i v-else>▼</i>
          </button>
        </div>
        <!-- Where the array of Cards get rendered as cards -->
        <div>
          <alchemon-cards v-for="card in filteredCards" :key="card.assetId" :name="card.name" :id="card.id"
            :type="card.type" :minted="card.minted" v-bind:class="card.isOwned ? 'owned' : 'missing'"
            @click="TogglePopup('viewAlchemon', card.id)">
          </alchemon-cards>
        </div>
      </div>
    </div>
  </div>
  <popup-window v-if="popupTriggers.viewAlchemon">
    <h1>Select Website to View Alchemon</h1>
    <button @click="openWebpage('rand', this.id)" class="boxShadow">RAND GALLERY</button>
    <button @click="openWebpage('algo', this.id)" class="boxShadow">ALGO EXPLORER</button>
    <button @click="openWebpage('nft', this.id)" class="boxShadow">NFT EXPLORER</button><br><br>
    <button @click="TogglePopup('viewAlchemon')" class="boxShadow">Close</button>
  </popup-window>
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
    <popup-window v-if="popupTriggers.alreadyOptedIn">
      <h2>Already Opted In</h2>
      <p style="text-align: left">{{ userAddress }} is already opted in to these assets.</p>
      <button class="boxShadow" @click="TogglePopup('alreadyOptedIn')">Close</button>
    </popup-window>
</template>

<script>
import AlchemonCards from '../components/AlchemonCards.vue'
import alchemons from '../data/alchemon.json'
import { reactive, ref } from 'vue'
import PopupWindow from '@/components/PopupWindow.vue'
import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import axios from 'axios'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'

const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)

const algosdk = require('algosdk')
const token = ''
const server = 'https://mainnet-api.algonode.cloud'
const port = ''
const client = new algosdk.Algodv2(token, server, port)

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'

const userAlchemon = reactive([])

const popupTriggers = ref({
  viewAlchemon: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  processingTransaction: false,
  errorOccured: false,
  alreadyOptedIn: false
})

const userAddress = localStorage.userAddress

let alchemonId
let errorMessage
let optInSet

export default {
  mounted () {
    window.scrollTo(0, 0)
    this.showAll = 'all'
    this.gotUserAlchemon = false
  },
  components: {
    AlchemonCards,
    PopupWindow
  },
  data () {
    return {
      ascending: false,
      sortBy: 'Sort By',
      filterBy: 'Filter By',
      viewSet: 'View All',
      searchValue: '',
      cards: alchemons,
      gotUserAlchemon: false,
      showAll: 'all',
      popupTriggers,
      PopupWindow,
      errorMessage,
      userAddress,
      optInSet
    }
  },
  methods: {
    TogglePopup (trigger, id) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      alchemonId = id
    },
    openWebpage (site) {
      switch (site) {
        case 'rand':
          window.open(`https://www.randgallery.com/algo-collection/?address=${alchemonId}`)
          break
        case 'algo':
          window.open(`https://algoexplorer.io/asset/${alchemonId}`)
          break
        case 'nft':
          window.open(`https://www.nftexplorer.app/asset/${alchemonId}`)
          break
      }

      this.TogglePopup('viewAlchemon')
    },
    getUserAlchemon () {
      this.gotUserAlchemon = false

      // eslint-disable-next-line vue/no-async-in-computed-properties
      client.accountInformation(this.$refs.address.value).do().then(response => {
        for (const userAsset of response.assets) {
          for (const alchemon of alchemons) {
            if (userAsset['asset-id'] === alchemon.id && userAsset.amount > 0) {
              userAlchemon.push(alchemon.id)
            }
          }
        }
        this.gotUserAlchemon = true
      })
    },
    ReloadWindow () {
      window.location.reload()
    },
    async blankSigner () {
      return [new Uint8Array()]
    },
    async optInToSets (set) {
      if (!userAddress) {
        window.alert('Error: No wallet connected. Please connect your wallet to continue.')
      } else {
        const suggestedParams = await client.getTransactionParams().do()
        const optInGroup = new algosdk.AtomicTransactionComposer()
        const userWallet = localStorage.userWallet
        for (const card of alchemons) {
          if (card.set === set) {
            const id = Number(card.id)
            try {
              const assetInfoResponse = await client.accountAssetInformation(userAddress, id).do()
              console.log('RESPONSE', assetInfoResponse)
              if (assetInfoResponse['asset-holding']) {
                console.log('Pass')
              } else {
                optInGroup.addTransaction({
                  txn: algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                    suggestedParams,
                    from: userAddress,
                    to: userAddress,
                    assetIndex: id,
                    amount: 0
                  }),
                  signer: this.blankSigner()
                })
              }
            } catch (error) {
              console.log(error)
              optInGroup.addTransaction({
                txn: algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                  suggestedParams,
                  from: userAddress,
                  to: userAddress,
                  assetIndex: id,
                  amount: 0
                }),
                signer: this.blankSigner()
              })
            }
          }
        }
        let signedTxns
        let signedTxn
        if (optInGroup.transactions.length === 0) {
          this.TogglePopup('alreadyOptedIn')
        } else {
          console.log(optInGroup)
          const finalOptInGroup = optInGroup.buildGroup()
          const serializedTxns = finalOptInGroup.map(txnObj => {
            const txn = algosdk.encodeUnsignedTransaction(txnObj.txn)
            return Buffer.from(txn).toString('base64')
          })

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

              console.log('here')
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
  },
  computed: {
    getErrorMessage () {
      return errorMessage
    },
    filteredCards () {
      let tempCards = this.cards

      if (this.gotUserAlchemon && this.showAll === 'all') {
        tempCards = tempCards.filter((item) => {
          if (userAlchemon.includes(item.id)) {
            item.isOwned = true
          } else {
            item.isOwned = false
          }
          return item
        })
      } else if (this.gotUserAlchemon && this.showAll === 'mine') {
        // eslint-disable-next-line array-callback-return
        tempCards = tempCards.filter((item) => {
          if (userAlchemon.includes(item.id)) {
            return item
          }
        })
      }

      if (this.viewSet === 'viewAll') {
        tempCards = this.cards
      }
      if (this.viewSet === '1') {
        tempCards = tempCards.filter((item) => {
          return item.set === 1
        })
      }
      if (this.viewSet === '2') {
        tempCards = tempCards.filter((item) => {
          return item.set === 2
        })
      }
      if (this.viewSet === '3') {
        tempCards = tempCards.filter((item) => {
          return item.set === 3
        })
      }
      if (this.viewSet === '4') {
        tempCards = tempCards.filter((item) => {
          return item.set === 4
        })
      }
      if (this.viewSet === '5') {
        tempCards = tempCards.filter((item) => {
          return item.set === 5
        })
      }
      if (this.viewSet === '6') {
        tempCards = tempCards.filter((item) => {
          return item.set === 6
        })
      }
      if (this.viewSet === 'Community') {
        tempCards = tempCards.filter((item) => {
          return item.set === 'Community'
        })
      }
      if (this.searchValue !== '' && this.searchValue) {
        // Processset selected
        // Process search input
        if (this.filterBy === 'name') {
          tempCards = tempCards.filter((item) => {
            return item.name
              .toUpperCase()
              .includes(this.searchValue.toUpperCase())
          })
        }
        // Process search input
        if (this.filterBy === 'type') {
          tempCards = tempCards.filter((item) => {
            return item.type.toUpperCase()
              .includes(this.searchValue.toUpperCase())
          })
        }
      }

      // Sort by alphabetical order
      // eslint-disable-next-line array-callback-return
      tempCards = tempCards.sort((a, b) => {
        if (this.sortBy === 'alphabetically') {
          const fa = a.name.toLowerCase()
          const fb = b.name.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0

        // Sort by set
        } else if (this.sortBy === 'number' || this.sortBy === 'Sort By') {
          const fa = a.number
          const fb = b.number

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        // Sort by rarity
        } else if (this.sortBy === 'rarity') {
          const fa = a.rarity
          const fb = b.rarity

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        }
      })

      // Show sorted array in descending or ascending order
      if (!this.ascending) {
        tempCards.reverse()
      }

      return tempCards
    }
  }
}
</script>

<style lang="scss" scoped>
.alchedex {
  width: 35%;
  margin-bottom: 0%;
}
alchemon-cards {
  width: 100vw;
}
.cards {
  padding: 1%;
  background-image: linear-gradient(to right, #007bff, #00bbff, #8ad1ff);
}
a {
  margin: 1%;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 1%;
  font-weight: bold;
}
#sort-bar {
  margin-left: 10px;
  flex-wrap: wrap;
  padding: 10px;
  text-align: right;
}

#select {
  font-family: poppins;
  text-align: left;
  background-color: orange;
  border: 2px solid orange;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
  font-size: inherit;
  padding: .5%;

  &:hover {
    background-color: darkblue;
    color: orange;
  }
}

.searchBar {
  text-align: left;
  margin-left: 2%;
}
#search-input {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 1%;
  font-weight: bold;
}
.missing {
  filter: grayscale(1);
}
@media (max-width: 990px) {
  .whiteGrayBackground {
    margin-top: 40px;
  }
}
</style>
