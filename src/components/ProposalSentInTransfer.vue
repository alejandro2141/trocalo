
<script setup  >
    import { PATH_PRODUCT_IMG } from '../../config.js'
</script>

<template>
 
 <div>
  
    <div class="border border-1 rounded text-white border-success" >

         <!--HEADER -->
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
        <!-- BODY -->

        <!-- BODY -->
        <div class="">
            <div class="w-100 m-2">

                Ten a mano tus objetos :<br>
                 <div class="d-flex justify-content-start">
                    <div v-for="p_object in partner_objects">
                       <img v-if="p_object!=null" class="m-1"  style="height:90px" :src="PATH_PRODUCT_IMG+'/'+p_object.img_ref1" /> 
                    </div>
                </div>   
                
                
                
                <br>
                Y  te llevaremo el objeto de <b>@{{offer.dest_owner_name}}</b><br>
               <img v-if="my_objects!=null && my_objects.length>0 " class=""  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+my_objects[0].img_ref1" /> 
                {{offer.title}}  

                 <br>
                
            </div>
        </div>


<!--
        <div class="d-flex justify-content-start">
                Ya vamos por el objeto de <b> {{offer.dest_owner_name}}</b>
        </div>


        <div class="d-flex align-items-start m-2">
            <div class="bg-white"  style="width:50px; height:50px">
                <img  style="width:50px; height:50px" :src="PATH_PRODUCT_IMG+'/'+object1.img_ref1" /> 
            </div>
            <div class="m-2">
                {{offer.title}}  
            </div>
        </div>


       
        <div class="d-flex justify-content-start">
            Y ya vamos en camino por tus objetos 
        </div>
    -->

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
  props: ['session_data','accepted','offer','object1' ,'my_objects', 'partner_objects'],
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


