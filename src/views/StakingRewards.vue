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
  </div>
</template>

<style lang="scss" scoped>
.stakinginfo {
  padding-top: 5%;
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

const popupTriggers = ref({
  calculatedRewards: false
})

// eslint-disable-next-line prefer-const
let userRewards = 0

export default {
  data () {
    return {
      popupTriggers,
      userRewards
    }
  },
  methods: {
    mounted () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
