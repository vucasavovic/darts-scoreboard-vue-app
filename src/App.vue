<template>
  <div class="header">
    <img src="/logo.svg" alt="Logo">
  </div>
  <RouterView />
</template>


<script setup>
 
</script>

<style lang="scss" scoped>
 .header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 70px;
  background-color:$grey;

  display: flex;
  justify-content: center;
  align-items: center;
 }
</style>
