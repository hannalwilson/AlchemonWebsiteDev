<template>
<div>
    <div class="background">
        <img src="../assets/alcheshop_coin.png" alt="torr">
        <p class="yellowHeader spreadText">ALCHESHOP</p>
        <p class="whiteText">Purchase Eggs with Algo or Alchecoin</p>
    </div>
    <div class="forSale">
        <div v-for="(index, a) in sellingAssets" :key="a" class="shop">
        <store-card :name="storeItems[a]" :id="a" :amount="index"></store-card>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.background {
    background-color: #007bff;
    padding: 5%;
}
.shop {
    display: inline-block;
    padding: 2%;
}
p {
    text-align: center;
    margin: 0;
}
.forSale {
    background-color: white;
    background-image: linear-gradient(to left, #D8D8D8, #DEDEDE, #E5E5E5, #EBEBEB, #F2F2F2, #F8F8F8, #FFFFFF);
    margin-top: 0%;
}
img {
  width: 50%;
}
</style>

<script>
import { reactive } from 'vue'
import StoreCard from '../components/StoreCard.vue'
const storeItems = {
  318280942: 'Egg'
}
export default {
  setup () {
    const token = { 'X-API-key': 'sxwIKIENYg9Es5rsmoanF5WAYXBBHDQ70vGvhI4g' }
    const server = 'https://testnet-algorand.api.purestake.io/ps2'
    const port = ''
    // eslint-disable-next-line no-undef
    const client = new algosdk.Algodv2(token, server, port)
    const sellingAddress = 'GVX33TKM6W6K367PEMHP4UZOF4JAHQUJJ2TTO7S2UHNJ4HRCN6LVQKBMRU'
    const sellingAssets = reactive({})
    client.accountInformation(sellingAddress).do().then(response => {
      for (const a of response.assets) {
        if (a.amount > 0) {
          for (const b in storeItems) {
            // eslint-disable-next-line eqeqeq
            if (a['asset-id'] == b) {
              const amount = a.amount
              const id = b
              sellingAssets[id] = amount
            }
          }
        }
      }
    })
    return { sellingAssets }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    StoreCard
  },
  data () {
    return {
      storeItems
    }
  }
}
</script>
