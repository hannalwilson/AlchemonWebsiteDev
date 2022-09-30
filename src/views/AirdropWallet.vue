<template>
        <div class="header">
            <h1>ALGORAND WALLET</h1>
        </div>
    <p>If you don’t already have an Algorand wallet, download Pera Algo Wallet now:
    </p>
    <a href="https://perawallet.app/" target="_blank">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/peralogo.svg" class="PeraLogo" /></a>
    <p>If clicking on this logo doesn’t work, click on this link:<br>
        <a href="https://perawallet.app/" target="_blank">https://perawallet.app/</a>
    <br><br>
        If you need help downloading, installing or setting up your wallet, here is an article:
        <br><br>
        <a
        href="https://support.perawallet.app/en/article/create-a-new-algorand-account-on-pera-wallet-1ehbj11/" target="_blank">https://support.perawallet.app/en/article/create-a-new-algorand-account-on-pera-wallet-1ehbj11/</a><br><br>
        <strong>Once the app is installed, set up your Alogorand wallet and then click the NEXT button.</strong>
    </p>
    <div class="buttonContainer">
        <router-link to="/alchegolddiscord"><button class="backButton">BACK</button></router-link>
        <router-link to="/alchegoldoptin"><button>NEXT</button></router-link>
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
    width: 250px;
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
