 <template>
    <div :class="['popup',{active:active}]">
         

        <div class="card">
            <header>
                <h3 v-if="props.title" class="title">{{ props.title }}</h3>
                <Icon @click="display(false)" imgName="close.svg"/>
                 
            </header>
           
            <slot/>
        </div>
         
    </div>
 </template>
 
 <script setup>
 import Icon from './Icon.vue';
import { ref } from 'vue';

  const props = defineProps({ 
    title:String
 })

 const active = ref(false)

 const display = (isVisible)=>{
    active.value = isVisible
 }
 defineExpose({display})

 </script>
 
 <style lang="scss" scoped>
 .popup{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba($color: rgb(61, 122, 208), $alpha: .3);
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;

    padding: 1rem;

    display: none;
    align-items: center;

    &.active{
        display: flex;
    }

    

    >.card{
        background-color: white;
        flex: 1;
        max-width: 600px;
        margin:  0 auto;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    
        text-align: center;
        padding: 1rem 2rem 3rem 2rem;

        >header{
            width: 100%;
            flex: 1;
            display: flex;
            justify-content: space-between;
        }
    }

    .card .title{
        font-size: 2rem;
    }
 }
 </style>