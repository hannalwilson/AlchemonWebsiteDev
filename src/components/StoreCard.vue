<template>
    <div class="nftContainer boxShadow">
      <div class="imgContainer">
        <img :src= "require(`../assets/${name}.png`)" class="nftImage">
      </div>
    <div class="buttonContainer">
        <p> {{ name }} - {{ id }} </p>
        <p> Available: {{ amount}} </p>
        <button @click="purchaseItem('algo')" class="boxShadow nftButton">10 ALGO</button>
        <button @click="purchaseItem('alch')" class="boxShadow nftButton">500 ALCH</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nftContainer {
  width: 30vw;
    border-radius: 1%;
    display: inline-block;
    padding-bottom: 2%;
    background-color: lightgray;
}
.imgContainer {
  background-color: black;
  padding: 2%;
  border-radius: 1% 1% 0% 0%;
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
    padding: 0 5%;
    margin: 1% 4%;
}
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import axios from 'axios'
const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
let signedTxn
let address
const myAlgoConnect = new MyAlgoConnect()
export default {
  props: ['name', 'id', 'amount'],
  methods: {
    async buyWithAlgo () {
      const payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
        customerAddress: address,
        itemShopAppId: 748356873,
        forSale: 318280942,
        requestedAmount: 1,
        microalgoAmount: 10000000
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
    async buyWithAlch () {
      const payWithAlchResponse = await axios.post(`${apiURL}/payWithToken`, {
        customerAddress: address,
        itemShopAppId: 748356873,
        paymentToken: 310014962,
        forSale: 318280942,
        requestedAmount: 1,
        paymentTokenAmount: 500
      })
      const serializedTxns = payWithAlchResponse.data.txns
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
        window.alert('Transaction Failed!')
      }
    },
    async purchaseItem (type) {
      if (address === undefined) {
        const account = await myAlgoConnect.connect()
        address = account[0].address
        switch (type) {
          case 'algo':
            this.buyWithAlgo()
            break
          case 'alch' :
            this.buyWithAlch()
            break
        }
      } else {
        switch (type) {
          case 'algo':
            this.buyWithAlgo()
            break
          case 'alch' :
            this.buyWithAlch()
            break
        }
      }
    }
  }
}
</script>
