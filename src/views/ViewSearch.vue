
<template>

<div>
  
  <div>
   <SearchResult :session_data="session_data" />
  </div>
  
  <div>
    --- Jugetes ---
    <SearchCategoriesGames />
  </div>
  <div>
    --- Mas Populares  --- 
  </div>

  <div>
    --- Cambia Tu Ropa  --- 
  </div>

</div>
</template>

<style>

</style>


<script>

import SearchResult from '../components/SearchResult.vue'
import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'


export default {

  components: {
      SearchResult,SearchCategoriesGames 
  },
  
  data : function() {
      return {

      }
  },
  props: ['session_data'],
  emits: ['sessionCreated'],

created() {
  console.log("APP CREATED")
    },

methods: {
    },

watch : {
      }
}
</script>


