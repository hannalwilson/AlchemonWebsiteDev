<template>
    <join-telegram></join-telegram>
    <navigate-buttons :backURL="'/free-NFT-step-8'" :nextURL="'/free-NFT-step-10'"></navigate-buttons>
</template>

<script>
import JoinTelegram from '@/components/steps/JoinTelegram.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: { JoinTelegram, NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
