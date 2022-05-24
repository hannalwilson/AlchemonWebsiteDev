<template>
<div class="craftswap">
        <p class="darkBlueHeader spreadText">CRAFT // SWAP</p>
        <p>All available crafts are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM">Store</a>. The Craft links below:</p>
        <p>
            <br>&#9830; <a @click="craftAlchemon()" class="blueLinks">Craft an <b>Araknolyth</b> from 2 Monolyth and 2 Arakumo</a>
            <br>&#9830; <a @click="craftAlchemon()" class="blueLinks">Craft a <b>Torcydious</b> from 2 Torrment and 2 Incydious</a>
            <br>&#9830; <a @click="craftAlchemon()" class="blueLinks">Craft an <b>Araknadevil</b> from an Araknolyth and a Torcydious</a></p>
        <div>
            <img class="zoomIn_1" src="../assets/craft.jpg" alt="Crafting Icon">
            <img class="zoomIn_1" src="../assets/transfer.png" alt="Trading Icon">
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 15%;
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
    async craftAlchemon (appID, evolvedAlchemon, tradedAlchemonOne, tradedAlchemonTwo) {
      if (address === undefined) {
        account = await myAlgoConnect.connect()
      }
      address = account[0].address
      const quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveTwo`, {
        customerAddress: address,
        quickEvolveOneAppID: appID,
        evolvedAlchemonAssetID: evolvedAlchemon,
        tradeInAlchemonAssetIDOne: tradedAlchemonOne,
        tradeInAlchemonAssetIDTwo: tradedAlchemonTwo,
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
          window.alert('Crafting Successful!')
        }
      } catch {
        window.alert('Crafting Failed.')
      }
    }
  }
}
</script>
