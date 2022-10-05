<template>
        <div class="header">
            <h1>JOIN OUR TELEGRAM</h1>
        <h3>STEP 9 of 10</h3></div>
    <p><strong>Click on the Telegram logo below to join Alchemon’s Telegram community!:</strong>
    </p>
    <a href="https://t.me/joinchat/WbyxkfAyJDZmMzE5" target="_blank">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/telegramlogo.svg" class="Telegram Logo" /></a>
    <p>If clicking on this logo doesn’t work, click on this link:<br><br>
        <a href="https://t.me/joinchat/WbyxkfAyJDZmMzE5 " target="_blank">https://t.me/joinchat/WbyxkfAyJDZmMzE5</a>
    </p>
    <p><strong>Once you have joined the Alchemon community on Telegram, please click the NEXT button.</strong></p>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-8"><button class="backButton directionButton">BACK</button></router-link>
        <router-link to="/getting-started-step-10"><button class="directionButton">NEXT</button></router-link>
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
