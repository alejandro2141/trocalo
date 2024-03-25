
<template>
 
 <div>
  
    <div class="border border-1 rounded" :class="{'text-warning border-warning': accepted }"   >

        <div class="d-flex justify-content-between">
            <div v-if="isNewProposal()" class="bg-success text-start opacity-50 text-white" style="width:70px;height:20px; border-radius: 0px 0px 10px 0px;" > 
                &nbsp;&nbsp; Nuevo
            </div>
            
            <div v-if="offer.negotiation_loop>0" class="bg-warning text-start opacity-50 text-dark" style="width:120px;height:20px; border-radius: 0px 0px 0px 10px;" > 
                &nbsp;&nbsp;contra oferta ({{offer.negotiation_loop}})
            </div>
        </div>

        <div class="d-flex justify-content-between">
            <div class="w-75 m-0">      
                Enviada a <b> {{offer.dest_owner_name}}</b> <br>
            </div>
            
            <div style="font-size:19px" class=" w-25 m-0 d-flex justify-content-end" >
                <div style="font-size:19px" class="m-1 text-center" >
                        
                    <div v-if="offer.user_id_creator !=  offer.user_id_destination ">
                        <i style="font-size:19px" class="bi bi-truck"></i> ${{offer.amount}} 
                    </div>

                </div>
                
                <div class="m-1 text-center">
                    <!--  <i class="bi bi-clock"></i> -->
                    <i class="bi bi-clock-fill"></i> 
                     {{ evaluateRemainingDays(offer.timestamp) }}dias
                </div>
                

            </div>

        </div>

        <div>
            Por objeto: <br> 
                {{offer.title}}  
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
    
    isNewProposal()
    {
        let creationDate = new Date(this.offer.timestamp)
        let cdate = new Date()

        if ( (cdate.getTime() - creationDate.getTime()) < (1000 * 60 * 60 * 24))
        {
            return true 
        }
        else 
        {
            return false 
        }
    },

    evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
    },

    evaluateRemainingDaysToPay(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   3 - days_passed
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


