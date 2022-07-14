<template>
<div>
    <div class="whiteGrayBackground">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/token.png" class="token">
    </div>
    <div class="tokenomics">
        <p class="yellowHeader spreadText">TOKENOMICS</p>
        <p class="whiteText">
            We have always planned to have a dual token system for Alchemon. One token for outside the game, AlcheCoin, and one token for inside the game. Allow us to introduce AlcheGold!<br><br>
            <strong>AlcheCoin (ALCH)</strong><br>
            &#9830; AlcheCoin Asset: 310014962<br>
            &#9830; Total Supply: 100,000,000<br>
            &#9830; Type: Governance<br><br>
            <strong>Distribution:</strong><br>
            &#9830; Collector Rewards/Ecosystem Incentives - 45%<br>
            &#9830; Investments - 25%<br>
            &#9830; Team - 20%<br>
            &#9830; Treasury - 5%<br>
            &#9830; Partnerships - 5%<br><br>
            Holding ANY official Alchemon NFT Card in your wallet & also adding the Stake Flag asset (320570576) will earn you AlcheCoin weekly! We came up with a way that allows you to stake your cards in your own wallet! We are calling this "Wallet Staking," although technically it is better described as an airdrop. This acts as a flag for your personal wallet for a bot to see what cards you own and how much AlcheCoin you earned for the week & sends it!
            <br><br>
            AlcheCoin's main purpose is being the Governance token of Alchemon. It will be used to vote on issues, steer the future of the game & it controls the Treasury. At the launch of AlcheGold 5% of it and 5% of AlcheCoin will be paired on Tinyman. This will be the Treasury that is controlled by the AlcheCoin holders. Once it is matched and put on Tinyman it wont be touched until voted on by the holders.
            <br><br>
            To keep AlcheCoin circulating it will also be used for purchasing permanent assets with a discount. This allows Alchemon Inc the ability to earn it back with Alchemon NFT Cards, Special Attack ASAs, Art NFTs & more. The AlcheCoin earned back goes into the same distribution filter above to keep AlcheCoin coming in so we can continue rewarding holders.
            <br><br>
            <strong>AlcheGold (TBD)</strong><br>
            &#9830; AlcheGold Asset: TBD<br>
            &#9830; Total Supply: 10,000,000,000.0000<br>
            &#9830; Type: Utility<br><br>
            <strong>Distribution:</strong><br>
            &#9830; Player Rewards/Ecosystem Incentives - 85%<br>
            &#9830; Liquidity Provider Rewards for AlcheCoin - 10%<br>
            &#9830; Liquidity pool - 5%<br><br>
            AlcheGold will be earned by playing the Alchemon Game starting in V1. You will notice this is entirely for the Alchemon players, no Team or Investments. This is by design to keep as many rewards on the table for players. Also, we are incorporating burn functions, so AlcheGold is deflationary.
            <br><br>
            AlcheGold will have several uses: <br>
            &#9830; It will be burned to purchase impermanent game items like boosts, potions, etc. <br>
            &#9830; It can be burned to quick-level your Alchemon to upgrade them faster. So while you still have to play to gain XP & earn AlcheGold, you can turn around and burn that AlcheGold to level & evolve your Alchemon even faster. <br>
            &#9830; It will be burned to get Badges for your account.<br>
            <br>
            Outside of the above uses we also intend to build a GameFi suite for AlcheGold. It will allow users to stake, swap or win up & coming Algorand game assets through partnerships. This will make it so Alchemon can be a gateway to help mature the GameFi space on Algorand.
        </p>
        <img class="zoomIn_1" src="https://alchemon-website-assets.s3.amazonaws.com/assets/tokenomics.png" width="50%" alt="Tokenomics">
    </div>
    <div class="legal">
        <p class="darkBlueHeader spreadText">LEGAL OPINION LETTER</p>
        <img class="boxShadow" src="https://alchemon-website-assets.s3.amazonaws.com/assets/legal_opinion_1.png" alt="Legal Opinion Letter Page 1">
        <img class="boxShadow" src="https://alchemon-website-assets.s3.amazonaws.com/assets/legal_opinion_2.png" alt="Legal Opinion Letter Page 2">
    </div>
</div>
</template>

<style lang="scss" scoped>
.token {
    margin-top: 6%;
    margin-bottom: -1%;
    width: 65vw;
}
.tokenomics {
    background-image: linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB);
    padding-top: 4%;
}
.legal {
    margin-bottom: 5%;
    img {
    width: 45%;
    margin: auto 2%;
    }
}
@media (max-width: 800px) {
    .legal {
        img {
            width: 80%;
        }
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
