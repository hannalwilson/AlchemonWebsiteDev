<template>
    <header>
        <h1>PURCHASE ALGO</h1>
    <h3>STEP 4 of 10</h3></header>
    <div class="content">
        Transactions on the Algorand blockchain cost .001 ALGOs. This means that you must own some ALGO before receiving your
        free NFT.
        <br><br>
        <i>If you already have at least one ALGO in your wallet, you can skip this step.</i>
        <br><br>
        Again, if you do not have at least one ALGO in your wallet, you cannot send or receive NFTs. If you do not own any ALGO,
        you will need to set up a Coinbase account and purchase some.
        <br><br>
        <strong>Complete the following steps:</strong>
        <ol>
            <li>
                <strong>Set up a Coinbase account.</strong>
                <br><br>
                Here is an article on how to set up a new Coinbase account:
                <a href="https://help.coinbase.com/en/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account "
                target="_blank">https://help.coinbase.com/en/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account</a><br><br>
            </li>
            <li>
                <strong>Once your Coinbase account is set up, purchase at least one ALGO.</strong>
                <br><br>
                Here is an article on how to purchase ALGO on Coinbase:
                <a href="https://www.coinbase.com/how-to-buy/algorand" target="_blank">https://www.coinbase.com/how-to-buy/algorand</a>
                <br><br>
            </li>
            <li>
                <strong>Send the ALGO from your Coinbase wallet to your Pera Algo wallet.</strong>
                <br><br>
                Here are articles on how to send crypto from Coinbase to your Pera Algo wallet:<br><br>
                <ol>
                    <li><a href="https://help.coinbase.com/en/wallet/sending-and-receiving/how-do-i-send-and-receive-crypto-through-wallet" target="_blank">https://help.coinbase.com/en/wallet/sending-and-receiving/how-do-i-send-and-receive-crypto-through-wallet</a></li><br>
                    <li><a href="https://support.perawallet.app/en/article/transferring-algo-from-an-exchange-platform-to-the-pera-algo-wallet-1jmgz96/" target="_blank">https://support.perawallet.app/en/article/transferring-algo-from-an-exchange-platform-to-the-pera-algo-wallet-1jmgz96/</a></li>
                </ol>
            </li>
        </ol>
        Once you have at least one ALGO in your Pera Algorand wallet, click NEXT.
    </div>
    <div class="buttonContainer">
        <router-link to="/free-nft-step-3"><button class="backButton directionButton">BACK</button></router-link>
        <router-link to="/free-nft-step-5"><button class="directionButton">NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}

img {
    width: 200px;
    margin: 0;
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
ol {
    padding: 0 5%;
    li::marker {
        font-weight: 800;
    }
    ol {
        list-style-type: upper-alpha;
    }
}
.content {
    text-align: justify;
    padding: 0 5%;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
