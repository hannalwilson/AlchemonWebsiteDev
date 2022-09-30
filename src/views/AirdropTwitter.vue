<template>
        <div class="header">
            <h1>FOLLOW US ON TWITTER</h1>
        </div>
    <p>Stay up to date on Alchemon and all announcements by following us on Twitter!:
    </p>
    <a href="https://twitter.com/AlchemonNFT" target="_blank">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/twitterlogo.svg" class="Twitter Logo" /></a>
    <p>If clicking on this logo doesn’t work, click on this link:<br><br>
        <a href="https://twitter.com/AlchemonNFT " target="_blank">https://twitter.com/AlchemonNFT</a>
    </p>
    <p><strong>Once you have followed Alchemon on Twitter, please click the NEXT button.</strong></p>
    <div class="buttonContainer">
        <router-link to="/alchegoldoptin"><button class="backButton">BACK</button></router-link>
        <router-link to="/alchegoldtelegram"><button>NEXT</button></router-link>
    </div>

</template>

<style lang="scss" scoped>
@media (max-width: 800px) {
            button {
                min-width: 25vw;
            }
        }

.header {
    margin-top: 6%;
}
p {
    text-align: center;
}

img {
    width: 200px;
    margin: 0;
}
button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 10vw;
}

.buttonContainer {
    display: flex;
    justify-content: space-between;
    margin: 3%;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
