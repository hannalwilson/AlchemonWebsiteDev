<template>
    <div class="nftContainer boxShadow">
      <div class="imgContainer">
        <img :src= "require(`@/assets/cards/${name}.png`)" class="nftImage">
      </div>
    <div class="buttonContainer">
        <p> {{ name }}</p>
        <p> {{ id }}</p>
        <p> Available: {{ amount}} </p>
        <button @click="purchaseItem('pera')" class="boxShadow nftButton">5 ALGO</button>
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
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import axios from 'axios'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'
const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
let signedTxn
let address
let account
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)
const alchemonIds = {
  490139078: 753855088,
  490146814: 753855200,
  490141855: 753859901,
  493271743: 753859975
}
export default {
  props: ['name', 'id', 'amount'],
  methods: {
    async buyWithAlgo (wallet) {
      const payWithAlgoResponse = await axios.post(`${apiURL}/payWithAlgo`, {
        customerAddress: address,
        itemShopAppId: alchemonIds[this.id],
        forSale: parseInt(this.id),
        requestedAmount: 1,
        microalgoAmount: 5000000
      })
      const serializedTxns = payWithAlgoResponse.data.txns
      console.log(serializedTxns)
      let signedTxns
      switch (wallet) {
        case 'myalgo':
          signedTxns = await myAlgoConnect.signTransaction(serializedTxns)
          if (Array.isArray(signedTxns)) {
            signedTxn = signedTxns.map((txn) => (Buffer.from(txn.blob).toString('base64')))
          } else {
            signedTxn = Buffer.from(signedTxns.blob).toString('base64')
          }
          break
        case 'pera':
          // eslint-disable-next-line no-case-declarations
          const txnsToSign = serializedTxns.map(txn => {
            const encodedTxn = txn
            return {
              txn: encodedTxn
            }
          })
          console.log(txnsToSign)
          // eslint-disable-next-line no-case-declarations
          const requestParams = [txnsToSign]
          // eslint-disable-next-line no-case-declarations
          const request = formatJsonRpcRequest('algo_signTxn', requestParams)
          signedTxn = await walletConnector.sendCustomRequest(request)
          console.log(signedTxn)
      }
      try {
        const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
          txn: signedTxns
        })
        if (sendTxnResponse.status === 200) {
          window.alert('Transaction Successful!')
        }
      } catch {
        window.alert('Transaction Failed.')
      }
    },
    async purchaseItem (wallet) {
      if (address === undefined) {
        switch (wallet) {
          case 'myalgo':
            account = await myAlgoConnect.connect()
            address = account[0].address
            break
          case 'pera':
          // Check if connection is already established
            if (!walletConnector.connected) {
            // create new session
              walletConnector.createSession()
            }

            // Subscribe to connection events
            walletConnector.on('connect', (error, payload) => {
              if (error) {
                throw error
              }
            })

            walletConnector.on('session_update', (error, payload) => {
              if (error) {
                throw error
              }
            })

            walletConnector.on('disconnect', (error, payload) => {
              if (error) {
                throw error
              }
            })

            address = walletConnector.accounts[0]
            console.log(address)
            break
        }
        this.buyWithAlgo(wallet)
      }
    }
  }
}
</script>
