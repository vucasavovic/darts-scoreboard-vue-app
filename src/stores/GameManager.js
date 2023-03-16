import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import CutThroatCricket from '../models/CutThroatCricket'
import Feedback from '../models/Feedback'
import { useRouter, useRoute } from 'vue-router'
 

export const useGameManager = defineStore('main', ()=>{
 
  const game = reactive(new CutThroatCricket());
  const router = useRouter();
  

  const feedback = ref(new Feedback('Default feedback!'));

  const strike = (number,multiplier=1)=>{
    game.strike(number)
  }

  const play = ()=>{
     game.play().then(()=>{
      router.push('/gameplay')
     }).catch(feedback => updateFeedback(feedback));
  };

  const resume = ()=>{
    if(game.resume()) router.push('/gameplay')
  }
  const pause = ()=>{
    if(game.pause()) router.push('/pause')
  }
  const quit = ()=>{
    game.quit();
    router.push('/lobby') 
  }

  const playersCount = ()=>{
    return game.players.length
  }

  const addPlayer = (name)=>{
      const res = game.addPlayer(name)
      updateFeedback(res)
  }
  const getPlayers = ()=>{
    return game.players;
  }


  const updateFeedback = (fee)=>{
    if(fee instanceof Feedback){
      feedback.value.message = fee.message;
      feedback.value.timestamp = fee.timestamp;
      feedback.value.theme = fee.theme;
    }  
  }

  addPlayer('George');
  addPlayer('Moira');
  addPlayer('Nadine');
  addPlayer('Shaniqua')

  return {feedback, game,quit, pause, resume, play,strike, playersCount, getPlayers, addPlayer}
})
