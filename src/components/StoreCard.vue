<template>
    <div class="nftContainer boxShadow">
      <div class="imgContainer">
      <img :src= "require(`../assets/${name}.png`)" class="nftImage">
      </div>
        <p> {{ name }} - {{ id }} </p>
        <p> Available: {{ amount}} </p>
    <div class="buttonContainer">
        <button @click="buyWithAlgo" class="boxShadow nftButton">10 ALGO</button>
        <button @click="buyWithAlgo" class="boxShadow nftButton">500 ALCH</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nftContainer {
    width: 25vw;
    border-radius: 1%;
    display: inline-block;
    padding-bottom: 2%;
    background-color: lightgray;
}
.nftImage {
    width: 20vw;
    margin: 0%;
    padding: 2% 0%;
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
    padding: 0 5%;
    margin: 1% 4%;
}
.imgContainer {
  background-color: black;
    border-radius: 1% 1% 0% 0%;
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
      if (address === undefined) {
        this.connectAccount()
      }
      const payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
        customerAddress: address,
        itemShopAppId: 748356873,
        forSale: 318280942,
        requestedAmount: 1,
        microalgoAmount: 10000000
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
    async buyWithToken () {
      if (address === undefined) {
        this.connectAccount()
      }
      const payWithTokenResponse = await axios.post(`${apiURL}/payWithToken`, {
        customerAddress: address,
        itemShopAppId: 748356873,
        paymentToken: 310014962,
        forSale: 318280942,
        requestedAmount: 1,
        paymentTokenAmount: 500
      })
      console.log(payWithTokenResponse)
      const serializedTxns = payWithTokenResponse.data.txns
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
      const account = await myAlgoConnect.connect()
      address = account[0].address
    }
  }
}
</script>
