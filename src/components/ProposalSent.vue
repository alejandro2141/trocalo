<script setup  >
    import { PATH_PRODUCT_IMG } from '../../config.js'
</script>

<template>
 
 <div>
  
    <div class="border border-1  " style="border-radius: 15px; width:350px"   >

        <div class="d-flex justify-content-between">
          
            <div v-if="isNewProposal()" class="text-success text-start"  style="margin-top: -0.7em; margin-left: -0.5em; font-size:20px"> 
                <i  class="bi bi-star-fill"> </i>
            </div>
            <div v-else>
            </div>

            <text> Enviada a @{{offer.dest_owner_name}} </text>

            <div class="text-warning">
            {{ evaluateRemainingDays(offer.timestamp) }} dias  <i style="font-size:20px" class="bi bi-clock-history"></i>
            </div>

        </div>

        <!-- BODY -->  
      

        <div class="d-flex justify-content-around">
                
                <!--COLUMN 1-->
                <div class="d-flex  flex-column m-1"> 
                    <text class="text-secondary" >Su Objeto</text>
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
                    <text class="text-secondary">Tus Objetos </text>
                    
                    <div v-for="p_object in partner_objects">
                       
                       <img v-if="p_object!=null" class="m-1"  style="width:80px" :src="PATH_PRODUCT_IMG+'/'+p_object.img_ref1+'_thumb'" /> 
               
                    </div>
                <br>

                </div>

            
        </div>





<!-- 
        <div class="d-flex justify-content-between">
            <div class="w-75 m-2">      
                Enviada a <b> {{offer.dest_owner_name}}</b> <br>
            </div>
            
            <div style="font-size:19px" class=" w-25 m-0 d-flex justify-content-end" >
                <div style="font-size:19px" class="m-1 text-center" >
                        
                    <div v-if="offer.user_id_creator !=  offer.user_id_destination ">
                        <i style="font-size:19px" class="bi bi-truck"></i> ${{offer.amount}} 
                    </div>

                </div>
                
                <div class="m-1 text-center">
                   
                    <i class="bi bi-clock-fill"></i> 
                     {{ evaluateRemainingDays(offer.timestamp) }}dias
                </div>

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
  props: ['session_data','accepted','offer','object1' ,'my_objects', 'partner_objects'  ],
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


