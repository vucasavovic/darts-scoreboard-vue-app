<template>
    <main class="view winner-view">
        <div class="winner">
            <img src="/images/darts-board.svg" alt="Winner graphics">
            <div class="player">
                <p>Well done!</p>
                <h1>{{ winner.name }}</h1>
            </div>
           
            <Button @click="restart()" text="To lobby"/>
        </div>
       
    </main>
</template>

<script setup>
import Button from '../components/Button.vue';
import { ref,computed } from 'vue';
import { useGameManager } from '../stores/GameManager';
import { useRouter } from 'vue-router';
 
const router = useRouter();
const GameManager = useGameManager();

const winner = computed(()=>{
    return GameManager.game.winner || {name:'John Doe',score:345};
})


const restart = ()=>{
    router.push('/').then(()=>{GameManager.quit()})
}
</script>

<style lang="scss" scoped>
.winner-view{
    

    >.winner{
        margin: 0 auto;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        >img{
            max-width: 500px;
        }
    }

    & .player{
        display: block;
        text-align: center;
        >:nth-child(2){
            font-size: 3.4rem;
            font-weight: 700;
            margin-top: 0.1rem;
        }
    }
}
</style>