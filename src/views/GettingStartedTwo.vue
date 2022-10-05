<template>
    <header>
        <h1>WHY ALGORAND?</h1>
        <h3>STEP 2 of 10</h3>
    </header>
    <div class="content">
        <i>Alchemon</i> is a combination of the words “<u>Al</u>gorand” + “Al<u>ch</u>emy” + “<u>Mon</u>ster.”
        <br><br>
        Algorand is one of the most-used blockchains in the world and its cryptocurrency (ALGO) is growing in popularity every
        day! Algorand was chosen as the blockchain to build Alchemon on because:
        <ol>
            <li>Algorand has relatively low transaction fees compared to other blockchains (it costs less than a cent to send things on
            the Algorand blockchain).<br><br></li>
            <li>Algorand is a green blockchain – meaning, it’s carbon-negative (Algorand actually removes carbon dioxide from the
            atmosphere rather than adding it).<br><br></li>
            <li>Algorand is one of the most secure blockchains. Keeping our users safe is one of our top priorities!</li>
        </ol>
        Please click NEXT.
    </div>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-1"><button class="backButton directionButton">BACK</button></router-link>
        <router-link to="/getting-started-step-3"><button class="directionButton">NEXT</button></router-link>
    </div>
</template>

<style lang="scss" scoped>
header {
    margin-top: 6%;
}

button {
    margin-bottom: 3%;
    margin-top: 2%;
    min-width: 20vw;
}

.buttonContainer {
    display: flex;
    justify-content: space-between;
    margin: 3%;
}

@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
}

ol {
    padding: 1% 5%;
}
.content {
    text-align: justify;
    padding: 0 5%;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
