<template>
    <h1>JOIN OUR DISCORD</h1>
    <p>Click on the discord logo below to join Alchemon’s Discord server!:
    </p>
    <a href="https://discord.com/invite/zr5PTxFTSk " target="_blank">
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/discordlogo.svg" class="Discord Logo"/></a>
    <p>If clicking on this logo doesn’t work, click on this link:<br><br>
        <a href="https://discord.com/invite/zr5PTxFTSk "  target="_blank">https://discord.com/invite/zr5PTxFTSk</a>
    </p>
    <p>
        <strong>Once you have joined Alchemon's Discord server, please click the NEXT button below.</strong>
    </p>
<div>
    <router-link to="/alchegoldsuccess"><button class="backButton">BACK</button></router-link>
    <router-link to="/alchegoldwallet"><button>NEXT</button></router-link>
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
