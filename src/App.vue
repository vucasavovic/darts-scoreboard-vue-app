<template>
  <Feedback :feedback="GameManager.feedback" /> 
  <div class="header">
     <img  src="/logo.svg" alt="Logo"> 
    <Icon imgName="settings.svg"/>
  </div>
  <RouterView />
</template>


<script setup>
import { useGameManager } from './stores/GameManager';
import Feedback from './components/Feedback.vue';
import Icon from './components/Icon.vue';
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
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 70px;
  background-color:white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid $grey;
 }
</style>
