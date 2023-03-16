<template>
    <button :class="props.theme" type="button">{{ props.text }}</button>
</template>

<script setup>
 const props = defineProps({ 
    text:String,
    theme:String
})
</script>

<style lang="scss" scoped>
button{
    padding: 10px 2rem;
    background-color:$themeMain-One;
    
    width: fit-content;
    cursor: pointer;
    font-weight: 700;
    border-radius: 4px;
    font-size: 1rem;
}
</style>