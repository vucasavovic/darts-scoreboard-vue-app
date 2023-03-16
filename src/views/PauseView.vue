<template>
  <main class="view pause">
      <section class="panel">
          <h1 class="panel-title">Paused</h1>
        
          <div class="help">
            <h3>How?</h3>
            <p>Highlighted Player row indicatest current Player. After the Player has thrown a dart enter the strike points by clicking on Enter Strike button. Strike points could be entered all at once or one by one.</p>
          </div>
          <div class="buttons">
            <Button @click="GameManager.resume()" text="Resume"/>
            <Button theme="warning" @click="GameManager.quit()" text="Quit"/>
          </div>
      </section>
  </main>
</template>

<script setup>
import Button from '../components/Button.vue';
import {useGameManager} from '@/stores/GameManager'
 

const GameManager = useGameManager();
 
 
</script>

<style lang="scss" setup>
 .buttons{
  display: flex;
  flex-direction: column;
  align-items:center ;
  gap: 2rem;
 }
</style>
