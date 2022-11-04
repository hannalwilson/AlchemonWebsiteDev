<template>
    <div class="battleGame">
        <p class="orangeHeader spreadText">PLAY THE VIDEO GAME</p>
        <p>Download the Alchemon Game here!:
        </p>
        <router-link to="/getting-started-step-10"><button>DOWNLOAD GAME</button></router-link>
        <p class="orangeHeader spreadText">OVERVIEW</p>
        <p>The Alchemon Card Game is a 3v3 battle style game against a CPU. Players need three unqiue Alchemon to play. The game currently includes
            passives, potent and weak attacks, potions, and much more. PvP and more battle modes are coming soon!
        </p>
        <p class="orangeHeader spreadText">RELEASE NOTES - BETA 2.0.2</p>
        <p>WHATS NEW<br><br>
        <ul>
            <li>Leveling system: boost your Alchemon's power by leveling them up! Knock out enemies and win battles to
                gain experience. Level caps set temporarily until V1 release.</li>
            <li>Evolutions: Coming in 1.0 release.</li>
            <li>Equipable NFTs: Purchase alchebility NFTs from our Website and equip them to your Alchemon! Each attack
                can be equipped to a single Alchemon of the same type (fire, water, psychic, etc).</li>
            <li>Set 5 Alchemon: All set 5 cards are now implemented in game!</li>
            <li>First community set: All Alchemon/Yieldy Flamingos have been added to the game! Once the set has been
                released to the public, they will become playable.</li>
            <li>Improved rewards - Each win now rewards players with 6 ALCH. On top of this, each win will count as a
                single entry into the Hunting Grounds rewards lottery.</li>
            <li>Forgot Password Functionality added.</li>
        </ul>
        </p>
        <p>BUG FIXES<br><br>
        <ul>
            <li>Fixed issues related to various hover effects.</li>
            <li>Balanced Alchemon animation's scale.</li>
            <li>Fixed bug that prevented battle from ending when final Alchemon was affected with the Singed debuff.
            </li>
            <li>Multiple API optimizations made.</li>
            <li>Various typos fixed.</li>
        </ul>
        </p>
        <p class="orangeHeader spreadText">STATS</p>
        <p>Each Alchemon has its own stats. These stats include:
        <ul>
            <li>Health - how much damage a card can take</li>
            <li>Attack - how powerful the card's attacks are</li>
            <li>Defense - lessens the effectiveness of attacks</li>
            <li>Speed - determines the order of attackers</li>
        </ul>
        </p>
        <p>Stamina is the cost of using an attack. Each attack will use up between 1 and 4 stamina. If
            you’re Alchemon
            does not have enough stamina to use an attack, you can either:
        <ol>
            <li>Use your turn to recharge that Alchemon’s stamina back to full, or</li>
            <li>Use a different Alchemon to attack and wait until enough turns have passed for the other Alchemon to
                re-fill enough stamina to attack (each Alchemon gains 1 stamina at the end of every turn).</li>
        </ol>
        </p>
        <p class="orangeHeader spreadText">TYPES</p>
        <p>
            Some types are more effective against other types, meaning their attack will damage certain types more than
            others. Attacks going in the opposite direction of the arrow will have reduced damage.
        </p>
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/typesWheel.png">
        <p class="orangeHeader spreadText">PASSIVES</p>
        <p>Passive abilities are effects that may or may not be applied to an Alchemon after an
            attack. Each type has a unique passive ability. The higher the level of your Alchemon, the more likely a
            passive ability effect will occur. For example, Legendary Alchemon attacks are more likely to result in a
            passive ability effect than a Common.</p>
        <p class="orangeHeader spreadText">ITEMS</p>
        <p>
            In the Alchemon Shop, there are 5 different potions available for purchase.
        <ul>
            <li>Health - Heals Alchemon 100 points</li>
            <li>Elixir - Removes debuff from a single Alchemon</li>
            <li>Speed - Increases Alchemon’s speed by 50%</li>
            <li>Defense - Increases Alchemon’s defense by 50%</li>
            <li>Attack - Increases Alchemon’s attack power by 20%</li>
        </ul>
        </p>
        <p>
            You are allowed three items in your backpack per battle. To select the items you want to bring, click on My
            Cards on the Main Menu. Click More in the bottom right corner. If you have purchased items from the shop,
            they will display here with the amount you own in the bottom left corner. Select up to three items to pack
            in your backpack. Items will take affect when the battle round starts.</p>
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/battlezipacute.png" class="battle">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/battlemiya.png" class="battle">
    </div>
</template>

<script>

export default {
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>

div {
    padding: 2%;
}
img {
    max-width: 90vw;
}
.battle {
    width: 40vw;
}
.justifyText {
  text-align: justify;
}
/* Hover effect for contact and submit buttons */
button:hover {
    color: orange; /* This makes the text in the buttons white when hovered over */
    background-color: #000080; /* The background of the button changes to black when hovered over */
    transition-duration: 1s; /* This makes the transition last 1 second */
    -webkit-transition-duration: 1s; /* For Safari 4.0-8.0 */
    border-color: orange; /* The border turns silver when the button is hovered over */
}
.battleGame {
    background-color: #007bff;
    color: white;
}
ol, ul {
  padding: 0 10%;
}
li {
  padding: 1% 0;
  color: white;
}

</style>
