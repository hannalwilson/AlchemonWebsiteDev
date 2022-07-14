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
import GettingStartedView from '../views/GettingStarted.vue'
import EvolveView from '../views/EvolveView.vue'
import BattleGameView from '../views/BattleGame.vue'
import HuntingGroundsView from '../views/HuntingGrounds.vue'
import TrainingGroundsView from '../views/TrainingGrounds.vue'
import WalletStakingView from '../views/WalletStaking.vue'

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
    path: '/instructions',
    name: 'GettingStarted',
    component: GettingStartedView
  },
  {
    path: '/craftandevolve',
    name: 'craftandevolve',
    component: EvolveView
  },
  {
    path: '/howtobattle',
    name: 'battle',
    component: BattleGameView
  },
  {
    path: '/huntinggrounds',
    name: 'huntinggrounds',
    component: HuntingGroundsView
  },
  {
    path: '/traininggrounds',
    name: 'traininggrounds',
    component: TrainingGroundsView
  },
  {
    path: '/walletstaking',
    name: 'walletstaking',
    component: WalletStakingView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
