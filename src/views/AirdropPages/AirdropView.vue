<template>
    <div class="header">
        <h1>ALCHEGOLD AIRDROP<img src="https://alchemon-website-assets.s3.amazonaws.com/assets/alchegold.png" class="alchegold" /></h1>
    </div>
    <div class="description">
        <strong>Claim your free AlcheGold by filling out the form below!</strong>
    </div>
    <div class="formContainer">
        <iframe src="https://www.cognitoforms.com/f/BL6suH4zoki-7T6n2s5KQQ/2" style="border:0;width:100%;"></iframe>
    </div>
</template>

<style lang="scss" scoped>
@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
}
@media (max-width: 950px) {
    iframe {
        min-height: 400px;
    }
}

@media (min-width: 950px) {
    iframe {
        max-height: 400px;
    }
}
img{
    max-width: 3vw;
    margin: 0;
}

.header {
    margin-top: 6%;
}
.description {
    margin: 2%;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
