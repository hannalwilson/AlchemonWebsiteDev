<template>
    <header>
        <h1>ALGORAND</h1>
        <h3>STEP 2 of 10</h3>
    </header>
    <algorand-info></algorand-info>
    <navigate-buttons :backURL="'/free-NFT-step-1'" :nextURL="'/free-NFT-step-3'"></navigate-buttons>
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}
</style>

<script>
import AlgorandInfo from '@/components/steps/AlgorandInfo.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    AlgorandInfo,
    NavigateButtons
  }
}
</script>
