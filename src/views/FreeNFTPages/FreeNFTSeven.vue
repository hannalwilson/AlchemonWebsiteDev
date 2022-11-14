<template>
<join-discord></join-discord>
    <navigate-buttons :backURL="'/free-NFT-step-6'" :nextURL="'/free-NFT-step-8'"></navigate-buttons>
</template>

<script>
import JoinDiscord from '@/components/steps/JoinDiscord.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    JoinDiscord,
    NavigateButtons
  }
}
</script>
