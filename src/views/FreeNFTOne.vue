<template>
    <div class="header">
        <h1>STEPS FOR YOUR FREE NFT</h1>
        <h3>STEP 1 of 10</h3>
    </div>
    <p>
        Complete these 10 steps to get a free Alchemon NFT! (Only one NFT allowed per person.)
        <br><br>
        To start, if you are new to this whole thing, here is a great article that defines cryptocurrency, blockchain and NFTs
        for beginners:
        <br><br>
        <router-link to="/cryptoblockchainandnfts" target="_blank">Cryptocurrency, Blockchain and NFTs Simply Defined
        </router-link>
        <br><br>
        There are many steps to this process but at the end you will be fully set up to receive your very own common Alchemon
        NFT!
        <br><br>
        Please click NEXT.

    </p>
<div class="buttonContainer">
    <router-link to="/free-NFT-step-2"><button class="directionButton">NEXT</button></router-link>
</div>
</template>

<style lang="scss" scoped>
.header {
    margin-top: 6%;
}

button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 20vw;
}
.buttonContainer {
    display: flex;
    justify-content: right;
    margin: 3%;
}
@media (max-width: 800px) {

    button {
            min-width: 35vw;
        }
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
