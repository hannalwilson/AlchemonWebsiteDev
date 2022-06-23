<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="require(`@/assets/alchemon/${name}.png`)" class="nftImage">
    </div>

    <div class="buttonContainer">
      <p> Craft a {{ name }}</p>
      <p> {{ amount }} {{ tradedCardOne }} + {{ amount }} {{ tradedCardTwo }} + 250 Alch</p>
      <button @click="craftAlchemon(`${name}`)" class="boxShadow nftButton">250 ALCH</button>
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
  <popup-window v-if="popupTriggers.transactionSuccessful">
    <h2>Successful! Go check out your new Alchemon!</h2>
    <button class="boxShadow" @click="TogglePopup('transactionSuccessful')">Close</button>
  </popup-window>
  <popup-window v-if="popupTriggers.transactionFailed">
    <h2>Failed. Please try again.</h2>
        <p>Make sure you have the right Alchemon and enough ALCH to craft.</p>
    <button class="boxShadow" @click="TogglePopup('transactionFailed')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>

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
    text-align: center;
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

const apiURL = 'https://l84jesjbd4.execute-api.us-east-1.amazonaws.com'
// eslint-disable-next-line no-unused-vars
let signedTxn
let address
let account
let userWallet

const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)
const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false
})
const tradeInAddresses = {
  490139078: '7OVSLHCECWQZ7R4DVV64VWCPG4AL6JTDBLQZZX6FPG22JCIIVFOSTC6GBQ', // zip
  509842608: 'DWGPVTDCFM3DADFBHTE7S4DX7QL4HUJHGHC6DFGJXUPD5P5HPSII4MRGQ4', // zipadol
  67960024: 'ZRWO4MMILE7QFZ4BXUVDQCEBZYMBDOOS5MZ5BSSWGN33GORV5ARSKQAJ3M', // zipacute
  490141855: '5BSQOOEXICBRFBWBAQKFDUF4YFQN67OQFAH5NFHE2FUHTNHEHNGXJ6MPJU', // puff
  509844088: 'SAWCR4D342HOKTHK7EDNE6UONGHGRVYGYKTCCHVMJD4BPX4KLMAF5JNK6Y', // hailpuff
  67960082: 'EW3VX3TPF6EVQY6GLJPSE4UTXWGWDTK2Z6FLRXYPQA7QIR7FWHNNXRCI6I', // hailstorm
  493271743: '5HPPE2OE6L3UDVG2LOU3LKD56TS6AQAMRY37FGRN45B7UG5ZJAQCZ2TWAM', // dagz
  509848775: 'DORWEXHUPVXMLELBTGAGGG4PGPRB6GB77YZ5WHHTT3TFASE5A25LBMQIWY', // daggerz
  67960153: 'OKYWGCCQLWJDKWETYYTFI5QFIM52URWFU4KIN2RBGWMB2HO244XINNGUWM', // daggerpult
  490146814: 'I3QBOS6X6IWOY7S65CRRU47RAS2IK3TPLXAF3HYVY5JIEP7IXWARBWMJYQ', // lika
  509850827: 'HFIAQTXJC5QJKXNY5TQ7GRUPXDI46DWQQNH4WLONANCX6WLGGAQYOIUFDU', // chomp
  67960205: 'IDRWNHOCVFLXYATI5YOGA2HTEGVZ4EXAZDLW6ENBIHPSQ2K5R5JKVQHYPM', // likachomp
  67960230: 'GVX33TKM6W6K367PEMHP4UZOF4JAHQUJJ2TTO7S2UHNJ4HRCN6LVQKBMRU', // voltstorm
  67960252: 'GVX33TKM6W6K367PEMHP4UZOF4JAHQUJJ2TTO7S2UHNJ4HRCN6LVQKBMRU' // chomperz
}

