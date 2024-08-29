
<script setup  >
    import { PATH_PRODUCT_IMG } from '../../config.js'
</script>

<template>
 
 <div  style="width:350px">
  
    <div class="border border-1 rounded text-white border-success" >

         <!--HEADER -->
         <div>
             Tiempo estimado : <text style="font-size:16px" class="text-warning">2 dias</text> <br>
             Costo Retiro y Despacho : <text class="text-warning"> $ {{offer.amount}}</text><br>
             Forma de Pago : <text class="text-warning"> {{paymentType(offer.payment_type)}}</text> <br>
         </div>
        <!-- BODY -->
        <div class="">
            <div class="w-100 m-2">

                Ten a mano tus objetos :<br>
                 <div class="d-flex justify-content-start">
                    <div v-for="p_object in partner_objects">
                       <img v-if="p_object!=null" class="m-1"  style="height:90px" :src="PATH_PRODUCT_IMG+'/'+p_object.img_ref1+'_thumb'" /> 
                    </div>
                </div>   
                
                
                Y  te llevaremo el objeto de <b>@{{offer.dest_owner_name}}</b><br>
               <img v-if="my_objects!=null && my_objects.length>0 " class=""  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+my_objects[0].img_ref1+'_thumb'" /> 
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

    paymentType(offer)
    {
        if (offer==1)
        {return "Transferencia"}
        if (offer ==2)
        {return "Contra Entrega"}
    },

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


