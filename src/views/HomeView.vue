<template>
  <main class="view lobby">
    <section class="panel">

        <div class="game-type">
          <div class="game-title">
            <p class="main">Cricket</p>
            <p class="sub">Cut throat</p>
          </div>
      </div>

      <div class="player-list">
          <div class=""><p>Players</p><p>{{ store.playersCount() }} /4</p></div>

          <div v-for="player in store.getPlayers()" :key="player.id" class="player">
            <p>{{player.id}}</p>
            <p class="name">{{ player.name }}</p>
            <p>edit</p>
          </div>

          <div class="new-player">
            <input ref="newPlayerInput" placeholder="Player name" type="text" >
            <Button @click="addPlayerhandler()" text="Add"/>
          </div>
      </div>

      <Button @click="store.game.play()" text="Play"/>

    </section>
     
  </main>
</template>

<script setup>
import Button from '../components/Button.vue';
 

import {useMainStore} from '@/stores/main'
import { ref } from 'vue';

const store = useMainStore();
const newPlayerInput = ref(null);
 

const addPlayerhandler = ()=>{
  const newPlayerName = newPlayerInput.value.value;
  newPlayerInput.value.value = '';
  store.addPlayer(newPlayerName);
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
  margin-top: 3rem;
  width: 100%;

  >:nth-child(n+2){
    margin-top: 2rem;
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
