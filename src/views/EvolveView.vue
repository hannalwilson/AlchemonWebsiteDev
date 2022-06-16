<template>
    <div class="evolveswap">
        <p class="yellowHeader spreadText">EVOLVE // SWAP</p>
        <p class="whiteText">All available evolutions are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM">Store</a>. The Quick-Evolve links below:</p>
        <p><br>&#9830; <a class="blueLinks" @click="evolveAlchemon(778975194, 509842608, 490139078)">Evolve a <b>Zipadol</b> from 2 Zip</a>
        <br>&#9830; <a class="blueLinks" @click="craftAlchemon(778987467, 527475282, 509850827, 509850827, 1, 100)">Evolve a <b>Zipacute</b> from 2 Zipadol</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon(778975387, 509844088, 490141855)">Evolve a <b>Hailpuff</b> from 2 Puff</a>
        <br>&#9830; <a class="blueLinks" @click="craftAlchemon(778988202, 527477069, 509848775, 509848775, 1, 100)">Evolve a <b>Hailstorm</b> from 2 Hailpuff</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon(778975506, 509848775, 493271743)">Evolve a <b>Daggerz</b> from 2 Dagz</a>
        <br>&#9830; <a class="blueLinks" @click="craftAlchemon(778989153, 527479654, 509844088, 509844088, 1, 100)">Evolve a <b>Daggerpult</b> from 2 Daggerz</a>
        <br>&#9830; <a class="blueLinks" @click="evolveAlchemon(778975613, 509850827, 490146814)">Evolve a <b>Chomp</b> from 2 Lika</a>
        <br>&#9830; <a class="blueLinks" @click="craftAlchemon(778989735, 527481591, 509842608, 509842608, 1, 100)">Evolve a <b>Likachomp</b> from 2 Chomp</a></p>
        <img class="zoomIn_1 evolutions" src="../assets/evolutions.png" alt="Evolutions">
    </div>
    <div class="craftswap">
        <p class="darkBlueHeader spreadText">CRAFT // SWAP</p>
        <p>All available crafts are contained in the <a class="blueLinks" href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM">Store</a>. The Craft links below:</p>
        <p>
            <br>&#9830; <a @click="craftAlchemon(779190087, 527483715, 527475282, 527477069, 2, 250)" class="blueLinks">Craft a <b>Voltstorm</b> from 2 Hailstorm and 2 Zipacute</a>
            <br>&#9830; <a @click="craftAlchemon(779191097, 527485015, 527479654, 527481591, 2, 250)" class="blueLinks">Craft a <b>Chomperz</b> from 2 Likachomp and 2 Daggerpult</a>
            <br>&#9830; <a @click="craftAlchemon(779192250, 527486409, 527483715, 527485015, 1, 250)" class="blueLinks">Craft a <b>Cyclostorm</b> from an Chomperz and a Voltstorm</a></p>
        <div>
            <img class="zoomIn_1" src="../assets/craft.jpg" alt="Crafting Icon">
            <img class="zoomIn_1" src="../assets/transfer.png" alt="Trading Icon">
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
    <button class="boxShadow" @click="TogglePopup('transactionFailed')">Close</button>
  </popup-window>
</template>

<style lang="scss" scoped>
.evolveswap {
    background-image: linear-gradient(to right, #ffa500, #ffb327);
}
.evolutions {
    width: 60%;
}
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
import PopupWindow from '@/components/PopupWindow.vue'
import { ref } from 'vue'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'
import { formatJsonRpcRequest } from '@json-rpc-tools/utils'
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)
const apiURL = 'https://avk5m0z0nc.execute-api.us-east-1.amazonaws.com'
let address
let signedTxn
let account
let userWallet

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

const popupTriggers = ref({
  chooseWallet: false,
  signTransaction: false,
  transactionSuccessful: false,
  transactionFailed: false
})
export default {
  components: {
    PopupWindow
  },
  data () {
    return {
      PopupWindow,
      popupTriggers
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    async evolveAlchemon (appID, evolvedAlchemon, tradedAlchemon) {
      if (address === undefined) {
        popupTriggers.value.chooseWallet = !popupTriggers.value.chooseWallet
      } else {
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
      }
    },
    async craftAlchemon (appID, evolvedAlchemon, tradedAlchemonOne, tradedAlchemonTwo, amount, cost) {
      if (address === undefined) {
        popupTriggers.value.chooseWallet = !popupTriggers.value.chooseWallet
      } else {
        if (userWallet === 'walletconnect') {
          this.TogglePopup('signTransaction')
        }
        let quickEvolveOneResponse = await axios.post(`${apiURL}/quickEvolveAlchTwo`, {
          customerAddress: address,
          tradeInOneStoreAddress: tradeInAddresses[tradedAlchemonOne],
          tradeInTwoStoreAddress: tradeInAddresses[tradedAlchemonTwo],
          quickEvolveAlchTwoAppID: appID,
          evolvedAlchemonAssetID: evolvedAlchemon,
          tradeInAlchemonAssetIDOne: tradedAlchemonOne,
          tradeInAlchemonOneAmount: amount,
          tradeInAlchemonAssetIDTwo: tradedAlchemonTwo,
          tradeInAlchemonTwoAmount: amount,
          alchecoinAssetID: 310014962,
          requiredAmountOfAlch: cost
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
