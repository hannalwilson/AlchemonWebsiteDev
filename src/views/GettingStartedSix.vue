<template>
    <header>
        <h1>ACCEPT TOKENS</h1>
        <h3>STEP 6</h3>
    </header>
    <p>
        Alchemon has two tokens:
        <br>
        <ul>
            <li>AlcheCoin.</li>
            <li>AlcheGold.</li>
        </ul>
        You can earn these tokens simply by holding Alchemon NFTs in your wallet and playing our video game! You need to opt-in
        for (accept) these tokens.
        <br><br>
        <strong>Complete the following steps:</strong>
        <br>
        <ol>
            <strong><li>
                In Pera Wallet, select your wallet.<br><br>
            </li></strong>
            <strong><li>
                Click the plus sign on the right side of the screen.<br><br>
            </li></strong>
            <strong><li>
                Add the following assets:
                <br><br>
                <ul>
                    <li>310014962 (AlcheCoin)</li><br>
                    <li>877703456 (AlcheGold)</li>
                </ul>
            </li></strong>
        </ol>
        If you run into any difficulty with this, here is a video that shows how to navigate the wallet and how to add assets:
        <br><br>
        <span class="center"><iframe src="https://www.youtube.com/embed/z-rFSehvI60" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></span>
            <br><br>
            Once you have opted-in to AlcheCoin and AlcheGold, click NEXT.
    </p>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-5"><button class="backButton directionButton">BACK</button></router-link>
        <router-link to="/getting-started-step-7"><button class="directionButton">NEXT</button></router-link>
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
.center{
    margin: 0 auto;
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
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
