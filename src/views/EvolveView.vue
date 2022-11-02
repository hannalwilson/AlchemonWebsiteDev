<template>
  <div>
    <div class="background">
      <h1 class="spreadText">CRAFT & EVOLVE</h1>
      <div class="searchBar">
        <div class="selectContainer">
        <label for="select">View:</label>
        <select name="viewSet" id="select" v-model="viewSet" class="boxShadow">
          <option value="View All">All Sets</option>
          <option value='4'>Only Set 4</option>
          <option value='5'>Only Set 5</option>
          <option value='Community'>Only Community Set</option>
        </select>
        </div>
      </div>
    </div>
    <div class="forSale">
      <craft-evolve-card v-for="card in filteredCards" :key="card.name" :name="card.name" :tradedCardOne="card.tradedCardOneName"
        :tradedCardTwo="card.tradedCardTwoName" :available="card.available" :set="card.set" :rarity="card.rarity"></craft-evolve-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

#select {
  font-family: poppins;
  text-align: left;
  background-color: #e6ad10;
  border: 2px solid #e6ad10;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: inherit;
  padding: .5%;
  width: 50vw;
  margin-left: 1%;

  &:hover {
    background-color: darkblue;
    color: orange;
  }
}

.searchBar {
  text-align: left;
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

    for (const item in alchemon) {
      alchemons[item] = alchemon[item]
    }

    for (const item in alchemons) {
      client.accountInformation(alchemons[item].contractAddress).do().then(response => {
        for (const asset of response.assets) {
          for (const item in alchemons) {
            if (alchemons[item].id === asset['asset-id']) {
              alchemons[item].available = asset.amount
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
      let tempCards = this.cards

      if (this.viewSet === 'viewAll') {
        tempCards = this.cards
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
