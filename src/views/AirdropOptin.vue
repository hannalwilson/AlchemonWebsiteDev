<template>
        <div class="header">
            <h1>OPT-IN FOR ALCHEGOLD</h1>
        </div>
        <p>You must opt-in for (allow receipt of) AlcheGold prior to receiving it. Here is the asset ID:</p>
        <p><strong>877703456</strong></p>
    <p>Here is a video showing how to add an asset:</p>
    <div class="video">
        <iframe src="https://www.youtube.com/embed/U-v61k6lPto" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <p><strong>Once you have added the AlcheGold asset to your wallet, click the NEXT button.</strong></p>
    </div>
    <div class="buttonContainer">
        <router-link to="/alchegoldwallet"><button class="backButton">BACK</button></router-link>
        <router-link to="/alchegoldtwitter"><button>NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
iframe {
            width: 50vw;
            height: calc(50vw * .5625);
        }
p{
    text-align: center;
}

.header {
    margin-top: 6%;
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
