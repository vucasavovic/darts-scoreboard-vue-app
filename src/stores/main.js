import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import CutThroatCricket from '../models/CutThroatCricket'
import { useRouter, useRoute } from 'vue-router'

export const useMainStore = defineStore('main', ()=>{
  
   
  const game = reactive(new CutThroatCricket());
  const router = useRouter();

  const play = ()=>{
    if(game.play()) 
    router.push('/gameplay')
  };


  const pause = ()=>{
    if(game.pause()) router.push('/pause')
  }

  const playersCount = ()=>{
    return game.players.length
  }

  const addPlayer = (name)=>{
      game.addPlayer(name)
  }
  const getPlayers = ()=>{
    return game.players;
  }

  return {game, playersCount, getPlayers, addPlayer}
})
