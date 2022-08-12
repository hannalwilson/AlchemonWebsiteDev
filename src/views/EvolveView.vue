<template>
  <div>
    <div class="background">
      <h1 class="spreadText">CRAFT & EVOLVE</h1>
    </div>
    <div class="forSale">
      <craft-legendary v-for="card in legendary" :key="card.available" :name="card.name"
        :tradedCardOne="card.tradedCardOneName" :tradedCardTwo="card.tradedCardTwoName" :amount="card.amount"
        :available="card.available"></craft-legendary>
      <craft-epic v-for="card in epic" :key="card.available" :name="card.name" :tradedCardOne="card.tradedCardOneName"
        :tradedCardTwo="card.tradedCardTwoName" :amount="card.amount" :available="card.available"></craft-epic>
      <evolve-rare v-for="card in rare" :key="card.available" :name="card.name" :tradedCard="card.tradedCardName"
        :available="card.available"></evolve-rare>
      <evolve-uncommon v-for="card in uncommon" :key="card.available" :name="card.name" :tradedCard="card.tradedCardName"
        :available="card.available"></evolve-uncommon>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.background {
  background-image: url("../assets/alcheshop_coin.png") ,linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5% 0% 2%;

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
button {
  font-family: poppins;
  text-align: center;
  background-color: orange;
  border: 2px solid orange;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
  padding: .5%;
}

button:hover {
  background-color: darkblue;
  border: 2px solid orange;
  color: orange;
}
</style>

<script>
import EvolveUncommon from '@/components/EvolveUncommon.vue'
import EvolveRare from '@/components/EvolveRare.vue'
import CraftEpic from '@/components/CraftEpic.vue'
import CraftLegendary from '@/components/CraftLegendary.vue'

import algosdk from 'algosdk'
import { reactive } from 'vue'

import alchemon from '../data/craftandevolve.json'

const uncommon = reactive({})
const rare = reactive({})
const epic = reactive({})
const legendary = reactive({})

export default {
  setup () {
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    for (const item in alchemon) {
      switch (alchemon[item].rarity) {
        case 1:
          legendary[item] = alchemon[item]
          break
        case 2:
          epic[item] = alchemon[item]
          break
        case 3:
          rare[item] = alchemon[item]
          break
        case 4:
          uncommon[item] = alchemon[item]
          break
      }
    }

    for (const item in uncommon) {
      client.accountInformation(uncommon[item].contractAddress).do().then(response => {
        for (const asset of response.assets) {
          for (const item in uncommon) {
            if (uncommon[item].id === asset['asset-id']) {
              uncommon[item].available = asset.amount
            }
          }
        }
      })
    }

    for (const item in rare) {
      client.accountInformation(rare[item].contractAddress).do().then(response => {
        for (const asset of response.assets) {
          for (const item in rare) {
            if (rare[item].id === asset['asset-id']) {
              rare[item].available = asset.amount
            }
          }
        }
      })
    }

    for (const item in epic) {
      client.accountInformation(epic[item].contractAddress).do().then(response => {
        for (const asset of response.assets) {
          for (const item in uncommon) {
            if (epic[item].id === asset['asset-id']) {
              epic[item].available = asset.amount
            }
          }
        }
      })
    }

    for (const item in legendary) {
      client.accountInformation(legendary[item].contractAddress).do().then(response => {
        for (const asset of response.assets) {
          for (const item in legendary) {
            if (legendary[item].id === asset['asset-id']) {
              legendary[item].available = asset.amount
            }
          }
        }
      })
    }
  },
  components: {
    EvolveUncommon,
    EvolveRare,
    CraftEpic,
    CraftLegendary
  },
  data () {
    return {
      uncommon,
      rare,
      epic,
      legendary
    }
  }
}
</script>
