<template>
    <header>
        <h1>ACCEPT TOKENS</h1>
        <h3>STEP 6 of 10</h3>
    </header>
    <div class="pageContent">
        Alchemon has two tokens:
        <br>
        <ol class="orderedList">
            <li>AlcheCoin.</li><br>
            <li>AlcheGold.</li>
        </ol>
        <slot></slot>
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

ol, ul {
    padding: 1% 5%;
}
ol.orderedList li {
    counter-increment: alch
}

ol.orderedList li:before {
    content: counter(alch) ") ";
}

ol.orderedList {
    list-style: none;
    counter-reset: alch;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
