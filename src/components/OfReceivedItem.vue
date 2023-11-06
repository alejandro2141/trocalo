
<template>
 
 <div>

    <div class="border border-1 rounded">
        Cakito_123  se interesa x:<br>
        Objeto 
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
  props: ['session_data'],
  emits: [],

created() {
    },

methods: {
    },

watch : {
      }
}
</script>


