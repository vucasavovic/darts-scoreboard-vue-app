<template>
    <main class="view winner-view">
        <div class="winner">
            <img src="/images/winner.svg" alt="Winner graphics">
            <h1>{{ winner.name }}</h1>

            <div class="score">
                <p>Score</p>
                <p>{{ winner.score }}</p>
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
    }

    & .score{
        text-align: center;
        >:nth-child(2){
            font-size: 3rem;
            font-weight: 700;
            margin-top: 0.3rem;
        }
    }
}
</style>