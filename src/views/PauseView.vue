<template>
  <main class="view pause">
      <section class="panel">
          <h1>Pause</h1>
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
