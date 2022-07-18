<template>
    <div class="huntinggrounds">
        <p class="whiteHeader spreadText">HUNTING GROUNDS</p>
        <p>The Hunting Grounds is evolving! Players no longer have to stake one of their Alchemon for a whole week to
            earn entries in the Hunting Grounds raffle. Entries will now be earned through battling your Alchemon. Each battle won
            equals one entry to the raffle and there is no limit to the number of entries any wallet can have. The raffle will occur
             weekly and random winners will get the prizes determined by RNG! Winning does not remove your entries, so one wallet
              can win multiple prizes each week. Good luck, you will need it.
        </p>
        <img id="moveAnimation_2" src="https://alchemon-website-assets.s3.amazonaws.com/assets/hunting_grounds.png"
            alt="Bat" width="35%">
        <p class="whiteHeader spreadText">HOW TO BATTLE </p>
        <p>Players can build a team of three Alchemon and battle them in our desktop game, currently in Beta. Download the
             <router-link to="/beta">game here</router-link> and then head over to our <router-link to="/howtobattle">Battle</router-link> page for instructions on
              creating your account. Good luck!
        </p>
        <img class="wallet_2" src="https://alchemon-website-assets.s3.amazonaws.com/assets/wallet_2.png" alt="Wallet"
            width="30%">
        <p>If you still have an Alchemon staked in the Hunting Grounds, don't worry, those still count for raffle entries. We will be
            sending those back to players over the next month. You can still send a 0.00 ALGO transaction with your Alchemon's name
            in the notes to receive it back sooner, if you'd like.
        </p>
        <img id="moveAnimation_3" src="https://alchemon-website-assets.s3.amazonaws.com/assets/hunting_grounds_1.png"
            alt="Demo" width="35%">
    </div>
</template>

<style lang="scss" scoped>

.huntinggrounds {
    padding-top: 5%;
    background-image: linear-gradient(to left, #ffa500, #ffb327, #ffffff);
}
p {
    color: #525151;
}
.whiteHeader {
    color: white;
}
</style>
