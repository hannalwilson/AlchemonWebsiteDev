<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="`https://alchemon-website-assets.s3.amazonaws.com/assets/alchemon/${name}.png`" class="nftImage">
    </div>
    <div class="buttonContainer">
      <p> Evolve a {{ name }}</p>
      <p>You need: 2 {{ tradedCard }} + 100 Alch</p>
      <p>Available: {{ available }}</p>
      <button v-if="available > 0" @click="setAlchemon(`${name}`)" class="boxShadow nftButton">100 ALCH</button>
    </div>
  </div>
  <popup-window v-if="popupTriggers.chooseWallet">
    <h2>Connect Your Wallet</h2>
    <button class="boxShadow" @click="connectWallet('myalgo')">
      MyAlgo
    </button><br>
    <button class="boxShadow" @click="connectWallet('walletconnect')">
      WalletConnect
    </button><br>
    <button class="boxShadow" @click="TogglePopup('chooseWallet')">Cancel</button>
  </popup-window>
  <popup-window v-if="popupTriggers.signTransaction">
    <h2>Please open your wallet app to sign the transaction!</h2>
    <button class="boxShadow" @click="TogglePopup('signTransaction')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.processingTransaction">
    <h2>Transaction processing...</h2>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionSuccessful">
    <h2>Successful! Go check out your new Alchemon!</h2>
    <button class="boxShadow" @click="TogglePopup('transactionSuccessful')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionFailed">
    <h2>Failed. Please try again.</h2>
    <p style="text-align: left"> {{ getErrorMessage }}</p>
    <button class="boxShadow" @click="TogglePopup('transactionFailed')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.errorOccured">
    <h2>Unknown Server Error. Please try again.</h2>
    <p style="text-align: left">If this error continues, please contact support.</p>
    <button class="boxShadow" @click="TogglePopup('errorOccured')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>
p {
  text-align: center;
}
.nftContainer {
    border-radius: 1%;
    display: inline-block;
    background-color: lightgray;
    margin: 2%;
    vertical-align: top;
}

.nftImage {
    width: 20vw;
    margin: 0%;
}
button {
  padding: 1% 5%;
}
.buttonContainer {
    margin-top: 3%;
    margin-bottom: 5%;
    width: 20vw;
}
@media (max-width: 1100px) {
  .buttonContainer {
    width: 25vw
  }
  .nftImage {
      width: 25vw;
    }
}

@media (max-width: 800px) {
  .buttonContainer {
    height: 25vw;
    width: 35vw;
  }
    .nftImage {
      width: 35vw;
    }
    button {
      padding: 2% 20%;
    }
}

@media (max-width: 650px) {
  .buttonContainer {
    height: 30vw;
    width: 45vw;
  }
    .nftImage {
      width: 45vw;
    }
}

@media (max-width: 500px) {
  .buttonContainer {
    height: 35vw;
    width: 70vw;
  }
    .nftImage {
      width: 70vw;
    }
        button {
          padding: 2% 30%;
        }
}

@media (max-width: 350px) {
  .buttonContainer {
      height: 40vw;
      width: 90vw;
    }
    .nftImage {
      width: 90vw;
    }
}

@media (max-width: 350px) {
  .buttonContainer {
      height: 50vw;
    }

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

import { ref } from 'vue'
import PopupWindow from './PopupWindow.vue'

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com/'
// eslint-disable-next-line no-unused-vars
let signedTxn
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)
const tradeInAddresses = {
  490139078: 'KP7DMA2YSVSOCKAA2QBUWNFFEWB47EJZKQ6E74TXGG5GJLXSTSO7VLI3YE', // zip
  490141855: '5BSQOOEXICBRFBWBAQKFDUF4YFQN67OQFAH5NFHE2FUHTNHEHNGXJ6MPJU', // puff
  493271743: '5HPPE2OE6L3UDVG2LOU3LKD56TS6AQAMRY37FGRN45B7UG5ZJAQCZ2TWAM', // dagz
  490146814: 'I3QBOS6X6IWOY7S65CRRU47RAS2IK3TPLXAF3HYVY5JIEP7IXWARBWMJYQ', // lika
  744527019: 'O3BY3EN4SA75TBYKE6OTOCWIYK4CT7EY47HMYJGKET2PICWLNVCO4P2P6E', // lyth
  744551347: '4CBGCW7NNKN6YQRODCTQ5TDWYK5HGP7N6QLAYIV2ZG6JER3A7GUENNKYN4', // kumo
  744531764: 'BLBMPJ2T2R34STSEIMR2M3ONWRUQKDVERCJA6FYSK563KBNCWWDKKXXPLM', // torr
  744534630: 'WP55X5NNDLVSD2KRL4MHUYR2QGFART6V4OUQN54ETURA5AGM6Y5J4AI6I4' // cyd
}

