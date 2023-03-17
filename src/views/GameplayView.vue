<template>
  <main class="view gameplay">

     <Popup ref="multiplierPopup" title="Times.." >
      <div class="grid-4">
        <MultiplyButton @click="multiplierPopup.handleMultiplierSelected(1)" :value="1" theme="black"/>
        <MultiplyButton @click="multiplierPopup.handleMultiplierSelected(2)" :value="2" theme="default"/>
        <MultiplyButton class="span-2" @click="multiplierPopup.handleMultiplierSelected(3)" :value="3" theme="warning"/>
        <!-- <MultiplyButton @click="multiplierPopup.value.handleMultiplierSelected(0)":value="0" theme="neutral"/> -->
      </div>
    </Popup>


      <section class="panel">

        <div class="current-player">
          <!-- <div class="avatar">
              <img src="/images/avatar.png" alt="Avatar img">
            </div> -->
          <div class="player-name">
            <p>Current player</p>
            <p>{{GameManager.game.currentPlayer?.name || "..."}}</p>
          </div>
           
          <div  class="throws">
            <img v-for="n of GameManager.game.throws" src="/images/icons/dart.svg" alt="Player throw icon">
          </div>
        </div>
        
        <div class="score-table"> 
          <div class="column numbers" >
              <p class="cell name dark">#</p>
              <div class="cell name dark" v-for="number in GameManager.game.cricketNumbers"> 
                 <p v-if="number != 25">{{  number != 25 ? number : ''  }}</p> 
                 <img v-else src="/images/icons/bull.svg" alt="Bullseye icon">
                </div>
              <div class="cell name dark">
                <img  src="/images/icons/points.svg" alt="Points icon">
              </div>
            </div>

            <div :class="['column',{selected:isCurrentPlayer(player)}]" v-for="(player,index) in GameManager.game.players" :key="index" >
              <p class="cell name">{{ player.name }}</p>
              <a v-for="(number,i) in player.numbers || []" class="cell" > 
                <img @click.prevent="handleCellClick(player,number)" :src="`/images/strikes/strike-${player.numbers[i].strikes}.svg`" alt="">
              </a>
              <p class="cell name">{{ player.score }}</p>
          </div>
          </div>

          <div class="flex-between">
            <Button @click="GameManager.game.miss()" text="Missed"/>
            <!-- <Icon imgName="info.svg"/> -->
          </div>
         
      </section>
  </main>
</template>

<script setup>
import Icon from '../components/Icon.vue';
import Button from '../components/Button.vue';
import Popup from '../components/Popup.vue';
import MultiplyButton from '../components/MultiplyButton.vue';
import { GameState } from '../models/GameState';
import { storeToRefs } from 'pinia'
import {useGameManager} from '@/stores/GameManager'
import { ref,computed,onUpdated,watch } from 'vue';
import { useRouter } from 'vue-router';
 
const router = useRouter();
const GameManager = useGameManager();
const {showMultiplierPopup} = storeToRefs(GameManager)
 
const multiplierPopup = ref(null);
 
const isCurrentPlayer = (player)=>{
  return player == GameManager.game.currentPlayer ? true : false;
}

const handleCellClick = (player,number)=>{
  if(isCurrentPlayer(player)){
    multiplierPopup.value.display(true,(multiplier)=>{
      GameManager.strike(number,multiplier)
    });
  }
}
 
const gameOver = ()=>{
 
  return GameManager.game.state === GameState.Finished;
}

onUpdated(()=>{
  if(gameOver()){
    router.push('/winner')
  }
})
 
</script>

<style lang="scss" scoped >
 .panel{
  gap: 0rem !important;
 }
.score-table{
  display: flex;
  width: 100%;
  border : 1px solid $grey;
  border-radius: 4px;
  overflow: hidden;

  >.column{
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: all 0.2s ease-in-out;
    background-color:rgba($color: rgb(0, 0, 0), $alpha: 0.04);
    &.numbers{
      width: fit-content;
      max-width:40px;
    }
    &.selected{
      background-color:white;
      box-shadow: 0 0 12px rgba($color: rgb(17, 16, 61), $alpha: 0.12);
      border: 1px solid black;
      & .cell>img{cursor: pointer;}
    }
    >:not(:last-child){
      border-bottom: 1px solid $grey;
    }
    
  }
   
  & .cell{
    padding: 0.2rem;
    text-align: center;
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-wrap: break-word;
    word-break: break-all;
    
    &.name{
      font-weight: 600;
      >img{
        width: 70%;
        pointer-events: none;
      }
    }

    &.dark{
      background-color: rgb(236, 236, 236);
    }
   
    >img{
      margin: 0 auto;
      width: auto;
      height: 100%;
      pointer-events:all;
    }
    >*{
      font-size: inherit;
      pointer-events: none;
    }
  }
}

.current-player{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  padding-top: 0;
 

  >.player-name{
    >:first-child{
      font-size: 0.8rem;
    }
    >:nth-child(2){
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
  >.throws{
    display: flex;
    gap: 0.5rem;
    max-width: 200px;
  }
}
.grid-4{
  display: grid;
  grid-template-columns: 1fr  1fr  1fr;
  gap:0.6rem
}

.flex-between{
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
 

.avatar{
  width: 80px;
  height: 80px;
  >img{
    width: 100%;
  }
  overflow: hidden;
  border-radius: 300;
}
</style>
