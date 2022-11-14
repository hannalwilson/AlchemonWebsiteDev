<template>
  <download-game>
    <h3>STEP 10 of 10</h3>
 </download-game>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-9"><button class="backButton directionButton">BACK</button></router-link>
    </div>
</template>

<script>
import DownloadGame from '@/components/steps/DownloadGame.vue'

export default {
  components: {
    DownloadGame
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}
button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 20vw;
}
h3 {
  margin-top: 0;
}

.buttonContainer {
    display: flex;
    justify-content: left;
    margin: 3%;
}

@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
    iframe {
    width: 90vw;
    height: calc(90vw * .5625);
    }
}
ol {
    padding: 1% 5%;
}
</style>
