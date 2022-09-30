<template>
        <div class="header">
            <h1>THAT'S IT!</h1>
        </div>
    <p>That’s it for now! We will email you once we are ready to send out your free AlcheGold!</p>
    <p><strong>In the meantime, check out the NFTs for sale in our store!</strong></p>
    <router-link to="/store"><button>ALCHESHOP</button></router-link>
</template>

<style lang="scss" scoped>
@media (max-width: 800px) {
    button {
        min-width: 40vw;
    }
}
.header {
    margin-top: 6%;
}

p {
    text-align: center;
}

img {
    width: 250px;
    align-self: center;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
