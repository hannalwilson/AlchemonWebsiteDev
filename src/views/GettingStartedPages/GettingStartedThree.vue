<template>
    <algorand-wallet></algorand-wallet>
    <navigate-buttons :backURL="'/getting-started-step-2'" :nextURL="'/getting-started-step-4'"></navigate-buttons>
</template>

<script>
import AlgorandWallet from '@/components/steps/AlgorandWallet.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: { AlgorandWallet, NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
