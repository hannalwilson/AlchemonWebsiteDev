<template>
  <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/card-game.png" class="playrules">
  <div class="selectPage whiteText">
    Learn More About:
    <select v-model="viewingPage">
      <option value='gettingstarted'>Getting
        Started</option>
      <option value='traininggrounds'>Training
        Grounds</option>
      <option value='huntinggrounds'>Hunting
        Grounds</option>
      <option value='walletstaking'>Wallet
        Staking</option>
      <option value = 'battle'>Battle Game</option>
    </select>
  </div>
  <getting-started-view v-if="viewPage === 'gettingstarted'"></getting-started-view>
  <training-grounds-view v-if="viewPage === 'traininggrounds'"></training-grounds-view>
  <hunting-grounds-view v-if="viewPage === 'huntinggrounds'"></hunting-grounds-view>
  <wallet-staking-view v-if="viewPage === 'walletstaking'"></wallet-staking-view>
  <battle-game-view v-if="viewPage === 'battle'"></battle-game-view>
</template>

<style lang="scss" scoped>
.playrules {
    width: 100%;
    margin: 0%;
    margin-top: -15%;
    background-color: black;
}

.rulesImage {
    background-image: linear-gradient(to right, #ffa500, #ffb327, #ffffff);
    padding: 0%;
}

select {
  font-family: poppins;
    text-align: center;
    background-color: orange;
    border: 2px solid orange;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    margin: 1%;
    text-transform: capitalize;

  &:hover {
  background-color: darkblue;
    border: 2px solid orange;
    color: orange;
  }
}

.selectPage {
background-image: linear-gradient(to top, #007bff, #4287F9, #89B4FB, #ffffff);
    border-bottom: orange 2px solid;

}
div {
    padding: 2%;
}
</style>

<script>
import GettingStartedView from './GettingStarted.vue'
import BattleGameView from './BattleGame.vue'
import HuntingGroundsView from './HuntingGrounds.vue'
import TrainingGroundsView from './TrainingGrounds.vue'
import WalletStakingView from './WalletStaking.vue'

export default {
  components: {
    GettingStartedView,
    BattleGameView,
    HuntingGroundsView,
    TrainingGroundsView,
    WalletStakingView
  },
  computed: {
    viewPage () {
      return this.viewingPage
    }
  },
  data () {
    return {
      GettingStartedView,
      BattleGameView,
      HuntingGroundsView,
      TrainingGroundsView,
      WalletStakingView,
      viewingPage: 'gettingstarted'
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
