<template>
    <div class="background">
      <h1 class="spreadText">CRAFT & EVOLVE</h1>
      <div class="searchBar">
        <div class="selectContainer">
        <label for="select">View:</label>
        <select name="viewSet" id="select" v-model="viewSet" class="boxShadow">
          <option value="View All">All Sets</option>
          <option value='4'>Only Set 4</option>
          <option value='5'>Only Set 5</option>
          <option value='6'>Only Set 6</option>
          <option value='Community'>Only Community Set</option>
        </select>
        </div>
      </div>
    </div>
    <div class="forSale">
      <craft-evolve-card v-for="card in filteredCards" :key="card.name" :name="card.name" :tradedCardOne="card.tradedCardOneName"
        :tradedCardTwo="card.tradedCardTwoName" :available="card.available" :set="card.set" :rarity="card.rarity"></craft-evolve-card>
    </div>
</template>

<style lang="scss" scoped>
#select {
  text-align: left;
}
@media (max-width: 990px) {
  .background {
    margin-top: 40px;
  }
}
.background {
  background-image: url("../assets/alcheshop_coin.png") ,linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5% 0% 0%;

}
p {
    text-align: center;
    margin: 0;
}
h1 {
  padding: 0%;
}
img {
  width: 100%;
  margin: 0%;
  padding: 0%;
}
h1 {
  font-size: 10vw;
  color: #e6ad10;
  -webkit-text-stroke:1px rgb(22, 22, 54);
}

.searchBar {
  padding: 2%;
  background-color: #ffffff88;
}

.selectContainer {
  margin: 0 18vw;
}
</style>

<script>
import CraftEvolveCard from '@/components/CraftEvolveCard.vue'

import algosdk from 'algosdk'
import { reactive } from 'vue'

import alchemon from '../data/craftandevolve.json'

const alchemons = reactive([])

export default {
  setup () {
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    for (const item in alchemon) { // creates array of alchemon objects
      alchemons[item] = alchemon[item]
    }

    for (const item in alchemons) {
      client.accountInformation(alchemons[item].contractAddress).do().then(response => { // queries each cards evolve or craft smart contract for amount available
        for (const asset of response.assets) {
          for (const item in alchemons) {
            if (alchemons[item].id === asset['asset-id']) {
              alchemons[item].available = asset.amount // updates each alchemon's available # with the amount of alchemon in it's respective smart contract
            }
          }
        }
      })
    }
  },
  components: {
    CraftEvolveCard
  },
  computed: {
    filteredCards () {
      let tempCards = this.cards.filter((item) => {
        return item.available > 0 // filters out evolutions that aren't available so they don't display on webpage
      })

      // filters displayed cards based on set selected
      if (this.viewSet === 'viewAll') {
        tempCards = this.cards.filter((item) => {
          return item.available > 0
        })
      }
      if (this.viewSet === '4') {
        tempCards = tempCards.filter((item) => {
          return item.set === 4 && item.available > 0
        })
      }
      if (this.viewSet === '5') {
        tempCards = tempCards.filter((item) => {
          return item.set === 5 && item.available > 0
        })
      }
      if (this.viewSet === '6') {
        tempCards = tempCards.filter((item) => {
          return item.set === 6 && item.available > 0
        })
      }
      if (this.viewSet === 'Community') {
        tempCards = tempCards.filter((item) => {
          return item.set === 'Community' && item.available > 0
        })
      }

      return tempCards
    }
  },
  data () {
    return {
      cards: alchemons,
      viewSet: 'View All'
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
