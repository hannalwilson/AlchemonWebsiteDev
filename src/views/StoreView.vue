<template>
<div>
    <div class="background">
        <h1 class="spreadText">ALCHESHOP</h1>
    </div>
    <div class="forSale">
      <p v-if="sellingAssets[0] === undefined" class="soldOut">SOLD OUT</p>
        <div v-for="(index, a) in sellingAssets" :key="a" class="shop">
        <store-card :name="storeItems[a]" :id="a" :amount="index"></store-card>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.background {
  background-image: url("../assets/alcheshop_coin.png") ,linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 15% 0%;

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
.soldOut {
  padding: 5%;
  font-size: 8vw;
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
    const server = 'https://mainnet-algorand.api.purestake.io/ps2'
    const port = ''
    // eslint-disable-next-line no-undef
    const client = new algosdk.Algodv2(token, server, port)
    const sellingAddress = 'YGTG4E777WMPA63GKOOQWR27PJWS65WK4MCTND7ITTMKTDPI2RWRSVT4HU'
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
