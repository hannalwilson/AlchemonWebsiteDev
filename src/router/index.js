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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
