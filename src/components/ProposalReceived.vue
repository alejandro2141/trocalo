<script setup  >
import { PATH_PRODUCT_IMG } from '../../config.js'

</script>

<template>
 
 <div>
   

   <div class="border border-1 rounded" :class="{'text-warning border-warning': accepted }"   >
 
   

    <div v-if="offer.status!=200"  class="d-flex justify-content-between">
        <div v-if="isNewProposal()" class="bg-success text-start opacity-50 text-white" style="width:70px;height:20px; border-radius: 0px 0px 10px 0px;" > 
            &nbsp;&nbsp; Nuevo
        </div>
        
        <div v-if="offer.negotiation_loop>0" class="bg-warning text-start opacity-50 text-dark" style="width:120px;height:20px; border-radius: 0px 0px 0px 10px;" > 
            &nbsp; &nbsp;contra oferta({{offer.negotiation_loop}})
        </div>

    </div>

        <div >
            <div class="d-flex justify-content-between">
                
                <div class=" m-2 ">      
                    <b>{{offer.source_owner_name}}</b> 
                    te propone intercambiar:<br>
                  <!--  {{offer.title}} -->  
                </div>
                
                
                <div v-if="offer.status!=200"  style="font-size:19px" class="d-flex justify-content-end m-2"  >
                    <div>
                        <div  class="text-center">
                                <i style="font-size:30px" class="bi bi-clock-history"></i>
                        </div>

                        <div  class="">
                                {{ evaluateRemainingDays(offer.timestamp) }} dias
                        </div>
                    </div>
                </div>


            </div>
            <div class="d-flex justify-content-start">
                
               
                Tu Objeto<br>
                <div>
                    <img v-if="my_objects!=null && my_objects.length>0 " class=""  style="width:60px" :src="PATH_PRODUCT_IMG+'/'+my_objects[0].img_ref1" /> 
                
                </div>

                <div> 
                    <i style="font-size:36px" class="bi bi-arrow-left-right"></i>  
                </div>
                
                <div v-if="partner_objects != null && partner_objects.length >0 " >
                    telocambiapor<br>
                    <div v-for="p_object in partner_objects">
                       
                        <img v-if="p_object!=null" class=""  style="width:60px" :src="PATH_PRODUCT_IMG+'/'+p_object.img_ref1" /> 
                
                    </div>
                </div>
            </div>
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
  props: ['session_data','accepted' ,'offer','my_objects', 'partner_objects' ],
  emits: [],

created() {

    console.log(" CREATED Proposal Received "+this.my_objects)

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


