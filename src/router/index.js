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
import AirdropView from '../views/AirdropView.vue'
import AirdropSuccess from '../views/AirdropSuccess.vue'
import AirdropDiscord from '../views/AirdropDiscord.vue'
import AirdropWallet from '../views/AirdropWallet.vue'
import AirdropOptin from '../views/AirdropOptin.vue'
import AirdropTwitter from '../views/AirdropTwitter.vue'
import AirdropTelegram from '../views/AirdropTelegram.vue'
import AirdropEmail from '../views/AirdropEmail.vue'
import AirdropEnd from '../views/AirdropEnd.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
