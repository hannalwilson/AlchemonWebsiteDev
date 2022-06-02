<template>
  <div>
    <div class="whiteGrayBackground">
      <img src="../assets/alchedex.png" class="alchedex" />
      <p class="darkBlueHeader spreadText">ALCHEDEX</p>
    </div>
    <div class="cards">
      <p class="whiteText">
        View your Alchemon NFT Cards by entering your wallet address below!
      </p>
        <input
          type="text"
          id="text"
          class="darkGrayText_1 boxShadow"
          placeholder="  Enter wallet address"
          ref="address"
      />
      <button
        class="submitButton boxShadow"
        id="btn"
        @click="showNFTS"
      >Submit</button>
      <p class="whiteText">
        Add Alchemon NFT Card Assets to your wallet via Rand Gallery. Click the
        button then click "Add ASAs" in Rand Gallery & sign the transaction with
        MyAlgoWallet.
        <a
          href="https://www.randgallery.com/algo-collection/?address=306180273%2C306181364%2C306729637%2C306183859%2C306184765%2C306186552%2C306187531%2C+306188337%2C306189097"
          target="_blank"
          role="button"
          >#01-09</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=306190133%2C306190826%2C306191511%2C313419037%2C313421275%2C315166675%2C332014800%2C337225085%2C337226686"
          target="_blank"
          role="button"
          >#10-18</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=332016564%2C337228921%2C337230496%2C332017894%2C337231891%2C+337233127%2C332018856%2C337238291%2C337239113"
          target="_blank"
          role="button"
          >#19-27</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=337243065%2C337244072%2C337245090%2C395700430%2C400877134%2C400878709%2C395706101%2C400883933%2C400885791"
          target="_blank"
          role="button"
          >#28-36</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=395702497%2C400887826%2C400889657%2C395703386%2C400891886%2C400894271%2C400920947%2C400924498%2C400926043"
          target="_blank"
          role="button"
          >#37-45</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=490139078%2C509842608%2C527475282%2C490141855%2C509844088%2C527477069%2C493271743%2C509848775%2C527479654"
          target="_blank"
          role="button"
          >#46-54</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=490146814%2C509850827%2C527481591%2C527483715%2C527485015%2C527486409%2C744527019%2C744527932%2C744528583"
          target="_blank"
          role="button"
          >#55-63</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=744551347%2C744530060%2C744530969%2C744531764%2C744532520%2C744533302%2C744534630%2C744535776%2C744536686"
          target="_blank"
          role="button"
          >#64-72</a
        >
        <a
          href="https://www.randgallery.com/algo-collection/?address=744538073%2C744539419%2C744540333"
          target="_blank"
          role="button"
          >#73-75</a
        >
      </p>
      <p class="whiteText marginFix_2">
        Here are all released Alchemon NFT cards!:
      </p>
    <cards-grid></cards-grid>
    </div>
  </div>
</template>

<script>
import CardsGrid from '../components/CardsGrid.vue'

export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    CardsGrid
  },
  methods: {
    showNFTS () {
      window.open('https://www.randgallery.com/algo-collection/?address=' + this.$refs.address.value + '&creator=alchemon')
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
