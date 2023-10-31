

<template>
 
  <FilterForSearchView/>
<br>
  <SearchResult :session_data="session_data" />


</template>

<style>

</style>


<script>
import FilterForSearchView from '../components/FilterForSearchView.vue'
import SearchResult from '../components/SearchResult.vue'

export default {

  components: {
    FilterForSearchView,SearchResult
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


