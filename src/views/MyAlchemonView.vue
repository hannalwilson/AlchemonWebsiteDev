<template>
  <div>
    <div class="cards">
        <input
          type="text"
          id="text"
          class="darkGrayText_1 boxShadow"
          placeholder="  Enter wallet address"
          v-model="userAddress"
      /><br>
      <button
        class="submitButton boxShadow"
        id="btn"
        @click="showNFTS"
      >My Alchemon</button>
      <button
        class="submitButton boxShadow"
        id="btn"
        @click="showRewards"
      >My Staking Rewards</button>
    </div>
    <cards-grid></cards-grid>
  </div>
</template>

<script>
import algosdk from 'algosdk'
import CardsGrid from '@/components/CardsGrid.vue'
const alchemonIds = [
  744527019,
  744527932,
  744528583,
  744551347,
  744530060,
  744530969,
  744531764,
  744532520,
  744533302,
  744534630,
  744535776,
  744536686,
  744538073,
  744539419,
  744540333
]

export default {
  data () {
    return {
      userAddress: ''
    }
  },
  components: {
    CardsGrid
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    showNFTS () {
      const token = { 'X-API-key': 'sxwIKIENYg9Es5rsmoanF5WAYXBBHDQ70vGvhI4g' }
      const server = 'https://mainnet-algorand.api.purestake.io/ps2'
      const port = ''
      const client = new algosdk.Algodv2(token, server, port)

      client.accountInformation(this.userAddress).do().then(response => {
        for (const a of response.assets) {
          if (a.amount > 0 && alchemonIds.includes(a['asset-id'])) {
            console.log(a)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.alchedex {
  width: 35%;
  margin-bottom: 0%;
}
.cards {
  padding: 1%;
  padding-top: 10%;
  background-image: linear-gradient(to right, #007bff, #00bbff, #8ad1ff);
}
a {
  margin: 1%;
}
.submitButton {
  width: 20%;
  font-family: poppins;
  text-align: center;
  background-color: orange;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
}
.submitButton:hover {
  background-color:darkblue;
  border: 2px solid orange;
  color: orange;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 2%;
  font-weight: bold;
}
</style>
