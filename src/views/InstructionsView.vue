<template>
    <div class="instructions">
        <p class="orangeHeader spreadText">ALCHEMON INSTRUCTIONS</p>
        <p>Follow these steps to purchase Alchemon and play the game:</p>
        <ol>
            <li>Download and install the Pera Wallet app on your mobile device and set up your account.</li>
            <li>Set up an Algorand wallet at: <a href="https://wallet.myalgo.com/" target="_blank">My Algo Wallet</a>.
            </li>
            <li>Import the wallet from your mobile app to myalgo.com. To do so, follow these steps:</li>
            <ul>
                <li> Visit <a href="https://wallet.myalgo.com/add-wallet"
                        target="_blank">wallet.myalgo.com/add-wallet</a>.</li>
                <li> Click on “Import Phrase.”</li>
                <li> Either enter in the Seed Phrase (Recovery Phrase) for your wallet or select QR Code to utilize
                    that.</li>
            </ul>
            <li>Ensure you have ALGO in your wallet. If you don’t own any you can get it from most exchanges, including
                Coinbase, Binanace, and many more!</li>
            <li>Purchase your Alchemon cards here: <router-link to="/store">AlcheShop</router-link>.</li>
            <li>You can view what’s in your wallet by visiting the <router-link to="/alchedex">AlcheDex</router-link>
                and then entering your wallet address in the search bar (you can copy your wallet address from the
                address book within your myalgo.com wallet).</li>
            <li>Opt-in to Alchemon Assets by completing these steps:</li>
            <ul>
                <li>Open the Pera Wallet app and select your wallet</li>
                <li>Click the yellow "+ Add" button and enter the name or Id of the Alchemon you want to opt-in to. (You
                    may need to select the "All" tab)</li>
            </ul>
            <li>Make sure you add the AlcheCoin and Alchemon Stake Flag assets to ensure you receive your weekly staking
                 rewards for holding Alchemon in your wallet.
            </li>
            <li>To evolve a card, login to the Algorand Wallet app on your mobile device and send the card you
                wish to evolve in the Training Grounds:
                <b>5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y</b>.
                Make sure the evolution of your card is available by visiting the <router-link to="/traininggrounds">
                    Training Grounds</router-link> page.</li>
            <li>To battle your Alchemon, download the desktop game for Mac or Windows <router-link to="/beta">here</router-link>, then head over to the
                <router-link to="/battlegame">Gameplay</router-link> page for an overview of how to battle.
            </li>
            <li>Last but certainly not least, check out the <router-link to="/huntinggrounds">Hunting Grounds</router-link> page to learn how you can
                enter our weekly raffle!</li>
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