const smartContractInfo = {
  Voltstorm: {
    appID: 96567359,
    evolvedAlchemon: 67960230,
    tradedAlchemonOne: 67960024,
    tradedAlchemonTwo: 67960082,
    amount: 2
  },
  Chomperz: {
    appID: 95614905,
    evolvedAlchemon: 67960252,
    tradedAlchemonOne: 67960153,
    tradedAlchemonTwo: 67960205,
    amount: 2
  },
  Cyclostorm: {
    appID: 96567413,
    evolvedAlchemon: 67960303,
    tradedAlchemonOne: 67960230,
    tradedAlchemonTwo: 67960252,
    amount: 1
  }
}
export default {
  components: { PopupWindow },
  props: ['name', 'tradedCardOne', 'tradedCardTwo', 'amount'],
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  methods: {
    setAlchemon (name) {
      console.log(smartContractInfo)
      const id = smartContractInfo[name].appID
      const evolved = smartContractInfo[name].evolvedAlchemon
      const tradedOne = smartContractInfo[name].tradedAlchemonOne
      const tradedTwo = smartContractInfo[name].tradedAlchemonTwo
      const amount = smartContractInfo[name].amount
      if (address !== undefined) {
        this.evolveAlchemon(id, evolved, tradedOne, tradedTwo, amount)
      } else {
        this.TogglePopup('chooseWallet')
      }
    },
    async craftAlchemon (name) {
      const id = smartContractInfo[name].appID
      const evolved = smartContractInfo[name].evolvedAlchemon
      const tradedOne = smartContractInfo[name].tradedAlchemonOne
      const tradedTwo = smartContractInfo[name].tradedAlchemonTwo
      const amount = smartContractInfo[name].amount
      if (address === undefined) {
        popupTriggers.value.chooseWallet = !popupTriggers.value.chooseWallet
      } else {
        if (userWallet === 'walletconnect') {
          this.TogglePopup('signTransaction')
        }
        let quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveAlchTwo`, {
          customerAddress: address,
          tradeInOneStoreAddress: tradeInAddresses[tradedOne],
          tradeInTwoStoreAddress: tradeInAddresses[tradedTwo],
          quickEvolveAlchTwoAppID: id,
          evolvedAlchemonAssetID: evolved,
          tradeInAlchemonAssetIDOne: tradedOne,
          tradeInAlchemonOneAmount: amount,
          tradeInAlchemonAssetIDTwo: tradedTwo,
          tradeInAlchemonTwoAmount: amount,
          alchecoinAssetID: 78127598,
          requiredAmountOfAlch: 250
        })
        const serializedTxns = quickEvolveOneResponse.data.txns
        let signedTxns
        switch (userWallet) {
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
            signedTxn = await walletConnector.sendCustomRequest(request)
            break
        }
        // axios.post(`${apiURL}/sendTxn`, {
        //   txn: signedTxn
        // }).then(sendTxnResponse => {
        //   if (sendTxnResponse.status === 200) {
        //     this.TogglePopup('transactionSuccessful')
        //   } else if (sendTxnResponse.status === 400) {
        //     this.TogglePopup('transactionFailed')
        //     console.log(sendTxnResponse)
        //   }
        // })
        try {
          const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
            txn: signedTxn
          })
          if (sendTxnResponse.status === 200) {
            this.TogglePopup('transactionSuccessful')
          }
        } catch (error) {
          this.TogglePopup('transactionFailed')
          console.log(error.status)
        }
        quickEvolveOneResponse = null
      }
    },
    async connectWallet (wallet) {
      userWallet = wallet
      switch (wallet) {
        case 'myalgo':
          account = await myAlgoConnect.connect()
          address = account[0].address
          break
        case 'walletconnect':
        // Check if connection is already established
          if (!walletConnector.connected) {
          // create new session
          // eslint-disable-next-line no-undef
            walletConnector.createSession()
          } else {
            address = walletConnector.accounts[0]
          }
          // Subscribe to connection events
          walletConnector.on('connect', (error, payload) => {
            if (error) {
              throw error
            }
            address = walletConnector.accounts[0]
          })

          walletConnector.on('session_update', (error, payload) => {
            if (error) {
              throw error
            }
            address = walletConnector.accounts[0]
          })

          walletConnector.on('disconnect', (error, payload) => {
            if (error) {
              throw error
            }
            address = undefined
          })
      }
      this.TogglePopup('chooseWallet')
    },
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
  }
}

</script>
