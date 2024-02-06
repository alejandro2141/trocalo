
<template>

<div>
  
  <div>
    <!-- 
   <SearchResult :session_data="session_data" />
    -->
    <SearchCategoriesLast :session_data="session_data"/>
  </div>
  
  <div>
     <SearchCategoriesGames />
  </div>
  <div>
    <SearchCategoriesBooks/> 
  </div>

  <div>
   <SearchCategoriesClothes />
  </div>

</div>
</template>

<style>

</style>


<script>

import SearchResult from '../components/SearchResult.vue'
import SearchCategoriesLast from '../components/SearchCategoriesLast.vue'
import SearchCategoriesGames from '../components/SearchCategoriesGames.vue'
import SearchCategoriesBooks from '../components/SearchCategoriesBooks.vue'
import SearchCategoriesClothes from '../components/SearchCategoriesClothes.vue'

export default {

  components: {
      SearchResult,SearchCategoriesGames,SearchCategoriesBooks , SearchCategoriesClothes, SearchCategoriesLast
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


