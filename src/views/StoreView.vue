<template>
  <div>
    <div class="background">
      <h1 class="spreadText">ALCHESHOP</h1>
    </div>
    <div class="forSale">
      <div>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'alchemon'">Alchemon</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'art'">Art</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'all'">View All</button>
      </div>
      <div v-for="id in filteredItems" :key="id" class="shop">
        <store-card :name="storeItems[id]" :id="id" :amount="sellingAssets[id]"></store-card>
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
import { reactive } from 'vue'
import StoreCard from '../components/StoreCard.vue'
import algosdk from 'algosdk'

const storeItems = {
  490139078: 'Zip',
  490146814: 'Lika',
  490141855: 'Puff',
  493271743: 'Dagz',
  744534630: 'Cyd',
  744531764: 'Torr',
  744551347: 'Kumo',
  744527019: 'Lyth'
}
const addresses = [
  '7OVSLHCECWQZ7R4DVV64VWCPG4AL6JTDBLQZZX6FPG22JCIIVFOSTC6GBQ',
  'I3QBOS6X6IWOY7S65CRRU47RAS2IK3TPLXAF3HYVY5JIEP7IXWARBWMJYQ',
  '5BSQOOEXICBRFBWBAQKFDUF4YFQN67OQFAH5NFHE2FUHTNHEHNGXJ6MPJU',
  '5HPPE2OE6L3UDVG2LOU3LKD56TS6AQAMRY37FGRN45B7UG5ZJAQCZ2TWAM',
  'WP55X5NNDLVSD2KRL4MHUYR2QGFART6V4OUQN54ETURA5AGM6Y5J4AI6I4',
  'O3BY3EN4SA75TBYKE6OTOCWIYK4CT7EY47HMYJGKET2PICWLNVCO4P2P6E',
  '4CBGCW7NNKN6YQRODCTQ5TDWYK5HGP7N6QLAYIV2ZG6JER3A7GUENNKYN4',
  'BLBMPJ2T2R34STSEIMR2M3ONWRUQKDVERCJA6FYSK563KBNCWWDKKXXPLM'
]

const storeAlchemon = [
  // 490139078,
  // 490146814,
  // 490141855,
  // 493271743,
  744534630,
  744531764,
  744551347,
  744527019
]

const storeArt = [
  490139078
]

const sellingIds = ([])

export default {
  setup () {
    const token = { 'X-API-key': 'sxwIKIENYg9Es5rsmoanF5WAYXBBHDQ70vGvhI4g' }
    const server = 'https://mainnet-algorand.api.purestake.io/ps2'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)
    const sellingAssets = reactive({})
    for (const index in addresses) {
      client.accountInformation(addresses[index]).do().then(response => {
        for (const a of response.assets) {
          for (const b in storeItems) {
            // eslint-disable-next-line eqeqeq
            if (a['asset-id'] == b) {
              const amount = a.amount
              const id = b
              sellingAssets[id] = amount
              sellingIds.push(id)
            }
          }
        }
      })
    }
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
      storeItems,
      viewOnly: 'all'
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredItems () {
      let tempItems = this.sellingIds

      if (this.viewOnly === 'alchemon') {
        tempItems = this.tempItems.forEach(item => {
          if (storeAlchemon.includes(item)) {
            return item
          }
        })
      }
      if (this.viewOnly === 'art') {
        // eslint-disable-next-line array-callback-return
        tempItems = tempItems.keys.filter((item) => {
          for (const asset in this.sellingAssets) {
            if (storeArt.includes(asset)) {
              return item
            }
          }
        })
      }
      if (this.viewOnly === 'all') {
        tempItems = this.sellingAssets
      }
      console.log(tempItems)

      return tempItems
    }
  }
}
</script>
