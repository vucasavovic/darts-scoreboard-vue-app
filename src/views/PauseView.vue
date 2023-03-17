<template>
  <main class="view pause">
      <section class="panel">
          <h1 class="panel-title">Paused</h1>
        
          <div class="help">
            <h3>How to play?</h3>
            <p>Click on a table cell to enter a strike. In a popup panel choose a multiplier value that matches what you've hit on your Darts board.</p>
          </div>
          <div class="buttons">
            <Button @click="GameManager.resume()" text="Resume"/>
            <Button theme="warning" @click="router.push('lobby')" text="Quit"/>
          </div>
      </section>
  </main>
</template>

<script setup>
import Button from '../components/Button.vue';
import {useGameManager} from '@/stores/GameManager'
import { useRouter } from 'vue-router';
 
const router = useRouter();
const GameManager = useGameManager();
 
 
</script>

<style lang="scss" setup>
 .buttons{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items:center ;
  gap: 2rem;
 }
 .help{
  text-align: center;
 }
</style>
