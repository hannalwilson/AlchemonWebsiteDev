<template>
    <header>
        <h1>PURCHASE NFTs</h1>
    </header>
    <p>
        Now you will purchase three NFTs from our website.
        <br><br>
        <strong>Complete the following steps:</strong>
        <ol>
            <strong><li>
                Go to the Alchemon website: <a href="https://alchemon.net/" target="_blank">https://alchemon.net/</a><br><br>
            </li></strong>
            <strong><li>
                Connect your wallet by clicking CONNECT at the top of the screen. Select the type of wallet you want to connect to and
                then follow the instructions.<br><br>
            </li></strong>
            <strong><li>
                Then go the this webpage: <a href="https://alchemon.net/store" target="_blank">https://alchemon.net/store</a>
                <br><br>
            </li></strong>
            <strong><li>
                Purchase three NFTs of your choosing (click on the price button and follow the instructions).
            </li></strong>
        </ol>
        <span class="fixBold">Once you have <strong>3 different</strong> Alchemon NFTs in your wallet, click NEXT.</span>
    </p>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-4"><button class="backButton">BACK</button></router-link>
        <router-link to="/getting-started-step-6"><button>NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}

p {
    text-align: center;
}

img {
    width: 200px;
    margin: 0;
}

.fixBold {
    display: inline;
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
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
