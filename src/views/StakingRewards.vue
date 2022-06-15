<template>
    <div class="stakinginfo">
        <p class="yellowHeader spreadText">STAKING HOURS:<br>SUNDAYS 1PM-MONDAYS 1PM PST<br><br>
            <span class="orangeHeader">EARN ALCHECOIN // WALLET STAKING</span>
        </p>
        <p class="whiteText" style="text-align:center;">AlcheCoin Asset: <b>310014962</b> // Stake Flag Asset:
            <b>320570576</b>
        </p>
        <p class="whiteText marginFix_2">Get paid AlcheCoin just by holding Alchemon in your wallet! You must add the
            AlcheCoin and Stake Flag Assets. This means you get to stake all your Alchemon in your own wallet! The chart
            below shows how much you will be paid out for each card in your wallet. Payouts will be Saturday evenings.
            Please ensure you have AlcheCoin and the Stake Flag approved in your wallet so our bot can find your wallet
            and send you your AlcheCoin, otherwise you will not receive your rewards.</p>
        <p class="whiteText">
            Calculate your weekly staking rewards!
        </p>
        <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address"
            ref="address" />
        <button class="boxShadow" id="btn" @click="calculateRewards">Submit</button>
        <img src="../assets/rewards_table.jpg" alt="Staking Rewards Table" class="zoomIn_2">
    </div>
    <popup-window v-if="popupTriggers.calculatedRewards">
        <h2>Weekly Staking Rewards:</h2>
        <h3>{{ userRewards }} Alchecoin!</h3>
        <button class="boxShadow" @click="TogglePopup('calculatedRewards')">Close</button>
    </popup-window>
</template>

<style lang="scss" scoped>

.stakinginfo {
    padding-top: 5%;
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB);
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
