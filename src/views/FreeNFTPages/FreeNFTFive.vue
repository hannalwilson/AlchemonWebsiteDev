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
                    <li>490139078 (Zip)</li><br>
                    <li>490141855 (Puff)</li><br>
                    <li>490146814 (Lika)</li><br>
                    <li>493271743 (Dagz)</li>
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
            <navigate-buttons :backURL="'/free-NFT-step-4'" :nextURL="'/free-NFT-step-6'"></navigate-buttons>
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

ol, ul {
    padding: 1% 5%;
    ol {
        list-style: upper-alpha;
    }
}
</style>

<script>
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: {
    NavigateButtons
  },
  mounted () {
    window.scrollTo(0, 0
    )
  }
}
</script>
