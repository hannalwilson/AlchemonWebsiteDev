<template>
  <div class="huntinggrounds">
    <p class="orangeHeader spreadText">HUNTING GROUNDS</p>
    <p>The Hunting Grounds is evolving! Players no longer need to stake one of their Alchemon for a whole week to
      earn entries in the Hunting Grounds raffle. Entries will now be earned through battling your Alchemon in our
     <router-link to="/beta">desktop game</router-link>, currently in Beta. Each
      battle won equals one entry to the raffle and there is no limit to the number of entries any wallet can have. The
      raffle will occur
      weekly and random winners will get the prizes determined by RNG! Winning does not remove your entries, so
      one wallet
      can win multiple prizes each week. Good luck, you will need it.
    </p>
    <p class="orangeHeader spreadText">
CALCULATE HUNTING GROUNDS ENTRIES</p>
    <input type="text" id="text" class="darkGrayText_1 boxShadow" placeholder="  Enter wallet address" ref="address" />
    <button class="boxShadow" id="btn" @click="calculateEntries">Submit</button>
    <p class="orangeHeader spreadText">WEEKLY ENTRIES</p>
    <table class="boxShadow">
      <tr class="tableTitle">
        <td>Wallet Address</td>
        <td>Amount of Entries</td>
      </tr>
      <tr v-for="(amount, address) in allEntries" :key="address">
        <td class="justifyText"> {{ address }} </td>
        <td> {{ amount }}</td>
      </tr>
    </table>
  </div>
  <popup-window v-if="popupTriggers.userEntries">
    <h2>You have {{ userEntries }}/{{ totalEntries }} entries in this week's Hunting Grounds!</h2>
    <button class="boxShadow" @click="TogglePopup('userEntries')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>

div {
  padding: 2%;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 1%;
  font-weight: bold;
}
.huntinggrounds {
    background-color: #007bff;
    color: white;
}
table {
  margin: auto;
  background: orange;
  border: 2px white solid;
  border-collapse: collapse;
  color: white;
  table-layout:fixed;
  width: 90vw;
}

td {
  text-align: center;
  padding: 1vw 5vw;
  word-wrap: break-word;
}

tr {
  border-bottom: 2px white solid;
}

.tableTitle {
  background: darkorange;
}
.justifyText {
  text-align: justify;
}
</style>

<script>
import axios from 'axios'
import { reactive, ref } from 'vue'

import PopupWindow from '../components/PopupWindow.vue'

const popupTriggers = ref({
  userEntries: false,
  noUserEntries: false
})

const allEntries = reactive({})

let userEntries

// eslint-disable-next-line prefer-const
let totalEntries = 0

export default {
  setup () {
    axios.get('https://mj7nw0yoxf.execute-api.us-east-1.amazonaws.com/getEntries').then(response => {
      for (const key in response.data) {
        allEntries[key] = response.data[key]
      }
    })

    return { allEntries }
  },
  components: { PopupWindow },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    calculateEntries () {
      this.totalEntries = 0
      for (const key in allEntries) {
        this.totalEntries += allEntries[key]
      }
      if (allEntries[this.$refs.address.value]) {
        this.userEntries = allEntries[this.$refs.address.value]
      } else {
        this.userEntries = 0
      }
      this.TogglePopup('userEntries')
    }
  },
  data () {
    return {
      PopupWindow,
      popupTriggers,
      userEntries,
      totalEntries
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>
