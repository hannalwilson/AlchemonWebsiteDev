<template>
    <accept-tokens>
        You can earn these tokens simply by holding Alchemon NFTs in your wallet and playing our video game!
        <br><br>
        Just like opting-in to NFTs, you need to opt-in for these tokens.<br><br>
    </accept-tokens>
    <navigate-buttons :backURL="'/free-NFT-step-5'" :nextURL="'/free-NFT-step-7'"></navigate-buttons>
</template>

<script>
import AcceptTokens from '@/components/steps/AcceptTokens.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: {
    AcceptTokens,
    NavigateButtons
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
