<template>
    <button :class="props.theme" type="button">
        <Icon v-show="props.icon!=''" :imgName="props.icon"/>
    {{ props.text }}
    </button>
</template>

<script setup>
import Icon from './Icon.vue';
 const props = defineProps({ 
    icon:{type:String,default:''},
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

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    &.full-width{
        width: 100%;
    }

    >img{
        max-height: 16px;
    }
}
</style>