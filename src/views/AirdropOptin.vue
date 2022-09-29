<template>
        <h1>OPT-IN FOR ALCHEGOLD</h1>
    <div class="description">
        <p>You must opt-in for AlcheGold prior to receiving it. Here is the asset ID:</p>
        <p><strong>877703456</strong></p>
        <p><strong>Once you have added the AlcheGold asset to your wallet, click the NEXT button</strong></p>
    </div>
    <div class="video"><p>Here is a video showing how to add an asset:</p>
    <iframe src="https://www.youtube.com/embed/U-v61k6lPto" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
    <div>
        <router-link to="/alchegoldwallet"><button class="backButton">BACK</button></router-link>
        <router-link to="/alchegoldtwitter"><button>NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>

    p{
        text-align: center;
    }

h1 {
    margin-top: 6%;
}
button {
    margin-bottom: 3%;
    margin-top: 2%;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
