<template>
  <div class="connectWallet">
    <img src="../assets/algorand.png" /><br>
    <button v-show="!gotAddress" class="boxShadow" @click="connectAccount('pera')">Connect With Pera</button>
    <button v-show="!gotAddress" class="boxShadow" @click="connectAccount('myalgo')">Connect with MyAlgo</button>
    <p>Connected Address: {{ userAddress }}</p>
  </div>
  <div v-show="gotAddress">
    <button class="boxShadow" @click="toggleComponent('showAlchedex')">My Alchedex</button>
    <button class="boxShadow" @click="toggleComponent('showStaking')">Staking</button>
  </div>
  <alchedex-component :address="userAddress" v-show="this.showAlchedex"></alchedex-component>
  <staking-view :address="userAddress" v-show="this.showStaking"></staking-view>
</template>

<style lang="scss" scoped>
.connectWallet {
    padding: 2%;
    padding-top: 10%;
    background-image: linear-gradient(to left, #007bff, #2A78F8, #4287F9, #89B4FB);
}
button {
  font-family: poppins;
  text-align: center;
  background-color: orange;
  border: 2px solid orange;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 1%;
}
button:hover {
  background-color:darkblue;
  color: orange;
}
#text {
  width: 50%;
  font-family: poppins;
  border: none;
  padding: 2%;
  font-weight: bold;
}
img {
    width: 25%;
}
</style>

<script>
import MyAlgoConnect from '@randlabs/myalgo-connect'
import NodeWalletConnect from '@walletconnect/node'
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal'
import AlchedexComponent from '../components/AlchedexComponent.vue'
import StakingView from './StakingView.vue'

let account
const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new NodeWalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org' // Required
  },
  {
    clientMeta: {
      description: 'WalletConnect NodeJS Client',
      url: 'https://nodejs.org/en/',
      icons: ['https://nodejs.org/static/images/logo.svg'],
      name: 'WalletConnect'
    }
  }
)

export default {
  components: {
    AlchedexComponent,
    StakingView
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      // eslint-disable-next-line vue/no-computed-properties-in-data
      address: this.userAddress,
      gotAddress: false,
      showAlchedex: false,
      showStaking: false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    userAddress () {
      if (this.address !== undefined) {
        return this.address
      }
    }

  },
  methods: {
    toggleComponent (component) {
      component = !component
    },
    async connectAccount (wallet) {
      switch (wallet) {
        case 'myalgo':
          account = await myAlgoConnect.connect()
          this.address = account[0].address
          break
        case 'pera':
          // Check if connection is already established
          if (!walletConnector.connected) {
            // create new session
            walletConnector.createSession().then(() => {
              // get uri for QR Code modal
              const uri = walletConnector.uri
              // display QR Code modal
              WalletConnectQRCodeModal.open(
                uri,
                () => {
                  console.log('QR Code Modal closed')
                },
                true // isNode = true
              )
            })
          }

          // Subscribe to connection events
          walletConnector.on('connect', (error, payload) => {
            if (error) {
              throw error
            }

            // Close QR Code Modal
            WalletConnectQRCodeModal.close(
              true // isNode = true
            )
            this.address = walletConnector.accounts[0]

            // Get provided accounts and chainId
            // eslint-disable-next-line no-unused-vars
            const { accounts, chainId } = payload.params[0]
          })

          walletConnector.on('session_update', (error, payload) => {
            if (error) {
              throw error
            }
            this.address = walletConnector.accounts[0]

            // Get updated accounts and chainId
            // eslint-disable-next-line no-unused-vars
            const { accounts, chainId } = payload.params[0]
          })

          walletConnector.on('disconnect', (error, payload) => {
            if (error) {
              throw error
            }
            this.address = undefined

            // Delete walletConnector
          })

          this.address = walletConnector.accounts[0]
      }
      this.gotAddress = true
    }
  }
}
</script>
