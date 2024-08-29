
<script setup  >
import { PATH_PRODUCT_IMG } from '../../config.js'

</script>

<template>
 
 <div style="width:350px">
  
    <div class="border border-1 rounded text-warning border-warning" >


    <!-- HEADER -->
        <div class="d-flex justify-content-between">
        
            <!--
            <div v-if="isNewProposal()" class="bg-success text-start opacity-50 text-white" style="width:70px;height:20px; border-radius: 0px 0px 10px 0px;" > 
                &nbsp;&nbsp; Nuevo
            </div> 
            -->

            <div v-if="isNewProposal()" class="text-warning text-start"  style="margin-top: -0.7em; margin-left: -0.5em; font-size:20px"> 
                <i  class="bi bi-star-fill"> </i>
            </div>
            <div v-else>
            </div>

            <text> De @{{offer.source_owner_name}}</text>

            <div>
                {{ evaluateRemainingDaysToPay(offer.date_acceptance) }} dias <i style="font-size:20px"  class="bi bi-cash m-0"></i>
            </div>
           <!--  
            <div v-if="offer.negotiation_loop>0" class="bg-warning text-start opacity-50 text-dark" style="width:120px;height:20px; border-radius: 0px 0px 0px 10px;" > 
                &nbsp;&nbsp;contra oferta ({{offer.negotiation_loop}})
            </div>
            -->
           
        </div>

       
    <!-- BODY -->



        <div>
            <div class="d-flex justify-content-around">
                
                <!--COLUMN 1-->
                <div class="d-flex  flex-column"> 
                    <text class="text-secondary" >Tu Objeto</text>
                    <div class="d-flex align-items-center h-100" >
                    <img v-if="my_objects!=null && my_objects.length>0 " class=""  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+my_objects[0].img_ref1+'_thumb'" /> 
                    </div>
                </div>

                <!--COLUMN 2-->
                <div class="d-flex align-items-center"> 
                    <i style="font-size:36px" class="bi bi-arrow-left-right"></i>  
                </div>

                <!--COLUMN 3-->
                <div class="d-flex align-items-start flex-column"> 
                    <text class="text-secondary">Por sus objetos</text>
                    
                    <div v-for="p_object in partner_objects">
                       
                       <img v-if="p_object!=null" class="m-1"  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+p_object.img_ref1+'_thumb'" /> 
               
                    </div>

                </div>

            </div>
        </div>







        <div style="font-size:16px" class=" m-2 " >
            <p class="text-start">
                    @{{offer.source_owner_name}} debe concretar el pago de Recoleccion y Despacho.
                <br>
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
  props: ['session_data','accepted','offer','my_objects', 'partner_objects'],
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


