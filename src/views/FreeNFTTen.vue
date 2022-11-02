<template>
        <div class="header">
            <h1>NFT REGISTRATION FORM</h1>
            <h3>STEP 10 of 10</h3>
        </div>
    <p>Congratulations! You did it! You are all set up to receive your free Alchemon NFT!
    <br><br>
    Please fill out this form so we can send the NFT over. By submitting this info, you will also be automatically
    pre-registered for Version 1.0 of our upcoming Alchemon video game!
</p>
    <div id="freeNFTForm">
        <iframe src="https://www.cognitoforms.com/f/BL6suH4zoki-7T6n2s5KQQ/1" style="border:0;width:100vw;"></iframe>
    </div>
<p>
    If you need help finding your Algo wallet address, here is a helpful article:
    <br><br>
    <a href="https://support.perawallet.app/en/article/finding-your-algorand-address-on-pera-wallet-iqfro9/" target="_blank">
        https://support.perawallet.app/en/article/finding-your-algorand-address-on-pera-wallet-iqfro9/
    </a><br><br>
</p>
</template>

<style lang="scss" scoped>
html .cog-cognito * {
    font-family: 'Poppins', sans-serif !important;
}
@media (max-width: 800px) {
    button {
        min-width: 40vw;
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
.header {
    margin-top: 6%;
}

img {
    width: 250px;
    align-self: center;
}

iframe {
    width: 90vw;
}
</style>

<script>

export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
