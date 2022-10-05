<template>
    <header>
        <h1>ACCEPT TOKENS</h1>
        <h3>STEP 6 of 10</h3>
    </header>
    <div class="pageContent">
        Alchemon has two tokens:
        <br>
        <ol>
            <li>AlcheCoin.</li><br>
            <li>AlcheGold.</li>
        </ol>
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
        <div class="center"><iframe src="https://www.youtube.com/embed/z-rFSehvI60" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></div>
            <br>
            Once you have opted-in to AlcheCoin and AlcheGold, click NEXT.
        </div>
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
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
