<template>
    <h1>SUCCESS!</h1>
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/alchegold.png" alt="alchegold" />
    <p>Thank you for requesting AlcheGold!<br><br>
    In order to receive your tokens, please complete the following quick steps (click the NEXT button).
</p>
<router-link to="/alchegolddiscord"><button>NEXT</button></router-link>
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
    align-self: center;
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
