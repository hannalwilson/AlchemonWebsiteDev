<template>
  <div class="faq">
    <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/FAQ.png" alt="FAQ" id="faqIMG">
    <p class="yellowHeader spreadText">FREQUENTLY ASKED QUESTIONS</p>
    <accordion>
      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Chain of blocks? Blocked chains? Oh… Blockchain?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>To learn about blockchains and to get started with Alchemon, complete this series of steps:<br><a
            href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a><br><iframe
            src="https://www.youtube.com/embed/kHybf1aC-jE" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>What is Algorand anyways?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>To learn about Algorand and cryptocurrency, and to get started with Alchemon, complete this series of steps:<br><a
            href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a><iframe
            src="https://www.youtube.com/embed/YpSLvq4CIOA" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>How do I buy me some Algorand?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>You can get it from most exchanges, including <a href="https://www.coinbase.com/" target="_blank">Coinbase</a>, <a
            href="https://www.binance.com/en" target="_blank">Binance</a>, and many more!<br><br>To learn about NFTs and to get
          started with Alchemon, complete this series of steps:<br><a href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>What’s a dumb contract? I mean, a smart contract?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span><iframe src="https://www.youtube.com/embed/pyaIppMhuic" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>NFT? I don’t get it.</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>To learn about NFTs and to get started with Alchemon, complete this series of steps:<br><a
            href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a><iframe
            src="https://www.youtube.com/embed/4dkl5O9LOKg" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>What is Alch-ee-mon? Or is it Alch-a-mon?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Alchemon is pronounced “Alk-uh-mon.” And it’s amazing…<br><br> Alchemon (<u>Alch</u>emy + <u>mon</u>ster) is the first
          monster-collecting NFT staking, crafting and trading card game only on the Algorand Blockchain! Get your Alchemon,
          evolve them and then craft Epic and Legendary Alchemon that will never be for sale (in the official store)!<br><br>It
          consists of NFT Cards (actual pieces you will use in the game) and other NFTs. You can play how you want, just collect
          some, earn AlcheCoin, evolve them, craft a legendary, collect them all, etc.<br><br>Learn more about Alchemon and get
          started at this link!:<br><a href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>What is an NFT Card?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>In Alchemon, there are lots of assets and NFTs to collect, but there are official game cards to be used once the game is
          released. These are representations of the Alchemon as creatures to be used in the game. They are the collectables as
          well. So the official term we are calling the game cards is NFT Card. Any other Alchemon-related asset that is not an
          NFT Card is not able to be used in staking or the game.<br><br>To learn more about Alchemon NFT cards, and to get
          started, visit this link!:<br><a href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>How/where/why can I buy Alchemon?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>The official Alchemon store is here: <a href="https://www.alchemon.net/store" target="_blank">Alchemon NFT
            Store</a><br><br>You can also see all sales info on the project here: <a
            href="https://www.nftexplorer.app/collection/alchemon" target="_blank">NFT Explorer (Sales)</a> <br><br>And
          aftermarket sellers here: <a href="https://www.nftexplorer.app/sellers?collection=alchemon" target="_blank">NFT Explorer
            (Aftermarket Sellers)</a> <br><br>You can find out more at this series of steps:<br><a
            href="https://www.alchemon.net/getting-started-step-1"
            target="_blank">https://www.alchemon.net/getting-started-step-1</a></span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>AlcheCoin? Will it make me rich?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>First off, AlcheChoin is technically a token. So, to start, check out this video: <br><iframe
            src="https://www.youtube.com/embed/422HORNUfkU" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe><br><br>Now that we’ve sorted that out, it is a token for the game. You get it by staking
          your Alchemon or holding them in your wallet. Then you can use the AlcheCoin to play the game, get cool art, abilities,
          attacks, etc. The possibilities are endless for what AlcheCoin can do!</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Staking? Huh?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Let’s start with this video:<br><iframe width="560" height="315" src="https://www.youtube.com/embed/vZ2UZdB07fo"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe><br><br>In Alchemon, staking works in a few different ways.<br>
          <ol>
            <li>Stake to earn AlcheCoin </li>
            <li>Stake to evolve</li>
            <li>Stake for prizes </li>
          </ol><br>To learn how to stake, please visit our <a href="https://www.alchemon.net/howtoplay" target="_blank">How To
            Play</a> page.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>What is a “set” in Alchemon?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>A set is a group of 15 Alchemon characters (released together) that has 4 Alchemon evolution lines that evolve from
          Common to Uncommon to Rare. Rares can then be crafted into 2 different Epic Alchemon that craft into a Legendary. All 15
          characters are released together and more Alchemon come once the rewards are gone for the existing Set. So (usually)
          only 15 Alchemon are in play for rewards at any given time. <br><br>Set 1 = Alchemon 1-15<br>Set 2 = Alchemon
          16-30<br>Set 3 = Alchemon 31-45<br>Set 4 = Alchemon 46-60<br>Etc.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Please… How do I evolve my cards?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>There are two ways to evolve currently:<br>
          <ol>
            <li>One thing to note is that Epics and Legendaries can only be crafted in the store. The free way to evolve is to
              stake any Common or Uncommon for a week in the Training Grounds.</li>
            <li>The second is to craft, which is the fast way, but will take a little alchemy! There are recipes (including a
              small fee) where you will have to trade in lower rarities for higher powered Alchemon.</li>
          </ol><br>To learn more, please visit our <a href="https://www.alchemon.net/howtoplay" target="_blank">How To Play</a>
          page.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Wah! How come I can’t evolve my cards from earlier sets?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Because those rewards have already been distributed to the players in the past. There is a finite amount of evolutions
          available for each set. You will have to get older Alchemon from the aftermarket <a
            href="https://www.nftexplorer.app/collection/alchemon" target="_blank">here</a>.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Crafting and Alchemon. What’s it all about?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>To make an Epic or Legendary Alchemon you must use some alchemy! The only way to craft a Legendary is to have both Epics
          and combine them (trade them in). The NFT Cards you use get sent to the store or staking pools for other players to take
          advantage of. For Epics you need the correct Rares to craft each Epic. <br><br>You can also “quick-evolve” lower rarity
          alchemon, but you will need 2 of the same Alchemon to get around the 1 week staking period. All crafting comes with
          fees, so be sure to have a few spare Algo in your wallet. All crafting links are on the How To Play page.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>What is wallet staking?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Welcome to wallet staking! Wallet staking is something we created to reward players for holding Alchemon in their own
          wallet! You get AlcheCoin for each NFT Card in your wallet as long as you have approved the AlcheCoin and Stake Flag
          assets. The Stake Flag is an empty asset in your wallet that lets our bot know you are holding Alchemon Cards and want
          to earn AlcheCoin for them. Then, once a week, the bot goes to all of these wallets and gives the proper amount of
          AlcheCoin! AlcheCoin Asset: 310014962 Stake Flag Asset: 320570576.<br><br>You can learn more on our <a
            href="https://www.alchemon.net/instructions" target="_blank">Instructions</a> page.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Training grounds? Is that like a gym or something?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Training Grounds is where you can stake your Alchemon for a week to evolve it for free. Just send your Alchemon to
          5Q2PRQDMH7JNT76EYFXBB4UBFVBL6WI37GTJC7HELNPZ4EL5BE6WKQXP4Y and make sure you have added the asset of the evolved
          version. You will get a better Alchemon after a week and your old version will go back to the store. It is first come,
          first served for staked Alchemon to get evolved. MAKE SURE YOU ADD THE ASSET OF THE EVOLVED VERSION YOU ARE TO RECEIVE,
          if you do not we cannot send it to you. But once added it will be resent. We have made links to easily add assets of the
          game on the AlcheDex page. You can see what evolutions are available on <a href="https://discord.gg/TmMJRjHH"
            target="_blank">Discord</a> or <a href="https://www.alchemon.net/howtoplay" target="_blank">How To Play</a> page in
          the Training Grounds section. You can only train from Common to Uncommon and Uncommon to Rare. Epics and Legendaries can
          only be crafted.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Hunting grounds? But I’m a vegan!</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>The Hunting Grounds is evolving! Players no longer need to stake one of their Alchemon for a whole week to earn entries
          in the Hunting Grounds raffle. Entries will now be earned through battling your Alchemon in our <a
            href="https://www.alchemon.net/beta" target="_blank">desktop game</a>, currently in Beta. Each battle won equals one
          entry to the raffle and there is no limit to the number of entries any wallet can have.The raffle will occur weekly and
          random winners will get the prizes determined by RNG! Winning does not remove your entries, so one wallet can win
          multiple prizes each week. Good luck, you will need it.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>If inflation is bad, is deflation good? How is Alchemon deflationary?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Alchemon is a <i>deflationary</i> NFT Collecting Card Game. All Staking Evolutions, Trading Evolutions and Crafting
          Swaps have the Alchemon come back home to be redistributed to other players that want to do the same. 100% of all
          Commons go back on sale in the Alchemon Rand Store. This is to make it easier for new players to get started and to help
          existing players to get what they need. This will keep the Crafting and Staking Wallets restocked so others can play the
          game.
          </span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Why eggs? Do all Alchemon come from eggs?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Eggs are just early access for new Alchemon. They are guaranteed worth one of the newest Commons. Sometimes there are
          competitions where you can earn something better.</span>
        </template>
      </accordion-item>

      <accordion-item>
        <!-- This slot will handle the title/header of the accordion and is the part you click on -->
        <template v-slot:accordion-trigger>
          <h3>Why do cards have different colors? Do the colors have any special meaning?</h3>
        </template>
        <!-- This slot will handle all the content that is passed to the accordion -->
        <template v-slot:accordion-content>
          <span>Nope, just flavor for the cards. We wanted simple, but not just a white background.
          </span>
        </template>
      </accordion-item>
    </accordion>
  </div>
</template>

<script>
import Accordion from '../components/QuestionAccordion.vue'
import AccordionItem from '../components/AccordionItem.vue'

export default {
  mounted () {
    window.scrollTo(0, 0)
  },
  components: {
    Accordion,
    AccordionItem
  }
}
</script>

<style lang="scss" scoped>
img{
    width: 100vw;
    margin-top: -10px;
}
.faq {
    background-image: linear-gradient(to right, #007bff, #2A78F8, #4287F9, #89B4FB, #E7F0FE);
    padding-bottom: 5%;
}
iframe {
  width: 77vw;
  height: calc(77vw * .5625);
  margin: 2% auto;
}
</style>
