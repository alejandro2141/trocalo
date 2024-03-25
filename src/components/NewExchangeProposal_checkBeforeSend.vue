<script setup>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>

<template>
<div  class="position-absolute top-0 start-0 bg-dark w-100"  >

   
       <!-- TITLE -->
      <div  class="w-100 d-flex justify-content-center"  > 
      <div style="width:350px"> 
       
        <div class="d-flex justify-content-end m-0 "  > 
                <i @click="closeModal()" class="bi bi-x-lg display-1" ></i>
        </div>

        <text style="font-size:20px">Revise la propuesta antes de enviar </text><br>

        <br>
          <div class="d-flex justify-content-between">
              <div class="align-self-center" style="font-size:16px " >Propuesta válida por: 
                    <text v-if="proposal_summary!=null">
                        {{proposal_summary.proposal_duration}}
                    </text>
                    Dias.
                </div>
          </div>
          <br>
          
          <div>
                <div style="font-size:16px">
                  Deberás pagar retiro y despacho<br>
                  <text style="font-size:20px" class="text-warning"> $10.000 </text>Clp <br>
                  
                </div>      
          </div>
          <br>

          <div   style="font-size:16px "  class="d-flex justify-content-start">
            <div>
              Objeto de tu interes, pertenece a:
               <text  v-if="proposal_summary!=null && proposal_summary.objectYouWant!=null" class="fw-bold">  {{proposal_summary.objectYouWant.owner_name}}</text>
            </div>
          </div>

          <!-- LIST PARTNER OBJECT-->
          <div v-if="proposal_summary!=null" class="d-flex align-content-stretch flex-wrap">
            <InventoryObject :object=proposal_summary.objectYouWant  :horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/> 
          </div>
          
          <!-- END LIST PARTNER OBJECT-->
    <br>
          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
                Objetos que ofreces a cambio:
          </div>
          
           <!-- LIST MY OBJECT  -->
          <div v-if="proposal_summary!=null" class="d-flex align-content-stretch flex-wrap">
        
            
            <div v-for="obj in proposal_summary.objectsYouOfferList"  class="d-flex justify-content-start"  > 
              <InventoryObject :object=obj :horizontal_short="true" :showProductDetails="true"   @click="showPartnerObjectDetailed=true"/>
            </div>
            
          </div>

          <div style="height:200px">
          </div>
       
      </div>  

      </div>

          <!-- FOOTER -->
       
            <!-- FOOTER -->
            <div v-if="true" class="fixed-bottom  d-flex justify-content-center  text-success  bg-dark p-3 ">  
              <div @click="goToNextStep()" style="width:350px" class="d-flex justify-content-center border border-2 border-success  "> 
                <div class="d-flex justify-content-start">
                  <div   class="d-flex justify-content-center">
                    <div >
                      
                      <text style="font-size:36px">Siguiente </text>
                      <text>
                          <i style="font-size:36px" class="bi bi-caret-right"></i> 
                      </text>
                    
                    </div>
                  </div>
                  <!-- 
                    <div  @click="goToNextStep()" class="">
                        <i class="bi bi-check2 display-4 text-success p-1 m-1"> </i> 
                    </div>
                    <text style="font-size:20px" >Siguente</text>
                  -->
                </div>
              </div>
              <br>
            </div>
          <!-- END FOOTER -->
      
          <!-- END FOOTER -->

</div>

</template>

<style scoped>

</style>


<script>


export default {

  
  data : function() {
      return {
      
        }
  },
  props: ['session_data','proposal_summary'],
  emits: ['nextStep','closeModal'],

created() {
    console.log("Check Before Send : OBJECTS: "+JSON.stringify(this.proposal_summary) )
    },

methods: {
  
    closeModal()
    {
        this.$emit('closeModal')
    },

    async goToNextStep()
    {
      let params= { 
            proposal_duration : this.proposal_summary.proposal_duration  ,
            session_data      : this.session_data   ,
            object_wanted     : this.proposal_summary.objectYouWant  , 
            objects_offered   : this.proposal_summary.objectsYouOfferList ,
          };
        
      console.log("Sending to Save Proposal :"+JSON.stringify(params))
    
      let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/save_proposal", params )
      console.log("/save_proposal Response:"+JSON.stringify(jsonResponse.data))
    
      this.$emit('nextStep',this.proposal_summary)
    },


    },

watch : {
      }
}
</script>

