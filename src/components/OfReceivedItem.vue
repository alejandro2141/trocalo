
<template>
 
 <div>
  
   

    <div class="border border-1 rounded">
      <div v-if=ended class="text-danger">
      FINALIZADA
      </div>
      
      Cakito_123   <br>
        Play Station 3 con 4 juegos.
    </div>


 </div>

</template>

<style>

</style>


<script>

import InventoryObject from '../components/InventoryObject.vue'
import InventoryObjectDetailed from '../components/InventoryObjectDetailed.vue'
import InventoryList from '../components/InventoryList.vue' 



export default {


  components: {
    InventoryObject,InventoryObjectDetailed,InventoryList
  },
  
  data : function() {
      return {

      }
  },
  props: ['session_data','ended'],
  emits: [],

created() {
    },

methods: {
    },

watch : {
      }
}
</script>


