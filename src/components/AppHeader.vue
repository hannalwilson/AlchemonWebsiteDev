<template>
  <nav>
    <router-link to="/"><img alt="Vue Logo" src="https://alchemon-website-assets.s3.amazonaws.com/assets/logo.png">
    </router-link>
    <div class="connectWallet">
      <div v-if="!foundAddress" class="navp" @click="TogglePopup('chooseWallet')"><strong>CONNECT</strong></div>
      <div v-if="foundAddress" class="navp" @click="TogglePopup('disconnectWallet')"><strong>{{ displayAddress
          }}...</strong></div>
    </div>
    <div v-on:click="openMobileNav()" id="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    <div class="nav-links">
      <router-link to="/news">NEWS</router-link>

      <router-link to="/faq">FAQ</router-link>

      <router-link to="/howtoplay">HOW&nbsp;TO&nbsp;PLAY</router-link>

      <router-link to="/token">TOKEN</router-link>

      <router-link to="/alchedex">ALCHEDEX</router-link>
      <div class="dropdown-link">
        <p class="navp">STORE&nbsp;▼</p>
        <div class="dropdown-menu">
          <router-link to="/store">ALCHESHOP</router-link>
          <router-link to="/craftandevolve">CRAFT & EVOLVE</router-link>
          <a href="https://www.randgallery.com/algo-collection/?address=ALCHY5SJXOXZXADZPD73KO6CYNZXDUWFYANTSXU6RIO3EZACIIXUCS3YDM"
            target="_blank">RANDGALLERY</a>
          <a href="https://shop.alchemon.net" target="_blank">MERCH</a>
        </div>
      </div>
    </div>
  </nav>
  <router-link to="/beta" class="navlinks"><button class="downloadButton boxShadow">DOWNLOAD GAME</button></router-link>
  <popup-window v-if="popupTriggers.chooseWallet">
    <h3>Connect Your Wallet</h3>
    <button class="boxShadow" @click="connectWallet('myalgo')">
      MyAlgo
    </button><br>
    <button class="boxShadow" @click="connectWallet('walletconnect')">
      WalletConnect
    </button><br>
    <button class="boxShadow" @click="TogglePopup('chooseWallet')">Cancel</button>
  </popup-window>
  <popup-window v-if="popupTriggers.disconnectWallet">
    <h3>Wallet Information</h3>
    <p>Address: {{ this.address }}</p>
    <button class="boxShadow" @click="disconnectWallet">
      Disconnect
    </button>
    <button class="boxShadow" @click="TogglePopup('disconnectWallet')">
      Close
    </button>
  </popup-window>
</template>

<script>
import { ref } from 'vue'
import PopupWindow from './PopupWindow.vue'

import MyAlgoConnect from '@randlabs/myalgo-connect'
import WalletConnect from '@walletconnect/client'
import QRCodeModal from 'algorand-walletconnect-qrcode-modal'

const popupTriggers = ref({
  chooseWallet: false,
  disconnectWallet: false
})

const myAlgoConnect = new MyAlgoConnect()
const walletConnector = new WalletConnect(
  {
    bridge: 'https://bridge.walletconnect.org', // Required
    qrcodeModal: QRCodeModal
  }
)

let account
let foundAddress

export default {
  components: { PopupWindow },
  name: 'NavBar',
  computed: {
    displayAddress () {
      // eslint-disable-next-line no-unused-vars
      const refresh = foundAddress
      const shortAddress = localStorage.userAddress.slice(0, 4)
      if (localStorage.userAddress !== undefined) {
        return shortAddress
      } else {
        return 'ERROR'
      }
    }
  },
  methods: {
    TogglePopup (trigger) {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    },
    async connectWallet (wallet) {
      this.TogglePopup('chooseWallet')
      switch (wallet) {
        case 'myalgo':
          account = await myAlgoConnect.connect()
          // eslint-disable-next-line no-unused-vars
          this.address = account[0].address
          this.wallet = 'myalgo'
          this.saveUserInformation()
          break
        case 'walletconnect':
          // Check if connection is already established
          if (!walletConnector.connected) {
            // create new session
            // eslint-disable-next-line no-undef
            walletConnector.createSession()
          } else {
            this.address = walletConnector.accounts[0]
            this.wallet = 'walletconnect'
            this.saveUserInformation()
          }
          // Subscribe to connection events
          walletConnector.on('connect', (error) => {
            if (error) {
              throw error
            }
            this.address = walletConnector.accounts[0]
            this.wallet = 'walletconnect'
            this.saveUserInformation()
          })

          walletConnector.on('session_update', (error) => {
            if (error) {
              throw error
            }
            this.address = walletConnector.accounts[0]
            this.wallet = 'walletconnect'
            this.saveUserInformation()
          })

          walletConnector.on('disconnect', (error) => {
            if (error) {
              throw error
            }
          })
      }
    },
    saveUserInformation () {
      window.location.reload()
      localStorage.userAddress = this.address
      localStorage.userWallet = this.wallet
      this.foundAddress = true
    },
    disconnectWallet () {
      if (localStorage.userWallet === 'walletconnect') {
        walletConnector.killSession()
      }
      foundAddress = false
      localStorage.removeItem('userAddress')
      localStorage.removeItem('userWallet')
      localStorage.removeItem('userRewards')
      window.location.reload()
    },
    openMobileNav () {
      const nav = document.querySelector('.nav-links')
      // const navLinks = document.querySelectorAll('.nav-links li')

      // Toggle navigation on mobile
      nav.classList.toggle('nav-active')
    },
    openDropdownNav () {
      const dropdownLink = document.querySelectorAll('.dropdown-link')
      dropdownLink.forEach((dropdown) => {
        dropdown.addEventListener('mouseover', () => {
          dropdown.children[1].style.display = 'block'
        })
        dropdown.addEventListener('mouseleave', () => {
          dropdown.children[1].style.display = 'none'
        })
      })
    },
    /* Run only on mobile

       This code below here will change the behavior of mobile menu links.
       when you click for once it will open the drop down & by the
       second click it will lead you to the link page if you don't
       want to go in dropdown links
    */
    countClicksOnMobileDropdown () {
      const dropdownLink = document.querySelectorAll('.dropdown-link')
      dropdownLink.forEach((dropdown) => {
        let counts = dropdown.clicks || 0
        dropdown.addEventListener('click', () => {
          counts++
          if (counts % 2 === 0) {
            window.location.href = dropdown.children[0].getAttribute('href')
          } else {
            dropdown.children[1].style.display = 'block'
            setTimeout(() => {
              dropdown.children[1].style.display = 'none'
            }, 5000)
          }
        })
        setTimeout(() => { counts = 0 }, 8000)
      })
    }
  },
  mounted () {
    this.openDropdownNav()
    if (window.innerWidth < 768) {
      this.countClicksOnMobileDropdown()
    }
    if (localStorage.userAddress) {
      this.address = localStorage.userAddress
      this.foundAddress = true
      this.userRewards = localStorage.userRewards
    } else {
      this.foundAddress = false
    }
  },
  data () {
    return {
      popupTriggers,
      PopupWindow,
      foundAddress
    }
  }
}
</script>

