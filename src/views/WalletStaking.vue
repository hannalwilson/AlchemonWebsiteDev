<template>
  <div class="stakinginfo">
    <p class="orangeHeader spreadText">WALLET STAKING</p>
    <p class="whiteText marginFix_2">Get paid AlcheCoin just by holding Alchemon in your wallet! In order to receive
      your weekly staking rewards, you must opt-in to the
      AlcheCoin and Stake Flag Assets. Once a week on Saturday evenings, AlcheCoin will be desposited into your wallet
      based on the Alchemon you currently hold. A pool of 50,000 ALCH per set will be dropped to the holders of that set who are opted into ALCH and the Stake Flag.
      Earlier (lower mint count) sets will be rewarded more in relation to
      higher mint sets due to the pools. This will be a total of 250,000 ALCH per week currently for Sets 1–5 and adding in the Community Set
      (after the 6 months) and Set 6 this will be 350,000 ALCH per week.
      Please ensure you have AlcheCoin and the Stake Flag approved in your wallet so our bot can find your wallet
      and send you your AlcheCoin, otherwise you will not receive your rewards.</p>
    <p class="orangeHeader spreadText">ADD ALCHECOIN AND STAKE FLAG ASAS</p>
    <a href="https://www.randgallery.com/algo-collection/?address=310014962%2C+320570576"><p class="whiteText" style="text-align:center;">AlcheCoin Asset: <b>310014962</b> // Stake Flag Asset:
      <b>320570576</b>
    </p></a>
    <!-- <p class="orangeHeader spreadText">
      CALCULATE YOUR REWARDS
    </p>
    <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address" ref="address" />
    <button class="boxShadow" id="btn" @click="calculateRewards">Submit</button>
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/rewards_table.jpg" alt="Staking Rewards Table"
      class="zoomIn_2"> -->
  </div>
  <popup-window v-if="popupTriggers.calculatedRewards">
    <h2>Weekly Staking Rewards:</h2>
    <h3>{{ userRewards }} Alchecoin!</h3>
    <button class="boxShadow" @click="TogglePopup('calculatedRewards')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>

div {
  padding: 2%;
}
.stakinginfo {
    background-color: #007bff;
}

#text {
    width: 50%;
    font-family: poppins;
    border: none;
    padding: 1%;
    font-weight: bold;
}

img {
    width: 90%
}
</style>

<script>
import { ref } from 'vue'
import alchemons from '../data/alchemon.json'
import PopupWindow from '../components/PopupWindow.vue'

const popupTriggers = ref({
  calculatedRewards: false
})

// eslint-disable-next-line prefer-const
let userRewards = 0

export default {
  data () {
    return {
      PopupWindow,
      popupTriggers,
      userRewards
    }
  },
  components: { PopupWindow },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    mounted () {
      window.scrollTo(0, 0)
    },
    calculateRewards () {
      this.userRewards = 0
      const algosdk = require('algosdk')
      const token = ''
      const server = 'https://mainnet-api.algonode.cloud'
      const port = ''
      const client = new algosdk.Algodv2(token, server, port)

      client.accountInformation(this.$refs.address.value).do().then(response => {
        for (const userAsset of response.assets) {
          for (const alchemon of alchemons) {
            if (userAsset['asset-id'] === alchemon.id && userAsset.amount > 0) {
              this.userRewards += (alchemon.reward * userAsset.amount)
            }
          }
        }
        this.TogglePopup('calculatedRewards')
      })
    }
  }
}
</script>
