<template>
    <header>
        <h1>PURCHASE NFTs</h1>
        <h3>STEP 5 of 10</h3></header>
    <div class="content">
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
    </div>
    <navigate-buttons :backURL="'/getting-started-step-4'" :nextURL="'/getting-started-step-6'"></navigate-buttons>
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}

img {
    width: 200px;
    margin: 0;
}

.fixBold {
    display: inline;
}

ol {
    padding: 1% 5%;
}
.content {
    text-align: justify;
    padding: 0 5%;
}
</style>

<script>
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: { NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
