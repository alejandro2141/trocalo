
<template>
 
 <div>
  
   

    <div class="border border-1 rounded" :class="{'text-success border-success': accepted }"   >
        <div class="d-flex justify-content-between">
            <div>      
            Cakito_123   <br>
            Play Station 3 con 4 juegos.
            </div>
            
            <div style="font-size:20px" :class="{'text-success': accepted }"  >
                $17.000
            </div>

            <div>
                <i style="font-size:30px" :class="{'text-success': accepted }" class="bi bi-cloud-upload p-2"></i>
            </div>
        </div>
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
  props: ['session_data','accepted'],
  emits: [],

created() {
    },

methods: {
    },

watch : {
      }
}
</script>


