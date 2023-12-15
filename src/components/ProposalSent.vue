
<template>
 
 <div>
  
   

    <div class="border border-1 rounded" :class="{'text-success border-success': accepted }"   >
        <div class="d-flex justify-content-between">
            <div>      
            {{offer.owner}}   <br>
            {{offer.name}}
            </div>
            
            <div v-if="offer.status<3 " style="font-size:16px" :class="{'text-success': accepted }"  >
                ${{offer.amount}}
            </div>


            <div  style="font-size:12px" :class="{'text-success': accepted }"  >
                {{evaluateOfferStatus(offer.status)}}
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
  props: ['session_data','accepted','offer'],
  emits: [],

created() {
    },

methods: {

    evaluateOfferStatus(val)
    {
       
        switch (val) {
                case 1:
                    return ('Enviada')
                    break;
                case 2:
                    return ('Aceptada')
                    break;
                case 3:
                    return ('Rechazada')
                    break;
                case 4:
                    return ('Expirada')
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


