<template>
    <join-twitter></join-twitter>
    <navigate-buttons :backURL="'/free-NFT-step-7'" :nextURL="'/free-NFT-step-9'"></navigate-buttons>
</template>

<script>
import JoinTwitter from '@/components/steps/JoinTwitter.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'
export default {
  components: { JoinTwitter, NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
