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
        Add Alchemon NFT Card Assets to your wallet via Rand Gallery. Click the
        button then click "Add ASAs" in Rand Gallery & sign the transaction with
        MyAlgoWallet.
        <a href="https://www.randgallery.com/algo-collection/?address=306180273%2C306181364%2C306729637%2C306183859%2C306184765%2C306186552%2C306187531%2C+306188337%2C306189097"
          target="_blank" role="button">#01-09</a>
        <a href="https://www.randgallery.com/algo-collection/?address=306190133%2C306190826%2C306191511%2C313419037%2C313421275%2C315166675%2C332014800%2C337225085%2C337226686"
          target="_blank" role="button">#10-18</a>
        <a href="https://www.randgallery.com/algo-collection/?address=332016564%2C337228921%2C337230496%2C332017894%2C337231891%2C+337233127%2C332018856%2C337238291%2C337239113"
          target="_blank" role="button">#19-27</a>
        <a href="https://www.randgallery.com/algo-collection/?address=337243065%2C337244072%2C337245090%2C395700430%2C400877134%2C400878709%2C395706101%2C400883933%2C400885791"
          target="_blank" role="button">#28-36</a>
        <a href="https://www.randgallery.com/algo-collection/?address=395702497%2C400887826%2C400889657%2C395703386%2C400891886%2C400894271%2C400920947%2C400924498%2C400926043"
          target="_blank" role="button">#37-45</a>
        <a href="https://www.randgallery.com/algo-collection/?address=490139078%2C509842608%2C527475282%2C490141855%2C509844088%2C527477069%2C493271743%2C509848775%2C527479654"
          target="_blank" role="button">#46-54</a>
        <a href="https://www.randgallery.com/algo-collection/?address=490146814%2C509850827%2C527481591%2C527483715%2C527485015%2C527486409%2C744527019%2C744527932%2C744528583"
          target="_blank" role="button">#55-63</a>
        <a href="https://www.randgallery.com/algo-collection/?address=744551347%2C744530060%2C744530969%2C744531764%2C744532520%2C744533302%2C744534630%2C744535776%2C744536686"
          target="_blank" role="button">#64-72</a>
        <a href="https://www.randgallery.com/algo-collection/?address=744538073%2C744539419%2C744540333" target="_blank"
          role="button">#73-75</a>
      </p>
      <p class="whiteText marginFix_2">
        Here are all released Alchemon NFT cards!:
      </p>
      <div class="cards">
        <div class="searchBar">
          <select name="viewSet" id="select" v-model="viewSet" class="boxShadow">
            <option value="View All">View All Sets</option>
            <option value='1'>Set 1</option>
            <option value='2'>Set 2</option>
            <option value='3'>Set 3</option>
            <option value='4'>Set 4</option>
            <option value='5'>Set 5</option>
            <option value='Community'>Community Set</option>
          </select>
          <select name="filterBy" id="select" v-model="filterBy" class="boxShadow">
            <option value="Filter By">Filter By:</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <input type="text" v-model="searchValue" placeholder="Search Alchemon" id="search-input" class="boxShadow" />
          <i class="fa fa-search"></i>
        </div>
        <div id="sort-bar">
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
    <button @click="openWebpage('rand', this.id)">RAND GALLERY</button>
    <button @click="openWebpage('algo', this.id)">ALGO EXPLORER</button>
    <button @click="openWebpage('nft', this.id)">NFT EXPLORER</button><br><br>
    <button @click="TogglePopup('viewAlchemon')">Close</button>
  </popup-window>
</template>

<script>
import AlchemonCards from '../components/AlchemonCards.vue'
import alchemons from '../data/alchemon.json'
import { reactive, ref } from 'vue'
import PopupWindow from '@/components/PopupWindow.vue'

const userAlchemon = reactive([])

const popupTriggers = ref({
  viewAlchemon: false
})

let alchemonId

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
      PopupWindow
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
      const algosdk = require('algosdk')
      const token = ''
      const server = 'https://mainnet-api.algonode.cloud'
      const port = ''
      const client = new algosdk.Algodv2(token, server, port)

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
    }
  },
  computed: {
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
  margin-left: 2%;
}
.missing {
  filter: grayscale(1);
}
</style>
