<template>
    <div class="rulesImage">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/play_rules.png" class="playrules">
    </div>
    <div class="newPlayer">
        <p class="orangeHeader spreadText">NEW TO ALCHEMON?
        </p>
        <p>Here are instructions on how to set up your Algorand wallet and purchase Alchemon:</p>
        <router-link to="/instructions" class="navlinks"><button class="linkButton boxShadow">ALCHEMON
                INSTRUCTIONS</button></router-link>
        <p>Are you new to Algorand or cryptocurrency in general? Here are some excellent free educational videos!:
        </p>
        <a href="https://www.youtube.com/c/WhiteboardCrypto/videos" target="_blank"><button
                class="linkButton boxShadow">FREE EDUCATIONAL VIDEOS</button></a>
    </div>
    <div class="rules">
        <p class="yellowHeader spreadText">BASICS</p>
        <p class="whiteText">Alchemon are released in sets that comprise of 15 unique cards: 4 Common, 4 Uncommon,
            4 Rare, 2 Epic, and 1 Legendary. Lower level cards (Common and Uncommon) can
            evolve to higher levels through staking in the Training Grounds, leveling up in game, or by trading in
            lower rarity cards and a small evolving fee at our <router-link to="/craftandevolve">Craft & Evolve
            </router-link>
            store. Epic and Legendary Alchemon can be crafted here, as well, by trading in the correct lower rarity
            cards
            with a small evolving fee.<br><br>
            You can purchase Common Alchemon in our official <router-link to="/store">Alcheshop</router-link> or higher
            rarity
            Alchemon from secondary markets sites like <a href="https://www.randgallery.com/algo-collection/"
                target="_blank">RandGallery</a> and
            <a href="https://algoxnft.com/" target="_blank">ALGOxNFT</a><br><br>
        </p>
        <img class="zoomIn_1" src="https://alchemon-website-assets.s3.amazonaws.com/assets/vena_evolution.png"
            width="50%" alt="Vena Evolutions">
    </div>
    <div class="staking">
        <p class="grayHeader spreadText">STAKING</p>
        <p class="whiteText">Stake your Common or Uncommon Alchemon for 6 days in the Training Grounds Wallet and
            they will evolve to the next level. Supplies in the Staking Wallet are limited, so it will be first
            come, first serve. Your Alchemon that you sent will get evolved, so you will not receive it back, but
            will receive a more powerful version! Make sure you add the asset of the Alchemon you will be receiving.
            Add Alchemon Assets via the AlcheDex page. There are links to add a single asset or multiple assets via
            smart contract. Also, typing in the Alchemon into the official wallet and approving the asset works.
            Click <router-link to="/traininggrounds">here</router-link> to view how many Alchemon are
            available
            for staking rewards.</p>
    </div>
    <div class="trading">
        <p class="orangeHeader spreadText">TRADING</p>
        <p>If you can’t wait to stake then it will take some alchemy to get the job done. Trade 2 copies of the SAME
            Common or Uncommon Alchemon at our Craft & Evolve Store and in return you will receive an evolved
            version! <br><br>This is all set up smart contracts and is completely trustless, so a
            small fee to Trade is involved. These are also a limited supply, so trade while they are available!</p>
    </div>
    <div class="crafting">
        <p class="orangeHeader spreadText">CRAFTING</p>
        <p>The first and second Rares of each set combine to make an Epic level Alchemon. The third and fourth
            combine to make another Epic level Alchemon. Combine both unique Epics to craft the rumored Legendary
            Alchemon. Remember you are combining these 2 Alchemon to make a stronger one, so the original 2 get sent
            back to the Trading & Staking Wallets. Getting to the top will not be easy. This is also done through
            smart contracts and will have a higher fee than Trading.</p>
    </div>
    <div class="deflationary">
        <p class="grayHeader spreadText">DEFLATIONARY</p>
        <p class="whiteText">Alchemon is a Deflationary NFT Collecting Card Game. All Staking Evolutions, Trading
            Evolutions and Crafting Swaps have the Alchemon come back home to be redistributed to other players that
            want to do the same. 100% of all Commons go back on sale in tour <router-link to="/store">ALCHESHOP
            </router-link>. This is to make it easier for new players to get started &
            to help existing players to get what they need. This will keep the Crafting and Staking Wallets
            restocked so others can play the game. Uncommons, Rares, Epics, and Legendaries will never be sold by the
            store.</p>
    </div>
    <div class="eggs">
        <p class="orangeHeader spreadText">EGGS</p>
        <p>So you got an Egg, nice job!<br><br>It can be traded in for a new Set Common that you will get to own
            before the Set Pack Opening!<br><br>Eggs may contain different rarities.</p>
    </div>
    <div class="distribution">
        <p class="yellowHeader spreadText">DISTRIBUTION</p>
        <p class="whiteText">The Trading and Staking Wallets will always have a moving and changing amount of NFT
            Cards.<br><br>We reserve the ability to rebalance the stock between the two at any time based on
            popularity or demand. Here are the distribution numbers for each released set:<br><br>&#9830; Set 01
            Total NFT Cards: 585<br><br>&#9830; Set 02 Total NFT Cards: 1,230<br><br>&#9830; Set 03 Total NFT Cards:
            6,650<br><br>&#9830; Set 04 Total NFT Cards: 86,000<br><br>&#9830; Set 05 Total NFT Cards: 86,000
        </p>
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable1.png" width="90%"
            alt="Distribution Table 1" class="zoomIn_1">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable2.png" width="90%"
            alt="Distribution Table 2" class="zoomIn_1">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable3.png" width="90%"
            alt="Distribution Table 3" class="zoomIn_1">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable4.png" width="90%"
            alt="Distribution Table 4" class="zoomIn_1">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable5.png" width="90%"
            alt="Distribution Table 5" class="zoomIn_1">
    </div>
</template>

<style lang="scss" scoped>

.playrules {
    width: 50%;
    margin-top: 8%;
}
.rulesImage {
    background-image: linear-gradient(to right, #ffa500, #ffb327,#ffffff);
}
.newPlayer {
    background-image: linear-gradient(to right, #fbfbfb, #ffffff);
}
.linkButton {
    margin: 3% 20%;
    width:60%;
    font-size: 2vw;
    font-weight: bold;
    letter-spacing: .25vw;
    padding: 0;
}
.rules {
    background-image: linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
}
.staking {
    background-image: linear-gradient(to right, #ffa500, #ffb327);
}

.deflationary {
    background-image: linear-gradient(to left, #ffa500, #ffb327);
}

.stakinginfo {
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB);
}

.evolveswap {
    background-image: linear-gradient(to right, #ffa500, #ffb327);
}

.evolvestake {
    background-color: #007bff;
}

.huntinggrounds {
    background-image: linear-gradient(to left, #ffa500, #ffb327, #ffffff);
}
.distribution {
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB);
}
.instructions {
    padding: 5%;
}
li {
    margin: 2%;
}
iframe {
    display: block;
    width: 50vw;
    height: calc(50vw /(858/571));
    margin: auto;

}
</style>

<script>
export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
