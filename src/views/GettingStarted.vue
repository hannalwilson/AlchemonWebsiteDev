<template>
    <div class="rules">
        <p class="orangeHeader spreadText">BASICS</p>
        <p class="whiteText">Alchemon are released in sets that comprise of 15 unique cards: 4 Common, 4 Uncommon,
            4 Rare, 2 Epic, and 1 Legendary. Lower level cards (Common and Uncommon) can
            evolve to higher levels through staking in the Training Grounds, leveling up in game, or by trading in
            lower rarity cards and a small evolving fee at our <router-link to="/craftandevolve">Craft & Evolve</router-link>
            store. Epic and Legendary Alchemon can be crafted here, as well, by trading in the correct lower rarity
            cards
            with a small evolving fee.</p>
        <div class="distributionButton"><button @click="TogglePopup('setDistribution')">View Distribution
                Charts</button></div>
        <p class="whiteText">Alchemon is a Deflationary NFT Collecting Card Game. All Staking
            Evolutions, Trading Evolutions and Crafting Swaps have the Alchemon come back home to be redistributed to
            other players that
            want to do the same. 100% of all Commons go back on sale in tour <router-link to="/store">Alcheshop</router-link>.
            This is to make it easier for new players to get started &
            to help existing players to get what they need. This will keep the Crafting and Staking Wallets
            restocked so others can play the game. Uncommons, Rares, Epics, and Legendaries will never be sold by the
            store.<br><br>
            You can purchase Common Alchemon in our official <router-link to="/store">Alcheshop</router-link> or higher
            rarity
            Alchemon from secondary markets sites like <a href="https://www.randgallery.com/collection/alchemon/"
                target="_blank">RandGallery</a> and
            <a href="https://algoxnft.com/collection/alchemon" target="_blank">ALGOxNFT</a>.
        </p>
        <p class="orangeHeader spreadText">NEW TO ALCHEMON AND ALGORAND?
        </p>
        <p class="whiteText">Here are instructions on how to set up your Algorand wallet and purchase Alchemon:</p>
        <router-link to="/getting-started-step-1" class="navlinks"><button class="boxShadow">ALCHEMON
                INSTRUCTIONS</button></router-link>
        <p class="whiteText">Here are some excellent free educational videos!:
        </p>
        <a href="https://www.youtube.com/c/WhiteboardCrypto/videos" target="_blank"><button
                class="boxShadow">FREE EDUCATIONAL VIDEOS</button></a>
    </div>
    <popup-window v-if="popupTriggers.setDistribution" class="setPopup">
        <button @click="TogglePopup('setDistribution')">Close</button>
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable1.png"
            alt="Set 1 Distribution">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable2.png"
            alt="Set 2 Distribution">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable3.png"
            alt="Set 3 Distribution">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable4.png"
            alt="Set 4 Distribution">
        <img src="https://alchemon-website-assets.s3.amazonaws.com/assets/distributionTable5.png"
            alt="Set 5 Distribution">
    </popup-window>
</template>

<style lang="scss" scoped>
.distributionbutton {
margin: 0 auto;
}
.distribution {
    width: 100px;
    position: absolute;
    right: 90%;
    bottom: 98%;
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
.setPopup {
  overflow-y: scroll;
}
img {
    width: 85vw;
}
</style>

<script>
import PopupWindow from '@/components/PopupWindow.vue'
import { ref } from 'vue'

const popupTriggers = ref({
  setDistribution: false
})

export default {
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  components: { PopupWindow },
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  }
}
</script>