<style lang="scss" scoped>

.downloadButton {
  color: #000080;
  /* Sets the color of the button text to black */
  border: solid #000080;
  /* This makes a solid black border around the button */
  border-radius: 2vw;
  font-weight: bold;
  padding: 1% 3%;
  letter-spacing: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.downloadButton:hover {
    background-color: darkblue;
      border: 2px solid orange;
      color: orange;
}
@media only screen and (max-width: 798px) {
  .downloadButton {
    right: 30vw;
    width: 75%;
    }
}
nav {
  background-color: rgba(0, 0, 140, 0.5);
  position: fixed;
  width: 100%;
  z-index: 100;
  max-width: 100vw;
}

p{
  text-align: center;
  padding: 0%;
}

a:hover, .navp:hover,  div.nav-links a:hover{
    background-color: orange;
    color: #00006f;
    transition: 0.3s;
    color: white;
    cursor: pointer;
}

img {
    position: absolute;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 3.5vw;
    left: 0;
    top: 25%;
    margin: 1%;
}
.connectWallet {
    position: absolute;
    left: 12vw;
}

div.nav-links {
  display: flex;
  justify-content: right;
  width: 60%;
  padding: 0%;
  margin: 0;
  float: right;
}

@media not all and (min-resolution:.001dpcm)
{ @supports (-webkit-appearance:none) and (stroke-color:transparent) {
div.nav-links {
margin-right: 5%;
}
}}

div.nav-links a, .navp {
  text-decoration: none;
  color: #fefefe;
  font-weight: 500;
  display: block;
  padding: 1vw 2vw;
  margin: 0%;
}

#burger {
  display: none;
  cursor: pointer;
  float: right;
  margin-right: 25px;
}

#burger div {
  width: 30px;
  height: 3px;
  margin: 8px;
  background-color: #fefefe;
  right: 100px;
}

div.dropdown-menu {
  position: absolute;
  cursor: pointer;
  display: none;
  top: 100%;
  padding: 0%;
}

div.dropdown-menu a {
  margin: 0%;
  background-color: rgb(0, 0, 80);
  padding: 0%;
}

div.dropdown-menu a {
  line-height: 8vh;
  line-height: 50px;
  text-align: center;
  padding: 5% ;
}

.nav-active {
  visibility: visible !important;
  transition: 0.4s;
}

/* Mobile */
@media screen and (max-width: 799px) {
  .connectWallet {
    left: 17vw;
}
  div.nav-links {
    align-items: center;
    justify-content: flex-start;
    display: block;
    margin: 0%;
    padding: 0%;
    position: absolute;
    top: 100%;
    background-color: rgba(0, 0, 140, 0.5);
    text-align: center;
    width: 100vw;
    left: 0;
    visibility: hidden;
  }

  div.nav-links a {
    width: 100%;
  }

  div#burger {
    display: block;
  }

  div.dropdown-menu {
      width: 100vw;
      right: 0%;
  }
  img {
      height: 5vw;
  }

  div.dropdown-menu a {
  padding: 1% ;
}
}

@media screen and (max-width: 450px) {
  .connectWallet {
    font-size: 5vw;
    left: 25vw;
  }
    img {
      height: 7vw;
      margin-top: 2%;
  }
}
@media screen and (max-width: 350px) {
  .connectWallet {
    font-size: 6vw;
  }
}
</style>
