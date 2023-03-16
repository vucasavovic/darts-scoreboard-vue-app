<template>
  <main class="view lobby">
    <section class="panel">

        <div class="game-type">
          <div class="game-title">
            <p class="main panel-title">Cricket</p>
            <p class="sub">Cut throat</p>
          </div>
      </div>

      <div class="player-list">
          <div class=""><p>Players</p><p>{{ GameManager.playersCount() }} /4</p></div>

          <div v-for="(player, index) in GameManager.getPlayers()" :key="player.id" class="player">
            <p>{{index+1}}</p>
            <p class="name">{{ player.name }}</p>
            <Icon @click="GameManager.game.removePlayer(player.id)" imgName="close.svg"/>
          </div>

          <div class="new-player">
            <input ref="newPlayerInput" placeholder="Player name" type="text" >
            <Button @click="addPlayerhandler()" text="Add"/>
          </div>
      </div>

      <Button @click="GameManager.play()" text="Play"/>

    </section>
     
  </main>
</template>

<script setup>
import Button from '../components/Button.vue';
import Icon from '../components/Icon.vue';

import {useGameManager} from '@/stores/GameManager'
import { ref } from 'vue';

const GameManager = useGameManager();
const newPlayerInput = ref(null);
 

const addPlayerhandler = ()=>{
  const newPlayerName = newPlayerInput.value.value;
  newPlayerInput.value.value = '';
  GameManager.addPlayer(newPlayerName);
}
</script>

<style lang="scss" setup>
 
.game-title{
  text-align: center;
  >.main{
    font-size:3rem;
    text-transform: capitalize;
    font-weight: 600;
  }
  
}


.player-list{
  margin: 0 auto;
  width: 100%;

  >:nth-child(n+2){
    margin-top: 0.6rem;
  }

  >*{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
}

.player{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  >.name{
    text-transform: capitalize;
    margin-right: auto;
    font-size: 1.6rem;
    font-weight: 600;

  }
}
</style>
