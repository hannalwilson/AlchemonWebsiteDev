<template>
    <div class="nftContainer boxShadow">
        <img :src= "require(`../assets/store/${name}.png`)" class="nftImage">
        <p> {{ name }} - {{ id }} </p>
        <p> Available: {{ amount}} </p>
    <div class="buttonContainer">
        <button @click="connectAccount" class="boxShadow nftButton">ALGO</button>
        <button class="boxShadow nftButton">ALCH</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nftContainer {
    width: 20vw;
    padding: 0;
    border-radius: 1%;
    display: inline-block;
    padding-bottom: 2%;
    background-color: lightgray;
}
.nftImage {
    width: 20vw;
    margin: 0%;
}
.buttonContainer {
    margin: 3%;
}
.nftButton {
    font-family: poppins;
    text-align: center;
    background-color: orange;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    padding: 0 10%;
    margin: 1% 4%;
}
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import axios from 'axios'
const apiURL = 'https://l84jesjbd4.execute-api.us-east-1.amazonaws.com'
let signedTxn
let address
const myAlgoConnect = new MyAlgoConnect()
export default {
  props: ['name', 'id', 'amount'],
  methods: {
    async buyWithAlgo () {
      const payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
        customerAddress: address,
        itemShopAppId: 78593783,
        forSale: 70537103,
        requestedAmount: 1,
        microalgoAmount: 10_000_000
      })
      console.log(payWithAlgoResponse)
      const serializedTxns = payWithAlgoResponse.data.txns
      const signedTxns = await myAlgoConnect.signTransaction(serializedTxns)
      if (Array.isArray(signedTxns)) {
        signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
      } else {
        signedTxn = Buffer.from(signedTxns.blob).toString('base64')
      }
      const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
        txn: signedTxn
      })
      console.log(sendTxnResponse)
    },
    async connectAccount () {
      if (address === undefined) {
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
