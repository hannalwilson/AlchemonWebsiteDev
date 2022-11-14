import { createRouter, createWebHistory } from 'vue-router'
import AlchedexView from '../views/AlchedexView.vue'
import FAQView from '../views/FAQView.vue'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import StoreView from '../views/StoreView.vue'
import TokenView from '../views/TokenView.vue'
import CookiesPolicyView from '../views/CookiesPolicyView.vue'
import LitepaperView from '../views/LitepaperView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import StaffView from '../views/StaffView.vue'
import TermsAndConditionsView from '../views/TermsAndConditionsView.vue'
import BetaView from '../views/BetaView.vue'
import EvolveView from '../views/EvolveView.vue'
import InstructionsView from '../views/InstructionsView.vue'
import HowToPlayView from '../views/HowToPlayView.vue'
import BattleGameView from '../views/BattleGame.vue'
import GovernanceView from '../views/GovernanceView.vue'
import AirdropView from '../views/AirdropPages/AirdropView.vue'
import AirdropSuccess from '../views/AirdropPages/AirdropSuccess.vue'
import AirdropDiscord from '../views/AirdropPages/AirdropDiscord.vue'
import AirdropWallet from '../views/AirdropPages/AirdropWallet.vue'
import AirdropOptin from '../views/AirdropPages/AirdropOptin.vue'
import AirdropTwitter from '../views/AirdropPages/AirdropTwitter.vue'
import AirdropTelegram from '../views/AirdropPages/AirdropTelegram.vue'
import AirdropEmail from '../views/AirdropPages/AirdropEmail.vue'
import AirdropEnd from '../views/AirdropPages/AirdropEnd.vue'
import GettingStartedOne from '../views/GettingStartedPages/GettingStartedOne.vue'
import GettingStartedTwo from '../views/GettingStartedPages/GettingStartedTwo.vue'
import GettingStartedThree from '../views/GettingStartedPages/GettingStartedThree.vue'
import GettingStartedFour from '../views/GettingStartedPages/GettingStartedFour.vue'
import GettingStartedFive from '../views/GettingStartedPages/GettingStartedFive.vue'
import GettingStartedSix from '../views/GettingStartedPages/GettingStartedSix.vue'
import GettingStartedSeven from '../views/GettingStartedPages/GettingStartedSeven.vue'
import GettingStartedEight from '../views/GettingStartedPages/GettingStartedEight.vue'
import GettingStartedNine from '../views/GettingStartedPages/GettingStartedNine.vue'
import GettingStartedTen from '../views/GettingStartedPages/GettingStartedTen.vue'
import WhatIsCrypto from '../views/WhatIsCrypto.vue'
import FreeNFTOne from '../views/FreeNFTPages/FreeNFTOne.vue'
import FreeNFTTwo from '../views/FreeNFTPages/FreeNFTTwo.vue'
import FreeNFTThree from '../views/FreeNFTPages/FreeNFTThree.vue'
import FreeNFTFour from '../views/FreeNFTPages/FreeNFTFour.vue'
import FreeNFTFive from '../views/FreeNFTPages/FreeNFTFive.vue'
import FreeNFTSix from '../views/FreeNFTPages/FreeNFTSix.vue'
import FreeNFTSeven from '../views/FreeNFTPages/FreeNFTSeven.vue'
import FreeNFTEight from '../views/FreeNFTPages/FreeNFTEight.vue'
import FreeNFTNine from '../views/FreeNFTPages/FreeNFTNine.vue'
import FreeNFTTen from '../views/FreeNFTPages/FreeNFTTen.vue'
import FreeNFTGame from '../views/FreeNFTPages/FreeNFTGame.vue'
import PacksView from '../views/PacksView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/alchedex',
    name: 'alchedex',
    component: AlchedexView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
  {
    path: '/token',
    name: 'token',
    component: TokenView
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: CookiesPolicyView
  },
  {
    path: '/litepaper',
    name: 'litepaper',
    component: LitepaperView
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: PrivacyPolicyView
  },
  {
    path: '/termsandconditions',
    name: 'termsandconditions',
    component: TermsAndConditionsView
  },
  {
    path: '/staff',
    name: 'staff',
    component: StaffView
  },
  {
    path: '/beta',
    name: 'beta',
    component: BetaView
  },
  {
    path: '/craftandevolve',
    name: 'craftandevolve',
    component: EvolveView
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: InstructionsView
  },
  {
    path: '/howtoplay',
    name: 'howtoplay',
    component: HowToPlayView
  },
  {
    path: '/howtobattle',
    name: 'howtobattle',
    component: BattleGameView
  },
  {
    path: '/governance',
    name: 'governance',
    component: GovernanceView
  },
  {
    path: '/freealchegold',
    name: 'freealchegold',
    component: AirdropView
  },
  {
    path: '/alchegoldsuccess',
    name: 'alchegoldsuccess',
    component: AirdropSuccess
  },
  {
    path: '/alchegolddiscord',
    name: 'alchegolddiscord',
    component: AirdropDiscord
  },
  {
    path: '/alchegoldwallet',
    name: 'alchegoldwallet',
    component: AirdropWallet
  },
  {
    path: '/alchegoldoptin',
    name: 'alchegoldoptin',
    component: AirdropOptin
  },
  {
    path: '/alchegoldtwitter',
    name: 'alchegoldtwitter',
    component: AirdropTwitter
  },
  {
    path: '/alchegoldtelegram',
    name: 'alchegoldtelegram',
    component: AirdropTelegram
  },
  {
    path: '/alchegoldemail',
    name: 'alchegoldemail',
    component: AirdropEmail
  },
  {
    path: '/alchegoldend',
    name: 'alchegoldend',
    component: AirdropEnd
  },
  {
    path: '/getting-started-step-1',
    name: 'getting-started-step-1',
    component: GettingStartedOne,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-2',
    name: 'getting-started-step-2',
    component: GettingStartedTwo,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-3',
    name: 'getting-started-step-3',
    component: GettingStartedThree,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-4',
    name: 'getting-started-step-4',
    component: GettingStartedFour,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-5',
    name: 'getting-started-step-5',
    component: GettingStartedFive,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-6',
    name: 'getting-started-step-6',
    component: GettingStartedSix,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-7',
    name: 'getting-started-step-7',
    component: GettingStartedSeven,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-8',
    name: 'getting-started-step-8',
    component: GettingStartedEight,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-9',
    name: 'getting-started-step-9',
    component: GettingStartedNine,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/getting-started-step-10',
    name: 'getting-started-step-10',
    component: GettingStartedTen,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/cryptoblockchainandnfts',
    name: 'cryptoblockchainandnfts',
    component: WhatIsCrypto
  },
  {
    path: '/free-nft-step-1',
    name: 'free-nft-step-1',
    component: FreeNFTOne,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-2',
    name: 'free-nft-step-2',
    component: FreeNFTTwo,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-3',
    name: 'free-nft-step-3',
    component: FreeNFTThree,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-4',
    name: 'free-nft-step-4',
    component: FreeNFTFour,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-5',
    name: 'free-nft-step-5',
    component: FreeNFTFive,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-6',
    name: 'free-nft-step-6',
    component: FreeNFTSix,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-7',
    name: 'free-nft-step-7',
    component: FreeNFTSeven,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-8',
    name: 'free-nft-step-8',
    component: FreeNFTEight,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-9',
    name: 'free-nft-step-9',
    component: FreeNFTNine,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-step-10',
    name: 'free-nft-step-10',
    component: FreeNFTTen,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/free-nft-download-game',
    name: 'free-nft-download-game',
    component: FreeNFTGame,
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/openpacks',
    name: 'openpacks',
    component: PacksView,
    meta: {
      hideNavbar: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
