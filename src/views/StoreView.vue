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
      <div>
        <store-card v-for="item in filteredItems" :key="item.id" :type="item.type" :cost="item.cost" :name="item.name" :id="item.id" :amount="item.amount">
        </store-card>
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
import items from '../data/storeItems.json'
import algosdk from 'algosdk'
import { reactive } from 'vue'
import StoreCard from '../components/StoreCard.vue'

const storeItems = reactive([])

const addresses = [
  '7OVSLHCECWQZ7R4DVV64VWCPG4AL6JTDBLQZZX6FPG22JCIIVFOSTC6GBQ',
  'I3QBOS6X6IWOY7S65CRRU47RAS2IK3TPLXAF3HYVY5JIEP7IXWARBWMJYQ',
  '5BSQOOEXICBRFBWBAQKFDUF4YFQN67OQFAH5NFHE2FUHTNHEHNGXJ6MPJU',
  '5HPPE2OE6L3UDVG2LOU3LKD56TS6AQAMRY37FGRN45B7UG5ZJAQCZ2TWAM',
  'WP55X5NNDLVSD2KRL4MHUYR2QGFART6V4OUQN54ETURA5AGM6Y5J4AI6I4',
  'O3BY3EN4SA75TBYKE6OTOCWIYK4CT7EY47HMYJGKET2PICWLNVCO4P2P6E',
  '4CBGCW7NNKN6YQRODCTQ5TDWYK5HGP7N6QLAYIV2ZG6JER3A7GUENNKYN4',
  'BLBMPJ2T2R34STSEIMR2M3ONWRUQKDVERCJA6FYSK563KBNCWWDKKXXPLM',
  '2RDDILD3SKA2TU2O5C6CMFJ2I2YS7FK6JSZUZWXTMGODWT2WPP6NEGXGIU',
  '4ZAR57SX4TBQAB2PJXBIKXNWJRU2Z7UPQZ2CHZCTSTUR6X5KNRQ4RPDSJI',
  'CWH5PDGPEX33F7JXDKSUNQIKJWJGQ4BFUB7I5Z7GKU4MXIBDTZRVP4XVAE',
  'COXD5PMNUOR3ZDARMSJQ452DOIGUB762ICKST4LAZKIBZRIZEFLJSDUCUU',
  'NSISL4T4IHPOVTWIUKRDXO5GWGWYNVX6IBQ2SHB3S4DECJXIOZGZ67LVBM',
  'OUHUW4FMSVUGMMCO46YVWPJOSFAPWN3QM45BISMYHJ6R5EMM56U5N25V5M',
  'CVDTGN4O45VJ4PEMNYQEPHZPJ23BSWMVRAHCHCC3UBGTZDNFIHEMI55RCM',
  'SJ6XHJ5OIRPT5FDNDAAH6F2K4DFJFHXLBFTRPYHQXUSZAFYEGO3SSCJ7NY',
  'P2MXHIMDODPHESURBFNZDBI57BFIJPYBPVS5VBY3UPVBPLIXLQ2ANR4Y6Q',
  'SQ24B6O32QNEKFZVRXHYETFMAMBOKPWKXKMOQV6YPTOHFF3DMEFEHGHYII',
  'LGONPU7H74GY63F5SE445SUPUG5Y7D2LA5NP6Y3JH5WPYRYFGLF7EHC52I',
  '6GN65BOLLZRUBMYD73GLZCRORABTWVRM3ALPC6LQ3KJDGTEHXVOATYJM7A',
  'TFY2WW37XK7NSPG7CJMT4ILJRANXYXMI2FQBIDMFDHHHWQRYSQZSH3RKSQ',
  'OX5UZFYVLKDHCOFZ7MGNPLJUKOLV43NLJJOM47KM2SNHCCJVKGERQAC4OA',
  'E3VNMDHNLVZW4SGASBXICP2PU5CDVELGJTIOBMEXOJNHFYRHQVFIVI7OZA'
]

export default {
  setup () {
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    if (storeItems.length === 0) {
      for (const item of items) {
        storeItems.push(item)
      }
    }

    for (const index in addresses) {
      client.accountInformation(addresses[index]).do().then(response => {
        for (const asset of response.assets) {
          storeItems.forEach(item => {
            if (item.id === asset['asset-id']) {
              item.amount = asset.amount
            }
          })
        }
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    StoreCard
  },
  data () {
    return {
      viewOnly: 'all'
    }
  },
  computed: {
    filteredItems () {
      let tempItems = storeItems

      if (this.viewOnly === 'alchemon') {
        tempItems = tempItems.filter(item => {
          return item.type.includes('alchemon')
        })
      }
      if (this.viewOnly === 'art') {
        tempItems = tempItems.filter(item => {
          return item.type.includes('art')
        })
      }
      if (this.viewOnly === 'all') {
        tempItems = storeItems
      }
      return tempItems
    }
  }
}
</script>
