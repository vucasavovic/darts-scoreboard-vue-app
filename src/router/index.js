import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameplayView from '../views/GameplayView.vue'
import PauseView from '../views/PauseView.vue'
import WinnerView from '../views/WinnerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias:['/lobby'],
      name: 'home',
      component: HomeView
    }
    ,
    {
      path: '/gameplay',
      name: 'gameplay',
      component: GameplayView
    }, 
    {
      path: '/pause',
      name: 'pause',
      component: PauseView
    } 
    , 
    {
      path: '/winner',
      name: 'winner',
      component: WinnerView
    } 
  ]
})

export default router
