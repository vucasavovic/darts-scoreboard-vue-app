<template>
    <button type="button">{{ props.text }}</button>
</template>

<script setup>
 const props = defineProps({ 
    text:String
})
</script>

<style lang="scss" scoped>
button{
    padding: 10px 2rem;
    background-color:$themeMain-One;
    color: black;
    width: fit-content;
    cursor: pointer;
    font-weight: 700;
    border-radius: 4px;
}
</style>