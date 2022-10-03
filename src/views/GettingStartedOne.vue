<template>
    <header>
        <h1>GETTING STARTED WITH ALCHEMON</h1>
    </header>
    <p>
        This series of ten steps will fully set you up to play Alchemon!
        <br><br>
        To start, if you are new to this whole thing, here is a great article that explains cryptocurrency, blockchain and NFTs
        for beginners:
        <br><br>
        <a href="alchemon.net/cryptoblockchainandnfts" target="_blank">Cryptocurrency, Blockchain and NFTs Simply Defined</a>
        <br><br>
        There are many steps to this process but at the end you will own Alchemon NFTs, battle them within our video game and
        earn tokens!
        <br><br>
        Please click NEXT.
    </p>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-2"><button>NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}

p {
    text-align: center;
    margin: inherit 5%;
}

img {
    width: 200px;
    margin: 0;
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
