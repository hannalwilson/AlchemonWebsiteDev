<template>
    <div class="header">
        <h1>OPT-IN FOR ALCHEGOLD</h1>
    </div>
    <div class="description">
        <p>You must opt-in for AlcheGold prior to receiving it. Here is the asset ID:</p>
        <p><strong>877703456</strong></p>
    </div>
    <div class="video"><p>Here is a video showing how to add an asset:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/U-v61k6lPto" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
        <router-link to="/alchegoldwallet"><button>BACK</button></router-link>
        <router-link to="/alchegoldtwitter"><button>NEXT</button></router-link>
</template>

<style lang="scss" scoped>
.header {
    margin: 10%;
}

.description {
    p{
        text-align: center;
    }
}
.video {
    margin-top: 5%;
}
h1 {
    margin: 10%;
}

button {
    margin-bottom: 5%;
    margin-top: 5%;
}
</style>
