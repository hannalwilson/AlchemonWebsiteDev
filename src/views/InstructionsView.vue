<template>
<div class="instructions">
    <p class="darkBlueHeader spreadText">ALCHEMON WALKTHROUGH VIDEO</p>
    <iframe class="responsive-iframe" src="https://www.youtube.com/embed/HwcZ7Mmuqy8"></iframe>
    <p class="orangeHeader spreadText">ALCHEMON INSTRUCTIONS</p>
    <p>Follow these steps to purchase Alchemon and play the game:</p>
    <ol>
        <li>Download and install the Algorand Wallet app on your mobile device and set up your account.</li>
        <li>Set up an Algorand wallet at: <a href="https://wallet.myalgo.com/" target="_blank">My Algo Wallet</a>.</li>
        <li>Import the wallet from your mobile app to myalgo.com. To do so, follow these steps:</li>
            <ul>
                <li> Visit <a href="https://wallet.myalgo.com/add-wallet" target="_blank">wallet.myalgo.com/add-wallet</a>.</li>
                <li> Click on “Import Phrase.”</li>
                <li> Either enter in the Seed Phrase (Recovery Phrase) for your wallet or select QR Code to utilize that.</li>
            </ul>
        <li>Ensure you have ALGO in your wallet. If you don’t own any you can get it from most exchanges, including Coinbase, Bianace, and many more!</li>
        <li>Purchase your Alchemon cards here: <a href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM" target="_blank">Rand Gallery Alchemon NFT Collection</a>.</li>
        <li>You can view what’s in your wallet by visiting <a href="https://www.randgallery.com/algo-collection/" target="_blank">randgallery.com/algo-collection/</a> and then entering your wallet address in the search bar (you can copy your wallet address from the address book within your myalgo.com wallet).</li>
        <li>Add Alchemon Assets via Rand Gallery by completing these steps:</li>
            <ul>
                <li>Click on this link: <a href="https://www.randgallery.com/algo-collection/?address=306180273%2C+306181364%2C+306729637%2C+306183859%2C+306184765%2C+306186552%2C+306187531%2C+306188337%2C+306189097" target="_blank">Assets Part 1</a> and then select Add ASAs (you will need to have at least one Algorand in your wallet). Finish the transaction process.</li>
                <li>Click on this link: <a href="https://www.randgallery.com/algo-collection/?address=306190133%2C306190826%2C306191511%2C+310014962%2C+318280942%2C+320570576" target="_blank"> Assets Part 2</a> and then select Add ASAs. Finish the transaction process.</li>
            </ul>
        <li>To evolve (stake) a card, login to the Algorand Wallet app on your mobile device and send the card you wish to stake to this address: <b>5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y</b></li>
        <li>To send a card to the Hunting Grounds (enter the raffle), login to the Algorand Wallet app on your mobile device and send the card you wish to enter to this address: <b>HUNTMEC6NPJH7MLBUSMJQWZF5N5GPJBF6FJ5LYTRXR7NGLDBT5KB6453FA</b></li>
    </ol>
    <p><b>If you have any questions, please contact us through Discord or Telegram (listed in the footer).</b></p>
</div>
</template>

<style lang="scss" scoped>
.instructions {
    padding: 5%;
}
li {
    margin: 2%;
}
iframe {
    display: block;
    width: 50vw;
    height: calc(50vw /(858/571));
    margin: auto;

}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
