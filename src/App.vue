<template>
  <Feedback :feedback="GameManager.feedback" /> 
  <div class="header">
     <img  src="/logo.svg" alt="Logo"> 
    <Icon v-if="route.name=='gameplay'" @click="GameManager.pause()" imgName="settings.svg"/>
  </div>
  <RouterView />
</template>


<script setup>
import { useGameManager } from './stores/GameManager';
import Feedback from './components/Feedback.vue';
import Icon from './components/Icon.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const GameManager = useGameManager();
 window.addEventListener('keypress',(e)=>{
 
  if(e.code === "Space"){
    GameManager.pause();
  }
 })
</script>

<style lang="scss" scoped>
 .header{
  padding: 0 clamp(1rem,4vw,3rem);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  
  background-color:white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid $grey;
 }
</style>
