<template>
    <h1>JOIN OUR TELEGRAM</h1>
    <p>Click on the Telegram logo below to join Alchemon’s Telegram community!:
    </p>
    <a href="https://t.me/joinchat/WbyxkfAyJDZmMzE5" target="_blank">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/telegramlogo.svg" class="Telegram Logo" /></a>
    <p>If clicking on this logo doesn’t work, click on this link:<br><br>
        <a href="https://t.me/joinchat/WbyxkfAyJDZmMzE5 " target="_blank">https://t.me/joinchat/WbyxkfAyJDZmMzE5</a>
    </p>
    <p><strong>Once you have joined the Alchemon community on Telegram, please click the NEXT button.</strong></p>
    <div>
        <router-link to="/alchegoldtwitter"><button class="backButton">BACK</button></router-link>
        <router-link to="/alchegoldemail"><button>NEXT</button></router-link>
    </div>

</template>

<style lang="scss" scoped>
h1 {
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
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
