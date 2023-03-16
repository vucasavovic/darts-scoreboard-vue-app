<template>
     <button :class="['multiply-btn',props.theme]">X{{ props.value }}</button> 
</template>

<script setup>
 const props = defineProps({ 
    value:Number,
    theme:String
})  
</script>

<style lang="scss" scoped>
.multiply-btn{
    cursor: pointer;
    padding: 1rem;
    width: 82px;
    height: 82px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 400px;
    font-weight: 700;
    font-size: 1.4rem;
}
 
</style>