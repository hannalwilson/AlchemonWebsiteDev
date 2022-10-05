<template>
    <div class="header">
        <h1>FOLLOW US ON TWITTER</h1>
        <h3>STEP 8 of 10</h3></div>
    <p><strong>Stay up to date on Alchemon and all announcements by following us on Twitter!:</strong>
    </p>
    <a href="https://twitter.com/AlchemonNFT" target="_blank">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/twitterlogo.svg" class="Twitter Logo" /></a>
    <p>If clicking on this logo doesn’t work, click on this link:<br><br>
        <a href="https://twitter.com/AlchemonNFT " target="_blank">https://twitter.com/AlchemonNFT</a>
    </p>
    <p><strong>Once you have followed Alchemon on Twitter, please click the NEXT button.</strong></p>
    <div class="buttonContainer">
<router-link to="/getting-started-step-7"><button class="backButton directionButton">BACK</button></router-link>
<router-link to="/getting-started-step-9"><button class="directionButton">NEXT</button></router-link>
    </div>

</template>

<style lang="scss" scoped>
.header {
    margin-top: 6%;
}

img {
    width: 200px;
    margin: 0;
}

button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 20vw;
}

.buttonContainer {
    display: flex;
    justify-content: space-between;
    margin: 3%;
}

@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
