<template>
    <header>
        <h1>ACCEPT ASSETS</h1>
        <h3>STEP 5 of 10</h3>
    </header>
    <div class="pageContent">
        An <i>asset</i> is anything that can be stored or transferred on the Algorand blockchain. These are also called <i>Algorand
        Standard Assets</i> or <i>ASAs</i>. Alchemon NFTs are assets. Before storing an Alchemon NFT in your wallet, you must allow the
        assets in your wallet. Simply put: you have to accept receiving an NFT before receiving it.
        <br><br>
        <strong>Complete the following steps:</strong>
        <br>
        <ol>
            <strong><li>
                In Pera Wallet, navigate to the Collectibles section and select the plus icon in the top right corner of the screen.<br><br>
            </li></strong>
            <strong><li>
                Select your wallet, then search for each of the ASA ID numbers below and approve each one:<br><br>
                <ol class="orderedList">
                    <li>395700430 (Vena)</li><br>
                    <li>395706101 (Sable)</li><br>
                    <li>395702497 (Manti)</li><br>
                    <li>395703386 (Demo)</li>
                </ol>
            </li></strong>
        </ol>
        We will be sending you <i>one</i> of these NFTs in the future.
        <br><br>
        If you need any further help, please refer to this article:<br><br>
        <a href="https://support.perawallet.app/en/article/sending-an-nft-to-your-pera-wallet-account-14wp887/#2-2-send-an-nft" target="_blank">
            https://support.perawallet.app/en/article/sending-an-nft-to-your-pera-wallet-account-14wp887/#2-2-send-an-nft
        </a><br><br>
        Once you have opted-in to the above four listed NFTs, click NEXT.
        </div>
    <div class="buttonContainer">
        <router-link to="/free-nft-step-4"><button class="backButton directionButton">BACK</button></router-link>
        <router-link to="/free-nft-step-6"><button class="directionButton">NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
iframe {
    width: 50vw;
    height: calc(50vw * .5625);
}
header {
    margin-top: 6%;
}
.pageContent {
    padding: 0 5%;
    text-align: justify;
}
.center {
    text-align: center;
}

img {
    width: 200px;
    margin: 0;
}
.videoContainer {
    text-align: center;
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
ol, ul {
    padding: 1% 5%;
    ol {
        list-style: upper-alpha;
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
