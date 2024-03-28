
<template>
 
 <div>
  
    <div class="border border-1 rounded text-white border-success" >

        <div class="d-flex justify-content-between">
            <div class="m-2 p-2" >
                 Intercambio en Camino
            </div>

            <div class="text-center" >
                <i style="font-size:36px"  class="text-success bi bi-truck m-3"></i>
                <br>
                <text style="font-size:20px" class="text-success">2 dias</text>
            </div>
        </div>

        <div class="d-flex justify-content-between">
            <div class="w-100 m-2">      
                Ya vamos por el objeto de <b> {{offer.dest_owner_name}}</b>
                <br>
                {{offer.title}}  
                <br>
                <br>
                Y ya vamos en camino por tus objetos 
                <br>
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

    amountFormatter(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //return "aaaaa"
    },
    
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


