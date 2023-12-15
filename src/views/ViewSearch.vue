
<template>

  <SearchResult :session_data="session_data" />

</template>

<style>

</style>


<script>

import SearchResult from '../components/SearchResult.vue'


export default {

  components: {
      SearchResult
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


