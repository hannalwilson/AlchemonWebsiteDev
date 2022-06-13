<template>
    <div>
        <div class="cards">
            <select name="filterBy" id="select" v-model="showAll" class="boxShadow">
                <option value="all">View All</option>
                <option value="mine">View Mine</option>
            </select>
            <div class="cards">
                <div class="searchBar">
                    <select name="viewSet" id="select" v-model="viewSet" class="boxShadow">
                        <option value="View All">View All Sets</option>
                        <option value='1'>Set 1</option>
                        <option value='2'>Set 2</option>
                        <option value='3'>Set 3</option>
                        <option value='4'>Set 4</option>
                        <option value='5'>Set 5</option>
                    </select>
                    <select name="filterBy" id="select" v-model="filterBy" class="boxShadow">
                        <option value="Filter By">Filter By:</option>
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                    </select>
                    <input type="text" v-model="searchValue" placeholder="Search Alchemon" id="search-input"
                        class="boxShadow" />
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
                        :type="card.type" :minted="card.minted" v-bind:class="card.isOwned ? 'owned' : 'missing'">
                    </alchemon-cards>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AlchemonCards from '../components/AlchemonCards.vue'
import alchemons from '../data/alchemon.json'
import { reactive } from 'vue'

const userAlchemon = reactive([])

export default {
  props: ['address'],
  components: {
    AlchemonCards
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
      showAll: 'all'
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.showAll = 'all'
    this.gotUserAlchemon = false
    const algosdk = require('algosdk')
    const token = { 'X-API-key': 'sxwIKIENYg9Es5rsmoanF5WAYXBBHDQ70vGvhI4g' }
    const server = 'https://mainnet-algorand.api.purestake.io/ps2'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    // eslint-disable-next-line vue/no-async-in-computed-properties
    client.accountInformation(this.address).do().then(response => {
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

.cards {
    padding: 1%;
    background-image: linear-gradient(to right, #007bff, #00bbff, #8ad1ff);
}

.missing {
    filter: grayscale(1);
}
</style>
