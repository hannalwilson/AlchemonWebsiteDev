<template>
    <div class="evolveswap">
        <p class="yellowHeader spreadText">EVOLVE // SWAP</p>
        <p class="whiteText">All available evolutions are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM">Store</a>. The Quick-Evolve links below:</p>
        <p><br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve a <b>Golyth</b> from 2 Lyth</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve a <b>Monolyth</b> from 2 Golyth</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve an <b>Araku</b> from 2 Kumo</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve an <b>Arakumo</b> from 2 Araku</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve a <b>Torrden</b> from 2 Torr</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve a <b>Torrment</b> from 2 Torrden</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve a <b>Cydevil</b> from 2 Cyd</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon()">Evolve an <b>Incydious</b> from 2 Cydevil</a></p>
        <img class="zoomIn_1" src="../assets/evolutions.png" alt="Evolutions">
    </div>
</template>

<style lang="scss" scoped>
.evolveswap {
    background-image: linear-gradient(to right, #ffa500, #ffb327);
}
img {
    width: 60%;
}
.blueLinks {
    cursor: pointer;
    text-decoration: underline;
    color: blue;
}
.blueLinks:hover {
    color: darkblue;
}
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import axios from 'axios'
const myAlgoConnect = new MyAlgoConnect()
const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
let address
let signedTxn
let account
export default {
  methods: {
    async evolveAlchemon (appID, evolvedAlchemon, tradedAlchemon) {
      if (address === undefined) {
        account = await myAlgoConnect.connect()
      }
      address = account[0].address
      const quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveOne`, {
        customerAddress: address,
        quickEvolveOneAppID: appID,
        evolvedAlchemonAssetID: evolvedAlchemon,
        tradeInAlchemonAssetID: tradedAlchemon,
        tradeInAlchemonAssetAmountSent: 2,
        requiredAmountOfMicroAlgos: 1_000_000
      })
      const serializedTxns = quickEvolveOneResponse.data.txns
      const signedTxns = await myAlgoConnect.signTransaction(serializedTxns)
      if (Array.isArray(signedTxns)) {
        signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
      } else {
        signedTxn = Buffer.from(signedTxns.blob).toString('base64')
      }
      try {
        const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
          txn: signedTxn
        })
        if (sendTxnResponse.status === 200) {
          window.alert('Evolution Successful!')
        }
      } catch {
        window.alert('Evolution Failed.')
      }
    }
  }
}
</script>
