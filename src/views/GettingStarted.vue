<template>
    <div class="rules">
        <p class="orangeHeader spreadText">BASICS</p>
        <p class="whiteText">Alchemon are released in sets that comprise of 15 unique cards: 4 Common, 4 Uncommon,
            4 Rare, 2 Epic, and 1 Legendary. Lower level cards (Common and Uncommon) can
            evolve to higher levels through staking in the Training Grounds, leveling up in game, or by trading in
            lower rarity cards and a small evolving fee at our <router-link to="/craftandevolve">Craft & Evolve
            </router-link>
            store. Epic and Legendary Alchemon can be crafted here, as well, by trading in the correct lower rarity
            cards
            with a small evolving fee.<br><br>Alchemon is a Deflationary NFT Collecting Card Game. All Staking
            Evolutions, Trading
            Evolutions and Crafting Swaps have the Alchemon come back home to be redistributed to other players that
            want to do the same. 100% of all Commons go back on sale in tour <router-link to="/store">Alcheshop
            </router-link>.
            This is to make it easier for new players to get started &
            to help existing players to get what they need. This will keep the Crafting and Staking Wallets
            restocked so others can play the game. Uncommons, Rares, Epics, and Legendaries will never be sold by the
            store.<br><br>
            You can purchase Common Alchemon in our official <router-link to="/store">Alcheshop</router-link> or higher
            rarity
            Alchemon from secondary markets sites like <a href="https://www.randgallery.com/algo-collection/"
                target="_blank">RandGallery</a> and
            <a href="https://algoxnft.com/" target="_blank">ALGOxNFT</a>.
        </p>
        <p class="orangeHeader spreadText">NEW TO ALCHEMON AND ALGORAND?
        </p>
        <p class="whiteText">Here are instructions on how to set up your Algorand wallet and purchase Alchemon:</p>
        <router-link to="/instructions" class="navlinks"><button class="linkButton boxShadow">ALCHEMON
                INSTRUCTIONS</button></router-link>
        <p class="whiteText">Here are some excellent free educational videos!:
        </p>
        <a href="https://www.youtube.com/c/WhiteboardCrypto/videos" target="_blank"><button
                class="linkButton boxShadow">FREE EDUCATIONAL VIDEOS</button></a>
    </div>
</template>

<style lang="scss" scoped>

.linkButton {
    margin: 3% 20%;
    width:60%;
    font-size: 2vw;
    font-weight: bold;
    letter-spacing: .25vw;
    padding: 0;
}
.rules {
    background-color: #007bff;
    }
iframe {
    display: block;
    width: 50vw;
    height: calc(50vw /(858/571));
    margin: auto;

}
div {
    padding: 2%;
}
</style>
