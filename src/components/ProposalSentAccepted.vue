<script setup  >
    import { PATH_PRODUCT_IMG } from '../../config.js'
</script>


<template>
 
 <div>
  
    <div class="border border-1 rounded text-warning border-warning" >

        <div class="d-flex justify-content-between">
            <div v-if="isNewProposal()" class="bg-success text-start opacity-50 text-white" style="width:70px;height:20px; border-radius: 0px 0px 10px 0px;" > 
                &nbsp;&nbsp; Nuevo
            </div>
            
            <div v-if="offer.negotiation_loop>0" class="bg-warning text-start opacity-50 text-dark" style="width:120px;height:20px; border-radius: 0px 0px 0px 10px;" > 
                &nbsp;&nbsp;contra oferta ({{offer.negotiation_loop}})
            </div>

            <div>
                
            </div>
        </div>

        <div class="d-flex justify-content-between">
            <div class="w-100 m-2">      
                Aceptada por <b>{{offer.dest_owner_name}} </b> <br>
            </div>

            <div>
                <i style="font-size:36px"  class="bi bi-cash-coin m-3"></i>
            </div>
        </div>

        <div class="d-flex align-items-start m-2">
            <div class="bg-white"  style="width:50px; height:50px">
                <img  style="width:50px; height:50px" :src="PATH_PRODUCT_IMG+'/'+object1.img_ref1" /> 
            </div>
            <div class="m-2">
                {{offer.title}}  
            </div>
        </div>

        <div style="font-size:16px" class=" m-2 " >
            <p class="text-center">
            Te quedan  <text style="font-size:26px"> {{ evaluateRemainingDaysToPay(offer.date_acceptance) }} </text> dias para pagar el cargo de Recoleccion y despacho.
            <br>
            <text style="font-size:26px"> ${{ amountFormatter(offer.amount) }} </text>
            <br>
            <br>

            <text>Concretado el pago, el intercambio se realiza por nuestro equipo de transporte</text>
        
            </p>


        <!--
            <div class="m-2">
                <i style="font-size:19px" class="bi bi-truck"></i> ${{offer.amount}} 
            </div>
            <div class="m-2" >
                <i class="bi bi-cash-coin"></i>
                {{ evaluateRemainingDaysToPay(offer.date_acceptance) }}dias
            </div>
        -->


        </div>

    </div>


 </div>

</template>

<style>

</style>


<script  >

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
  props: ['session_data','accepted','offer','object1'],
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


