<template>
<purchase-algo>
    <span class="content">
    Transactions on the Algorand blockchain cost .001 ALGOs. This means that you must own some ALGO before receiving your
        free NFT.
        <br><br>
        <i>If you already have at least one ALGO in your wallet, you can skip this step.</i>
        <br><br>
        Again, if you do not have at least one ALGO in your wallet, you cannot send or receive NFTs. If you do not own any ALGO,
        you will need to set up a Coinbase account and purchase some.
        <br><br></span>
    </purchase-algo>
        <navigate-buttons :backURL="'/free-NFT-step-3'" :nextURL="'/free-NFT-step-5'"></navigate-buttons>
</template>

<style lang="scss" scoped>
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

.content {
    text-align: justify;
    padding: 0 5%;
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
