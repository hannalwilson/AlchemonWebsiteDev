<template>
    <header>
        <h1>WHY ALGORAND?</h1>
    </header>
    <p>
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
        </ol><br>
        Please click NEXT.
    </p>
    <div class="buttonContainer">
        <router-link to="/getting-started-step-1"><button class="backButton">BACK</button></router-link>
        <router-link to="/getting-started-step-3"><button>NEXT</button></router-link>
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
    justify-content: space-between;
    margin: 3%;
}

@media (max-width: 800px) {
    button {
        min-width: 35vw;
    }
}

ol {
    padding: 0 5%;
    list-style-type: upper-alpha;
}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
