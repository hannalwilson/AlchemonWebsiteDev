<template>
<div class="craftswap">
        <p class="darkBlueHeader spreadText">CRAFT // SWAP</p>
        <p>All available crafts are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM">Store</a>. The Craft links below:</p>
        <p>
            <br>&#9830; <a @click="craftAlchemon(1, 67960230, 67960024, 67960082, 2)" class="blueLinks">Craft an <b>Voltstorm</b> from 2 Hailstorm and 2 Zipacute</a>
            <br>&#9830; <a @click="craftAlchemon(1, 67960252, 67960205, 67960153, 2)" class="blueLinks">Craft a <b>Chomperz</b> from 2 Likachomp and 2 Daggerpult</a>
            <br>&#9830; <a @click="craftAlchemon(1, 97860303, 67960230, 67960252, 1)" class="blueLinks">Craft an <b>Cyclostorm</b> from an Chomperz and a Voltstorm</a></p>
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
    async craftAlchemon (appID, evolvedAlchemon, tradedAlchemonOne, tradedAlchemonTwo, amount) {
      if (address === undefined) {
        account = await myAlgoConnect.connect()
      }
      address = account[0].address
      const quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveAlchTwo`, {
        customerAddress: address,
        tradeInOneStoreAddress: 'KP7DMA2YSVSOCKAA2QBUWNFFEWB47EJZKQ6E74TXGG5GJLXSTSO7VLI3YE',
        tradeinTwoStoreAddress: 'QTOCX5EVIH73V5QSO5TXEHZW2WW7EUYIVLBLYDBLFO4MSXXBBDY6RVWZ2E',
        quickEvolveAlchTwoAppID: appID,
        evolvedAlchemonAssetID: evolvedAlchemon,
        tradeInAlchemonAssetIDOne: tradedAlchemonOne,
        tradeInAlchemonOneAmount: amount,
        tradeInAlchemonAssetIDTwo: tradedAlchemonTwo,
        tradeInAlchemonTwoAmount: amount,
        requiredAmountOfAlch: 100
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
