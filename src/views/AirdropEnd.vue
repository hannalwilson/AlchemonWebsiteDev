<template>
    <h1>THAT'S IT!</h1>
    <p>That’s it for now! We will email you once we are ready to send out your free AlcheGold!</p>
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/alchegold.png" class="alchegold" />
</template>

<style lang="scss" scoped>
h1 {
    margin-top: 6%;
}

p {
    text-align: center;
}

img {
    width: 250px;
    align-self: center;
}

button {
    margin-bottom: 5%;
    margin-top: 5%;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