const smartContractInfo = {
  Zipadol: {
    appID: 101166471,
    evolved: 67960008,
    traded: 67959981
  },
  Hailpuff: {
    appID: 778975387,
    evolved: 509844088,
    traded: 490141855
  },
  Daggerz: {
    appID: 778975506,
    evolved: 509848775,
    traded: 493271743
  },
  Chomp: {
    appID: 778975613,
    evolved: 509850827,
    traded: 490146814
  },
  Golyth: {
    appID: 780885401,
    evolved: 744527932,
    traded: 744527019
  },
  Araku: {
    appID: 780890332,
    evolved: 744530060,
    traded: 744551347
  },
  Torrden: {
    appID: 780890445,
    evolved: 744532520,
    traded: 744531764
  },
  Cydevil: {
    appID: 780890555,
    evolved: 744535776,
    traded: 744534630
  }
}
const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false,
  errorOccurred: false
})

let errorMessage
export default {
  components: { PopupWindow },
  props: ['name', 'tradedCard', 'available'],
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  computed: {
    getErrorMessage () {
      return errorMessage
    }
  },
  methods: {
    setAlchemon (name) {
      const id = smartContractInfo[name].appID
      const evolved = smartContractInfo[name].evolved
      const traded = smartContractInfo[name].traded
      const address = localStorage.userAddress
      const wallet = localStorage.userWallet
      this.evolveAlchemon(id, evolved, traded, address, wallet)
    },
    async evolveAlchemon (appID, evolvedAlchemon, tradedAlchemon, address, wallet) {
      console.log(address)
      if (!wallet) {
        window.alert('Error: No wallet connected.')
      }
      if (wallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
      const quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveAlchOne`, {
        customerAddress: address,
        tradeInStoreAddress: tradeInAddresses[tradedAlchemon],
        quickEvolveAlchOneAppID: appID,
        evolvedAlchemonAssetID: evolvedAlchemon,
        tradeInAlchemonAssetID: tradedAlchemon,
        tradeInAlchemonAssetAmountSent: 2,
        alchecoinAssetID: 310014962,
        requiredAmountOfAlchecoin: 100
      })
      const serializedTxns = quickEvolveOneResponse.data.txns
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
        case 'walletconnect':
          // eslint-disable-next-line no-case-declarations
          const txnsToSign = serializedTxns.map(txn => {
            const encodedTxn = txn
            return {
              txn: encodedTxn
            }
          })
          // eslint-disable-next-line no-case-declarations
          const requestParams = [txnsToSign]
          // eslint-disable-next-line no-case-declarations
          const request = formatJsonRpcRequest('algo_signTxn', requestParams)
          try {
            signedTxn = await walletConnector.sendCustomRequest(request)
          } catch (error) {
            errorMessage = error.message
            this.TogglePopup('transactionFailed')
            this.TogglePopup('signTransaction')
          }
          this.TogglePopup('signTransaction')
          break
      }

      if (signedTxn) {
        this.TogglePopup('processingTransaction')
        try {
          const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
            txn: signedTxn
          })
          if (sendTxnResponse.status === 200) {
            if (sendTxnResponse.data.txnId) {
              this.TogglePopup('transactionSuccessful')
            } else if (sendTxnResponse.data.message) {
              errorMessage = sendTxnResponse.data.message
              this.TogglePopup('transactionFailed')
            }
          }
        } catch (error) {
          this.TogglePopup('errorOccured')
        }
        this.TogglePopup('processingTransaction')
      }
    },
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
  }
}
</script>
