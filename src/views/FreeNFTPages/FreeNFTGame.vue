<template>
    <download-game><span class="content">SUCCESS! You have successfully submitted your request for a free Alchemon NFT. We would send it over soon. In the
    meantime, download and install the Alchemon video game!</span></download-game>
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
.content {
  text-align: justify;
  padding: 0 5%;
}
</style>
