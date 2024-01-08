
<template>
 
 <div>
  
    <div class="border border-1 rounded" :class="{'text-success border-success': accepted }"   >
        <div class="d-flex justify-content-between">
            <div class="w-75 m-2">      
                Enviada a:{{offer.dest_owner_name}} <br>
                Por el objeto: <br> 
                {{offer.title}}  
            </div>
            
           

            <div style="font-size:19px" class=" w-25 m-2 d-flex justify-content-end" >
                <div style="font-size:19px" class="m-2" >
                   <i style="font-size:19px" class="bi bi-truck"></i> ${{offer.amount}} 
                </div>
                <div class="m-2">
                    <!--  <i class="bi bi-clock"></i>
                    <i class="bi bi-clock-fill"></i> -->
                    <i class="bi bi-clock-history"></i> {{ evaluateRemainingDays(offer.timestamp) }}d
                </div>
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

    evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
    },

    evaluateOfferStatus(val)
    {
       
        switch (val) {
                case '1':
                    return ('Enviada')
                    break;
                case '100':
                    return ('Aceptada')
                    break;
                case '200':
                    return ('Rechazada')
                    break;
                case '4':
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


