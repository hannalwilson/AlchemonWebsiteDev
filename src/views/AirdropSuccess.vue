<template>
        <div class="header">
            <h1>SUCCESS!</h1>
        </div>
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/alchegold.png" alt="alchegold" />
    <p>Thank you for requesting AlcheGold!<br><br>
    <strong>In order to receive your tokens, please complete the following quick steps (click the NEXT button).</strong>
</p>
<div class="buttonContainer">
    <router-link to="/alchegolddiscord"><button>NEXT</button></router-link>
</div>
</template>

<style lang="scss" scoped>
.header {
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
    min-width: 10vw;
}

.buttonContainer {
    display: flex;
    justify-content: right;
    margin: 3%;
}
@media (max-width: 800px) {
    button {
        min-width: 25vw;
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
