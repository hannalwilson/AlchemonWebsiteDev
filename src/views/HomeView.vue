<template>
  <div class="videoContainer">
    <video autoplay muted loop playsinline id="backgroundVideo">
      <source src="https://alchemon-website-assets.s3.amazonaws.com/assets/game_video.mp4" type="video/mp4">Your browser
      does not support HTML5 videos.
    </video>
  </div>
  <div id="about" class="whiteGrayBackground">
    <img class="centerImage venoreaper"
      src="https://alchemon-website-assets.s3.amazonaws.com/assets/45_venoreaper_back.gif" alt="Venoreaper">
    <img class="centerImage araknadevil"
      src="https://alchemon-website-assets.s3.amazonaws.com/assets/75_araknadevil.gif" alt="Araknadevil">
    <p class="orangeHeader spreadText">ALCHEMON = ALGO+ALCHEMY+MONSTER<br><br>
      <span class="darkBlueHeader spreadText">STAKE! TRADE! EVOLVE! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CRAFT! COLLECT!
        EARN!</span>
    </p>
    <p class="darkGrayText_1 marginFix_2">Alchemon is the first monster-collecting NFT staking, crafting and trading
      card game only on the Algorand Blockchain! <br><br>Get your Alchemon, evolve them and then craft Epic and
      Legendary Alchemon that will never be for sale (in the official store)!</p>
  </div>
  <div class="orangeBackground">
    <p class="grayHeader spreadText">ALCHEMON INC'S WALLET</p>
    <p class="whiteHeader">OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA</p>
    <img class="wallet zoomIn_1" src="https://alchemon-website-assets.s3.amazonaws.com/assets/wallet.jpg"
      alt="Creator's wallet" width="35%">
  </div>
  <div id="disclaimer">
    <p class="orangeHeader spreadText">DISCLAIMER</p>
    <p class="darkGrayText_1">
    <ol>
      <li>See existing Store and Craft & Evolve pages for current rates.</li>
      <li>All the rules here are liable to change at any time for any reason. Announcements beforehand will be attempted
        in all circumstances.</li>
      <li>Read the AlcheCoin Legal Opinion Letter.</li>
      <li>Alchemon NFT Cards, AlcheCoin, Packs, Art, or any Alchemon product are all inherently worthless and were
        created for entertainment value only. Any and all value (real or imagined) assigned to them is created by the
        community. Prices for getting the NFT Cards is for entertainment in collecting or participation in the game.
        This is not an investment or security.</li>
    </ol>
    </p>
  </div>
</template>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>

.araknadevil {
  margin-bottom: 10%;
  width: 30%;
  margin-top: 8%;
}
.venoreaper {
    margin-bottom: 0%;
      width: 38%;
      margin-top: 10%;
}
#backgroundVideo {
  width: 100%;
}
.videoContainer {
  margin-bottom: -10%;
}

/* Hover effect for contact and submit buttons */
button:hover {
    color: orange; /* This makes the text in the buttons white when hovered over */
    background-color: #000080; /* The background of the button changes to black when hovered over */
    transition-duration: 1s; /* This makes the transition last 1 second */
    -webkit-transition-duration: 1s; /* For Safari 4.0-8.0 */
    border-color: orange; /* The border turns silver when the button is hovered over */
}
#about{
  padding-bottom: 5%;
  background-image: linear-gradient(to left, #D8D8D8, #DEDEDE, #E5E5E5, #EBEBEB, #F2F2F2, #F8F8F8, #FFFFFF);
}
.evolution{
  width: 90%;
  margin: 5% 0;
}
.orangeBackground {
  background-image: linear-gradient(to right, #ffa500, #ffb327);
}
ol {
  padding: 0 10%;
}
li {
  padding: 1% 0;
}
</style>
