<template>
  <div class="nftContainer boxShadow">
    <div class="imgContainer">
      <img :src="require(`@/assets/alchemon/${name}.png`)" class="nftImage">
    </div>
    <div class="buttonContainer">
      <p> Evolve a {{ name }}</p>
      <p> 2 {{ tradedCard }} + 100 Alch</p>
      <button @click="setAlchemon(`${name}`)" class="boxShadow nftButton">100 ALCH</button>
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
    <p>Make sure you have the right Alchemon and enough ALCH to evolve.</p>
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

const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
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
const tradeInAddresses = {
  490139078: '7OVSLHCECWQZ7R4DVV64VWCPG4AL6JTDBLQZZX6FPG22JCIIVFOSTC6GBQ', // zip
  509842608: 'DWGPVTDCFM3DADFBHTE7S4DX7QL4HUJHGHC6DFGJXUPD5P5HPSII4MRGQ4', // zipadol
  527475282: 'TE3Y35D3L6P7Q5STTXQBHGNCOI3PR5FGQIARLTN7AHDCY47KJURHP3CXSY', // zipacute
  490141855: '5BSQOOEXICBRFBWBAQKFDUF4YFQN67OQFAH5NFHE2FUHTNHEHNGXJ6MPJU', // puff
  509844088: 'SAWCR4D342HOKTHK7EDNE6UONGHGRVYGYKTCCHVMJD4BPX4KLMAF5JNK6Y', // hailpuff
  527477069: 'P7OM32HZHSV3VIF7NVNQH5Z5QOTU4PK7NO222XKSATTEB2IWJOZ5P2G44E', // hailstorm
  493271743: '5HPPE2OE6L3UDVG2LOU3LKD56TS6AQAMRY37FGRN45B7UG5ZJAQCZ2TWAM', // dagz
  509848775: 'DORWEXHUPVXMLELBTGAGGG4PGPRB6GB77YZ5WHHTT3TFASE5A25LBMQIWY', // daggerz
  527479654: '2NEKVJVM5PEK6TBH45DM37SVEO5IT24M3JKM6TI237UWOKFW3JJUYMMXEE', // daggerpult
  490146814: 'I3QBOS6X6IWOY7S65CRRU47RAS2IK3TPLXAF3HYVY5JIEP7IXWARBWMJYQ', // lika
  509850827: 'HFIAQTXJC5QJKXNY5TQ7GRUPXDI46DWQQNH4WLONANCX6WLGGAQYOIUFDU', // chomp
  527481591: 'NZDAY727QMQKHZGY3HZMN2Z5P647YFEFS3P6ZVIWJ3AGVEVQFPGTLSDNGA', // likachomp
  527483715: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA', // voltstorm
  527485015: 'OJGTHEJ2O5NXN7FVXDZZEEJTUEQHHCIYIE5MWY6BEFVVLZ2KANJODBOKGA' // chomperz
}

const smartContractInfo = {
  Zipadol: {
    appID: 778975194,
    evolved: 509842608,
    traded: 490139078
  },
  Zipacute: {
    appID: 778987467,
    evolved: 527475282,
    traded: 509850827

  },
  Hailpuff: {
    appID: 778975387,
    evolved: 509844088,
    traded: 490141855
  },
  Hailstorm: {
    appID: 778988202,
    evolved: 527477069,
    traded: 509848775

  },
  Daggerz: {
    appID: 778975506,
    evolved: 509848775,
    traded: 493271743
  },
  Daggerpult: {
    appID: 778989153,
    evolved: 527479654,
    traded: 509844088

  },
  Chomp: {
    appID: 778975613,
    evolved: 509850827,
    traded: 490146814
  },
  Likachomp: {
    appID: 778989735,
    evolved: 527481591,
    traded: 509842608

  }
}
const popupTriggers = ref({
  chooseWallet: false,
  makePurchase: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false
})
export default {
  components: { PopupWindow },
  props: ['name', 'tradedCard'],
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  methods: {
    setAlchemon (name) {
      const id = smartContractInfo[name].appID
      const evolved = smartContractInfo[name].evolved
      const traded = smartContractInfo[name].traded
      if (address !== undefined) {
        this.evolveAlchemon(id, evolved, traded)
      } else {
        this.TogglePopup('chooseWallet')
      }
    },
    async evolveAlchemon (appID, evolvedAlchemon, tradedAlchemon) {
      if (userWallet === 'walletconnect') {
        this.TogglePopup('signTransaction')
      }
      let quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveAlchOne`, {
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
          this.TogglePopup('signTransaction')
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
      try {
        const sendTxnResponse = await axios.post(`${apiURL}/sendTxn`, {
          txn: signedTxn
        })
        if (sendTxnResponse.status === 200) {
          this.TogglePopup('transactionSuccessful')
        }
      } catch {
        this.TogglePopup('transactionFailed')
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
