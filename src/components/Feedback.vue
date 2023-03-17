<template>
    <div  :class="['feedback',props.feedback?.theme || 'default', {show:visible} ]">
        <p>{{ props.feedback.message }}</p>
    </div>
</template>

<script setup>
import { onUpdated,ref,watch } from 'vue';
import {useGameManager} from '@/stores/GameManager'
const GameManager = useGameManager();

 const props = defineProps({ 
    feedback:Object
})


const visible = ref(false);
 
watch(GameManager.feedback,(o,n)=>{ 
   display(true);
})


const display = (v)=>{
  
  visible.value = v;

  if(visible.value){
    
     setTimeout(()=>{
        display(false);
    },3000)
  }
   
};


</script>

<style lang="scss" scoped>
.feedback{
    padding: 1rem 3rem;
    position: fixed;
    z-index: 99;
    top: 64px;
    left: 50%;
    transform: translate(-50%,-100%);
    transition: transform .2s ease-in-out;
    border-radius: 0 0 4px 4px;

    width: 100%;
    max-width: 500px;
    text-align: center;

    @include breakpoint-down(680px){
        border-radius: 0;
        width: 100%;
        padding: 1rem;
    }

    &.default{
        background-color: rgb(234, 238, 237);
    }

    &.show{
    transform: translate(-50%,0%);
    }

    
}
</style>