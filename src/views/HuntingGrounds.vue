<template>
    <div class="huntinggrounds">
        <p class="whiteHeader spreadText">HUNTING GROUNDS</p>
        <button @click="getEntries()">Get Entries</button>
        <button @click="getUserEntries()">Display Entries</button>
        <p>The Hunting Grounds is evolving! Players no longer need to stake one of their Alchemon for a whole week to
            earn entries in the Hunting Grounds raffle. Entries will now be earned through battling your Alchemon. Each
            battle won
            equals one entry to the raffle and there is no limit to the number of entries any wallet can have. The
            raffle will occur
            weekly and random winners will get the prizes determined by RNG! Winning does not remove your entries, so
            one wallet
            can win multiple prizes each week. Good luck, you will need it.
        </p>
        <i>
            <p>If you still have an Alchemon staked in the Hunting Grounds, don't worry, those still count for raffle
                entries. We will be
                sending those back to players over the next month. You can still send a 0.00 ALGO transaction with your
                Alchemon's name
                in the notes to receive it back sooner, if you'd like.
            </p>
        </i>
        <p class="whiteHeader spreadText">HOW TO BATTLE </p>
        <p>Players can build a team of three Alchemon and battle them in our desktop game, currently in Beta. Download
            the
            <router-link to="/beta">game here</router-link> and then head over to our <router-link to="/howtobattle">
                Battle</router-link> page for instructions on
            creating your account. Good luck!
        </p>
    </div>
</template>

<style lang="scss" scoped>

.huntinggrounds {
    padding: 5%;
    background-image: linear-gradient(to left, #ffa500, #ffb327, #ffffff);
}
p {
    color: #525151;
}
.whiteHeader {
    color: white;
}
</style>

<script>
import axios from 'axios'

let allUserEntries

export default {
  methods: {
    async getEntries () {
      const response = await axios.get('https://mj7nw0yoxf.execute-api.us-east-1.amazonaws.com/getEntries')
      allUserEntries = response.data
      console.log(allUserEntries)
    },
    getUserEntries () {
      for (const [address, amount] in allUserEntries) {
        console.log(address, amount)
      }
    }
  }
}
</script>
