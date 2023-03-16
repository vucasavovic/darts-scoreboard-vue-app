<template>
    <img class="icon" :src="`/images/icons/${props.imgName}`" alt="Clickable icon img">
</template>

<script setup>
 const props = defineProps({ 
    imgName:String
})
</script>

<style lang="scss" scoped>
.icon{
    cursor: pointer;
}
</style>