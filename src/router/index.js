import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameplayView from '../views/GameplayView.vue'
import PauseView from '../views/PauseView.vue'
import WinnerView from '../views/WinnerView.vue'
import { useGameManager } from '../stores/GameManager'
import { GameState } from '../models/GameState'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias:['/lobby'],
      name: 'lobby',
      component: HomeView
    }
    ,
    {
      path: '/gameplay',
      name: 'gameplay',
      component: GameplayView,
      beforeEnter: (to, from ) => {
        const GameManager = useGameManager();
         if(GameManager.game.state != GameState.Playing){
          return { name: 'lobby' }
         } 
      },
    }, 
    {
      path: '/pause',
      name: 'pause',
      component: PauseView,
      beforeEnter: (to, from ) => {
        const GameManager = useGameManager();
         if(GameManager.game.state != GameState.Paused){
          return { name: 'lobby' }
         } 
      }
    } 
    , 
    {
      path: '/winner',
      name: 'winner',
      component: WinnerView,
      beforeEnter: (to, from ) => {
        const GameManager = useGameManager();
         if(GameManager.game.state != GameState.Finished){
          return { name: 'lobby' }
         } 
      }
    } 
  ]
})

export default router
