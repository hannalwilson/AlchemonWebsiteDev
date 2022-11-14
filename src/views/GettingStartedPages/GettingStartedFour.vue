<template>
<purchase-algo>
    <span class="content">
    In order to play the Alchemon video game, you must own at least three (3) unique Alchemon NFTs. Our NFTs are much more
    affordable than other projects.
    <br><br>
    You can see the prices of our NFTs and which ones are for sale here: <router-link to="/store" target="_blank">https://alchemon.net/store</router-link>
    <br><br>
    If you do not own any ALGO, you will need to set up a Coinbase account and purchase some.
    <br><br></span>
    <template v-slot:reminder>As a reminder, you can see current prices for Alchemon NFTs here:
    <router-link to="/store" target="_blank">https://alchemon.net/store</router-link><br><br></template>
</purchase-algo>
    <navigate-buttons :backURL="'/getting-started-step-3'" :nextURL="'/getting-started-step-5'"></navigate-buttons>
</template>

<style lang="scss" scoped>
.content {
    text-align: justify;
    padding: 0 5%;
    margin-top: 1em;
}
</style>

<script>
import PurchaseAlgo from '@/components/steps/PurchaseAlgo.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: { PurchaseAlgo, NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
