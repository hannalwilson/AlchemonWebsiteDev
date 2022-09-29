<template>
    <h1>PROVIDE YOUR WALLET ADDRESS</h1>
    <p><strong>Email your Algorand wallet address to the email address below:<br><br>
    info@alchemon.net</strong><br><br>
    We need your wallet address in order to send you your AlcheGold.<br><br>
    Here is an article that explains how to find your wallet address:<br><br>
        <a href="https://support.perawallet.app/en/article/finding-your-algorand-address-on-pera-wallet-iqfro9/"  target="_blank">https://support.perawallet.app/en/article/finding-your-algorand-address-on-pera-wallet-iqfro9/</a>
    </p>
    <p><strong>Once you have emailed your wallet address to info@alchemon.net, please click the NEXT button.</strong></p>
    <div>
        <router-link to="/alchegoldtelegram"><button class="backButton">BACK</button></router-link>
    <router-link to="/alchegoldend"><button>NEXT</button></router-link>
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
    width: 250px;
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
