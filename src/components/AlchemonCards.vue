<template>
  <div class='cardContainer boxShadow'>
    <img :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${name}.png`"
      class="cardImage">
    <p class="cardText"> {{id}}<br>
      Type(s): {{ type }}<br>
      Minted: {{ minted }}</p>
  </div>
</template>

<script>
export default {
  props: ['name', 'id', 'type', 'minted']
}
</script>

<style lang="scss">
.cardContainer {
  width: 27vw;
  height: calc(27vw * 1.8);
  background-color: white;
  display: inline-block;
  margin: 2%;
  vertical-align: top;
}
@media (max-width: 1100px) {
  .cardContainer {
    height: calc(27vw * 2) }
  }
  @media (max-width: 650px) {
  .cardContainer {
    height: calc(27vw * 2.5) }
  }
    @media (max-width: 500px) {
  .cardContainer {
    height: calc(27vw * 3) }
  }
      @media (max-width: 350px) {
  .cardContainer {
    height: calc(27vw * 3.5) }
  }
        @media (max-width: 300px) {
  .cardContainer {
    height: calc(27vw * 4) }
  }
.cardText {
    font-weight: bold;
    color: #136af8;
    text-align: center;
    line-height: 175%;
}
.cardImage {
  width: 100%;
  margin: 0;
}
</style>
