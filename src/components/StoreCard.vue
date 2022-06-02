<template>
    <div class="nftContainer boxShadow">
      <div class="imgContainer">
        <img :src= "require(`@/assets/cards/${name}.png`)" class="nftImage">
      </div>
    <div class="buttonContainer">
        <p> {{ name }}</p>
        <p> {{ id }}</p>
        <p> Available: {{ amount}} </p>
        <button @click="purchaseItem()" class="boxShadow nftButton">5 ALGO</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nftContainer {
    border-radius: 1%;
    display: inline-block;
    background-color: lightgray;
}
.imgContainer {
  border-radius: 1% 1% 0% 0%;
}
.nftImage {
    width: 20vw;
    margin: 0%;
}
.buttonContainer {
    margin: 3%;
    margin-bottom: 5%;
}
.nftButton {
    font-family: poppins;
    text-align: center;
    background-color: orange;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    padding: 0 5%;
    margin: 1% 4%;
}
// @media (max-width: 1100px) {
//   .nftContainer {
//     height: 485px;
//   }
// }
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import axios from 'axios'
const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
let signedTxn
let address
const myAlgoConnect = new MyAlgoConnect()
const alchemonIds = {
  490139078: 753855088,
  490146814: 753855200,
  490141855: 753859901,
  493271743: 753859975
}
export default {
  props: ['name', 'id', 'amount'],
  methods: {
    async buyWithAlgo () {
      const payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
        customerAddress: address,
        itemShopAppId: alchemonIds[this.id],
        forSale: parseInt(this.id),
        requestedAmount: 1,
        microalgoAmount: 5000000
      })
      const serializedTxns = payWithAlgoResponse.data.txns
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
          window.alert('Transaction Successful!')
        }
      } catch {
        window.alert('Transaction Failed.')
      }
    },
    async purchaseItem () {
      if (address === undefined) {
        window.open('/wallet', 'popUpWindow')
        const account = await myAlgoConnect.connect()
        address = account[0].address
        this.buyWithAlgo()
      } else {
        this.buyWithAlgo()
      }
    }
  }
}
</script>
