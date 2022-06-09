<template>
<div>
    <div class="rulesImage">
        <img src="../assets/play_rules.png" class="playrules">
    </div>
    <div class="newPlayer">
        <p class="orangeHeader spreadText">NEW TO ALCHEMON?<router-link to="/instructions" class="darkBlueHeader spreadText">START HERE</router-link></p>
        <p>Here are instructions on how to purchase and play Alchemon!:</p>
        <router-link to="/instructions" class="navlinks"><button class="linkButton boxShadow">ALCHEMON INSTRUCTIONS</button></router-link>
        <p>Are you new to Algorand or cryptocurrency in general? Here are some excellent free educational videos!:</p>
        <a href="https://www.youtube.com/c/WhiteboardCrypto/videos" target="_blank" ><button class="linkButton boxShadow">FREE EDUCATIONAL VIDEOS</button></a>
        <img class="zoomIn_1" src="../assets/archislash.gif" width="60%" alt="Archislash">
    </div>
    <div class="rules">
        <p class="yellowHeader spreadText">RULES</p>
        <p class="whiteText marginFix_2">Common & Uncommon Alchemon can be evolved into more powerful versions! <br><br>There are two ways to evolve your Alchemon: Trading or Staking.</p>
        <img class="zoomIn_1" src="../assets/vena_evolution.png" width="50%" alt="Vena Evolutions">
    </div>
    <div class="staking">
        <p class="grayHeader spreadText">STAKING</p>
        <p class="whiteText">Stake your Common or Uncommon Alchemon for 6 days in the Training Grounds Wallet and they will evolve to the next level. Supplies in the Staking Wallet are limited, so it will be first come, first serve. Your Alchemon that you sent will get evolved, so you will not receive it back, but will receive a more powerful version! Make sure you add the asset of the Alchemon you will be receiving. Add Alchemon Assets via the AlcheDex page. There are links to add a single asset or multiple assets via smart contract. Also, typing in the Alchemon into the official wallet and approving the asset works. Click <a class="blueLinks" href="#evolutionsAvailable">here</a> to view how many Alchemon are available for staking rewards.</p>
        <img class="zoomIn_1" src="../assets/handshake.png" width="30%" alt="Handshake">
    </div>
    <div class="trading">
        <p class="orangeHeader spreadText">TRADING</p>
        <p>If you can’t wait to stake then it will take some alchemy to get the job done. Trade 2 copies of the SAME Common or Uncommon Alchemon at the proper RandSwap page and in return you will receive an evolved version! <br><br>This is all set up in RandSwap with smart contracts and is completely trustless, so a small fee to Trade is involved. These are also a limited supply, so trade while they are available!</p>
        <img class="zoomIn_1" src="../assets/transfer.png" width="25%" alt="Transfer">
    </div>
    <div class="deflationary">
        <p class="grayHeader spreadText">DEFLATIONARY</p>
        <p class="whiteText">Alchemon is a Deflationary NFT Collecting Card Game. All Staking Evolutions, Trading Evolutions and Crafting Swaps have the Alchemon come back home to be redistributed to other players that want to do the same. 100% of all Commons go back on sale in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM" target="_blank">Alchemon Rand Store</a>. This is to make it easier for new players to get started & to help existing players to get what they need. This will keep the Crafting and Staking Wallets restocked so others can play the game. Set 01 Uncommon, Rare, Epic, Legendary will never be sold by the store.</p>
        <img class="zoomIn_1" src="../assets/deflationary.png" width="25%" alt="Deflation">
    </div>
    <div class="crafting">
        <p class="orangeHeader spreadText">CRAFTING</p>
        <p>The first and second Rares of each set combine to make an Epic level Alchemon. The third and fourth combine to make another Epic level Alchemon. Combine both unique Epics to craft the rumored Legendary Alchemon. Remember you are combining these 2 Alchemon to make a stronger one, so the original 2 get sent back to the Trading & Staking Wallets. Getting to the top will not be easy. This is also done through RandSwap and will have a higher fee than Trading.</p>
        <img class="zoomIn_1" src="../assets/craft.jpg" width="25%" alt="Crafting">
    </div>
    <staking-rewards></staking-rewards>
    <div class="evolveswap">
        <p class="yellowHeader spreadText">EVOLVE // SWAP</p>
        <p class="whiteText">All available evolutions are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM" target="_blank">Store</a>. The Quick-Evolve links below:</p>
        <p><br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-zip-into-zipadol-alchemon/" target="_blank">Evolve a <b>Zipadol</b> from 2 Zip</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-zipadol-into-zipacute-alchemon/" target="_blank">Evolve a <b>Zipacute</b> from 2 Zipadol</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-puff-into-hailpuff-alchemon/" target="_blank">Evolve a <b>Hailpuff</b> from 2 Puff</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-hailpuff-into-hailstorm-alchemon/" target="_blank">Evolve a <b>Hailstorm</b> from 2 Hailpuff</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-dagz-into-daggerz-alchemon/" target="_blank">Evolve a <b>Daggerz</b> from 2 Dagz</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-daggerz-into-daggerpult-alchemon/" target="_blank">Evolve a <b>Daggerpult</b> from 2 Daggerz</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-lika-into-chomp-alchemon/" target="_blank">Evolve a <b>Chomp</b> from 2 Lika</a>
        <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/evolve-chomp-into-likachomp-alchemon/" target="_blank">Evolve a <b>Likachomp</b> from 2 Chomp</a></p>
        <img class="zoomIn_1" src="../assets/evolutions.png" width="60%" alt="Evolutions">
    </div>
    <div class="craftswap">
        <p class="darkBlueHeader spreadText">CRAFT // SWAP</p>
        <p>All available crafts are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM" target="_blank">Store</a>. The Craft links below:</p>
        <!-- <p>
            <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/craft-a-voltstorm-alchemon/" target="_blank">Craft a <b>Voltstorm</b> from 2 Hailstorm and 2 Zipacute</a> SOLD OUT! More coming in the future...
            <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/craft-a-chomperz-alchemon/" target="_blank">Craft a <b>Chomperz</b> from 2 Daggerpult and 2 Likachomp</a> SOLD OUT! More coming in the future...
            <br>&#9830; <a class="blueLinks" href="https://www.randgallery.com/recipe/craft-a-cyclostorm-alchemon/" target="_blank">Craft a <b>Cyclostorm</b> from a Chomperz and a Voltstorm</a> SOLD OUT! More coming in the future...</p> -->
        <div>
            <img class="zoomIn_1" src="../assets/craft.jpg" width="15%" alt="Crafting Icon">
            <img class="zoomIn_1" src="../assets/transfer.png" width="15%" alt="Trading Icon">
        </div>
    </div>
    <div class="evolvestake">
        <p class="yellowHeader spreadText">EVOLVE // STAKE</p>
        <p class="whiteHeader">Wallet address: <b>5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y</b></p>
        <img class="wallet_1" src="../assets/wallet_1.jpg" alt="Wallet" width="50%"><br>
        <img id="trainingAnimation_1" src="../assets/10_bolt.png" width="50%" alt="Bolt flipping">
        <p class="orangeHeader spreadText">TRAINING GROUNDS</p>
        <p class="whiteText">You can send the Alchemon you want evolved to this address at any time. 1 Alchemon per wallet. After 7 days your Alchemon will evolve if possible! There are a limited # of available NFT Cards for your Alchemon to be turned into. The reserve of available upgrades is kept in the Creator Wallet and displayed below so anyone can see them. It is first come, first serve for staked Alchemon to get evolved. MAKE SURE YOU ADD THE ASSET OF THE EVOLVED VERSION YOU ARE TO RECEIVE, if you do not, you forfeit your evolution. I have made links to easily add all assets of the the game on the AlcheDex page.</p>
        <img id="trainingAnimation_2" src="../assets/24_drathslayer.png" width="50%" alt="Drathslayer flipping">
        <staking-view class="evolutionsAvailable"></staking-view>
    </div>
    <div class="huntinggrounds">
        <p class="whiteHeader spreadText">HUNTING GROUNDS</p>
        <p>A seperate wallet to stake an extra Alchemon for a chance to earn prizes! Stake 1 Alchemon per wallet here for 7 days and you earn entries for a raffle! You keep your Alchemon and can pull it out at any time with a note on a 0.00 transaction, but only NFT Cards staked from Sunday until the drawing earn you entries. The raffle will occur weekly and random winners will get the prizes determined by RNG! Winning does not remove your entries, so one wallet can win multiple prizes each week. Good luck, you will need it. Only time will tell what the lucky Alchemon will find in future weeks of the Hunting Grounds.<br><br>&diams; Common = 1 Raffle Entry<br><br>&diams; Uncommon = 2 Raffle Entries<br><br>&diams; Rare // Epic // Legendary = 3 Raffle Entries</p>
        <img id="moveAnimation_2" src="../assets/hunting_grounds.png" alt="Bat" width="35%">
        <p class="whiteHeader spreadText">WALLET ADDRESS FOR THE HUNTING GROUNDS: </p>
        <p><b>HUNTMEC6NPJH7MLBUSMJQWZF5N5GPJBF6FJ5LYTRXR7NGLDBT5KB6453FA</b></p>
        <img class="wallet_2" src="../assets/wallet_2.png" alt="Wallet" width="30%">
        <p>Stake your Alchemon to be entered into an RNG raffle. Only one Alchemon staked per address. Any duplicate entries from the same address will be sent back. Must stake starting on Sunday to earn the raffle entries. There will be a weekly announcment of what prizes are in the raffle. Raffle will be scheduled/paid out weekly on Sat/Sun.</p>
        <img id="moveAnimation_3" src="../assets/hunting_grounds_1.png" alt="Demo" width="35%">
    </div>
    <div class="eggs">
        <p class="orangeHeader spreadText">EGGS</p>
        <p>So you got an Egg, nice job!<br><br>It can be traded in for a new Set Common that you will get to own before the Set Pack Opening!<br><br>Eggs may contain different rarities.</p>
        <img id="loader_text" src="../assets/Egg.png" width="25%" alt="Egg">
    </div>
    <div class="distribution">
        <p class="yellowHeader spreadText">DISTRIBUTION</p>
        <p class="whiteText">The Trading and Staking Wallets will always have a moving and changing amount of NFT Cards.<br><br>We reserve the ability to rebalance the stock between the two at any time based on popularity or demand. Here are the distribution numbers for each released set:<br><br>&#9830; Set 01 Total NFT Cards: 585<br><br>&#9830; Set 02 Total NFT Cards: 1,230<br><br>&#9830; Set 03 Total NFT Cards: 6,650</p>
        <img src="../assets/distributionTable1.png" width="90%" alt="Distribution Table 1" class="zoomIn_1">
        <img src="../assets/distributionTable2.png" width="90%" alt="Distribution Table 2" class="zoomIn_1">
        <img src="../assets/distributionTable3.png" width="90%" alt="Distribution Table 3" class="zoomIn_1">
        <img src="../assets/distributionTable4.png" width="90%" alt="Distribution Table 4" class="zoomIn_1">
        <img src="../assets/distributionTable5.png" width="90%" alt="Distribution Table 5" class="zoomIn_1">
    </div>
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
.stakinginfo{
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB);
}
.evolveswap {
    background-image: linear-gradient(to right, #ffa500, #ffb327);
}
.evolvestake{
    background-color: #007bff;
}
.huntinggrounds{
    background-image: linear-gradient(to left, #ffa500, #ffb327,#ffffff);
}
@keyframes move8 {
    0%   {left:-35%; top:0;opacity:0;}
    10%  {left:5%; top:0;opacity:1;}
    80%  {left:45%; top:0;opacity:1;}
    100% {left:65%; top:0;opacity:0;}
}
@keyframes move9 {
    0%   {left:65%; top:0;opacity:0;}
    10%  {left:55%; top:0;opacity:1;}
    80% {left:-45%; top:0;opacity:1;}
    100% {left: -70%; top:0%;opacity:0;}
}
#moveAnimation_2 {
    vertical-align: middle;
    position: relative;
    animation-name: move9;
    animation-duration: 5s;
    animation-iteration-count:infinite;
}
#moveAnimation_3 {
    vertical-align: middle;
    position: relative;
    animation-name: move8;
    animation-duration: 5s;
    animation-iteration-count:infinite;
}
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}
#loader_text {
    animation: 1s shake infinite alternate;
}
.distribution {
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB);
}
@keyframes spin_1 {
0% { transform: rotate(360deg); }
100% { transform: rotate(0deg); }
}
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}

#trainingAnimation_1 {
position: relative;
animation-name: spin;
animation-duration: 7s;
animation-iteration-count:infinite;
}

#trainingAnimation_2 {
position: relative;
animation-name: spin_1;
animation-duration: 7s;
animation-iteration-count:infinite;
}
</style>

<script>
import StakingView from './StakingView.vue'
import StakingRewards from './StakingRewards.vue'
export default {
  components: {
    StakingView,
    StakingRewards
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
