<template>
  <div>
    <div class="background">
      <h1 class="spreadText">ALCHESHOP</h1>
    </div>
    <div class="forSale">
      <div>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'alchemon'">Alchemon</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'alchebilities'">Alchebilities</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'art'">Art</button>
        <button class="submitButton boxShadow" id="btn" @click="viewOnly = 'all'">View All</button>
      </div>
      <div>
        <store-card v-for="item in filteredItems" :key="item.id" :type="item.type" :cost="item.cost" :name="item.displayName" :id="item.id" :amount="item.amount" :description="item.description">
        </store-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

h1 {
  font-size: 10vw;
  color: #e6ad10;
  -webkit-text-stroke: 1px rgb(22, 22, 54);
  padding: 0%;
}
.background {
  background-image: url("../assets/alcheshop_coin.png"),linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5% 0% 2%;

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
  'E3VNMDHNLVZW4SGASBXICP2PU5CDVELGJTIOBMEXOJNHFYRHQVFIVI7OZA',
  'PZSX4T5XDVYTHPH6JZJ2XYSV3FB2EMTBDJET4J5QJKMJN72GHPMI2C54TU',
  'IRZ3QG4PHDSYXTAHUGRBFCR3MIE3JFH2CABZUUAKMQYKBH62O5EABOO7OI',
  'ZDTEIFLTBOREU3Z56IKS6HSCC3EIBPPRIL5LZINSOOAAFHET4Y6LJOC7PU',
  'RJAWYDTYOI7C7WNVOWVPBISLAPLA36SVPT26BROQM5HNAQKVS2PIH6R7LQ',
  '4KI3CA5TTN2OKYI22IL2AUI3B7KLO2KMEBJGNMPZCFFIXH2UML6ZFZ4WX4',
  'AOG4M2LFSXKRONKGRMFGQ2LRRA3KMTC3G2DPVJJMR6WLO3L2RQRVP5U2BE',
  'B2PDB2EWOAZVTH2XJZIEZX5P7UZKLVUWYIM7HXIWQ5U6IBJS6TDO4LWJ2Y',
  'MRRIT7LBP3I6QIMGVST2IUPW7OOEPUBGTVPRWUTZMA5ZJZSBEI53T4QLWQ',
  'M5VTGXSX2DK3HXWF4YZI537PYQGSPCD4SCZUKTZCLVBWFJU5IHDICDIXE4',
  'JLNJOJTMDMYHCUFNYM2HLX4WFOQ4VWG6QJUJRAJ5KNHFMVWU6IO43VFTZI',
  'ZDS7OKL4CFN4JYPFHKDFNQOCN2GVO3TDQ6N7N5FOO4BMWAC3N7BY2HS7DY',
  '7IHWNYNG4FWFE5TI5SRG6HKYZQPJ5U5HM63PN5G45AR47GX3JYQOXYPDY4',
  'ZG3QTF3LJYY735ZDHY7E5USU5MIYBFP2UEJK4UQ2WNXQU5TIOIDTSRHJHU',
  'SOAAA47UPOFB2N3ZS5SMF6BFYMCWFH2S3K5MJDOEPE6U5YKRBOF7UEI73M'
]

let address
let foundAddress

export default {
  setup () {
    const token = ''
    const server = 'https://mainnet-api.algonode.cloud'
    const port = ''
    const client = new algosdk.Algodv2(token, server, port)

    items.forEach(item => {
      if (item.type === 'alchebilities') {
        item.displayName = item.name.split(/(?=[A-Z])/).join(' ')
      } else {
        item.displayName = item.name
      }
    })

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
  components: {
    StoreCard
  },
  data () {
    return {
      viewOnly: 'all',
      foundAddress,
      address
    }
  },
  computed: {
    filteredItems () {
      let tempItems = storeItems.filter(item => item.amount > 0)

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
      if (this.viewOnly === 'alchebilities') {
        tempItems = tempItems.filter(item => {
          return item.type.includes('alchebilities')
        })
      }
      if (this.viewOnly === 'all') {
        tempItems = storeItems.filter(item => item.amount > 0)
      }
      return tempItems
    }
  }
}
</script>
