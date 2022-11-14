<template>
<join-discord></join-discord>
    <navigate-buttons :backURL="'/getting-started-step-6'" :nextURL="'/getting-started-step-8'"></navigate-buttons>
</template>

<script>
import JoinDiscord from '@/components/steps/JoinDiscord.vue'
import NavigateButtons from '@/components/steps/NavigateButtons.vue'

export default {
  components: { JoinDiscord, NavigateButtons },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
