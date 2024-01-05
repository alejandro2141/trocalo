
<template>
 
 <div>
  
   

   <div class="border border-1 rounded" :class="{'text-success border-success': accepted }"   >
        <div class="d-flex justify-content-between">
            <div>      
                [Nombre quien envia propuesta] esta interesado en <br>
             
            {{offer.title}}
            </div>
                     

            <div  style="font-size:12px" :class="{'text-success': accepted }"  >
              
            </div>

            <div>
                <i class="m-2 h2 bi bi-clock"></i>
                <!-- 
                <i class="bi bi-clock-history"></i>
                <i class="bi bi-clock-fill"></i>
                -->
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
  props: ['session_data','accepted' ,'offer' ],
  emits: [],

created() {
    },

methods: {

  evaluateOfferStatus(val)
    {
       
        switch (val) {
                case '1':
                    return ('Recibida')
                    break;
                case '100':
                    return ('Aceptada')
                    break;
                case '200':
                    return ('Rechazada')
                    break;
                case 4:
                    return ('Expirada')
                    break;
                case 5:
                    return ('Recibida')
                    break;
                default:
                    return ('Failed Status')
                    break;
                }
    }

    
    },

watch : {
      }
}
</script>


