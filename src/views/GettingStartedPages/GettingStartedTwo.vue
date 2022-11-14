<template>
    <header>
        <h1>WHY ALGORAND?</h1>
        <h3>STEP 2 of 10</h3>
    </header>
    <algorand-info></algorand-info>
    <navigate-buttons :backURL="'/getting-started-step-1'" :nextURL="'/getting-started-step-3'"></navigate-buttons>
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
  components: { AlgorandInfo, NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
