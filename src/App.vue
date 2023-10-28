<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'



</script>

<template>
  <div class="m-1" style="margin:0px; padding:0px;  width: 450px;">

    <div class=" d-flex justify-content-around">
        <RouterLink class="text-dark" to="/search">Buscar</RouterLink>
        <RouterLink class="text-dark" to="/login">Tu Cuenta</RouterLink>
    </div> 

  </div>
  <br>
  
  <RouterView />
 
</template>

<style scoped>

</style>
