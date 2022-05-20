/* eslint-disable no-tabs */
<template>
    <div @click="toggleAnswer">
        <p class="question">{{ question }}</p>
        <div v-if="showAnswer" class="answer"><p v-html="answer"></p></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showAnswer: false
    }
  },
  methods: {
    toggleAnswer () {
      this.showAnswer = !this.showAnswer
    }
  },
  props: ['question', 'answer']
}
</script>

<style lang="scss" scoped>
div {
    background: white;
    width: 80vw;
    margin: 0 auto;
    border-radius: 5px;
    border: 1px orange solid;
    border-bottom: none;
    cursor: pointer;
    overflow: hidden;
}
.answer {
  background-color: orange;
    background-image: linear-gradient(to left, #ffa500, #ffb327,#ffffff);
    width: inherit;
    text-align: justify;
}
.question {
  color: #007bff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: normal;
  padding-left: 1%;
}
</style>
