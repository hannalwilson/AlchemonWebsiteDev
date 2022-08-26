<template>
  <div class="faq">
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/FAQ.png" alt="FAQ" id="faqIMG">
    <p class="yellowHeader spreadText">FREQUENTLY ASKED QUESTIONS</p>
    <question-accordion class="accordion"></question-accordion>
  </div>
</template>

<script>
import QuestionAccordion from '../components/QuestionAccordion.vue'

export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    QuestionAccordion
  }
}
</script>

<style lang="scss" scoped>
    img{
        width: 100vw;
        margin-top: -10px;
    }
    .faq {
        background-image: linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB, #E7F0FE);
        padding-bottom: 5%;
    }
</style>
