<template>
    <header>
        <h1>PURCHASE ALGO</h1>
    <h3>STEP 4 of 10</h3></header>
    <slot></slot>
    <div class="content">
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
                <slot name="reminder"></slot>
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
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
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
