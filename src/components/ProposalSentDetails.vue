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
<div    style="width: 350px;" >
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showStep1" >


    <div class="d-flex justify-content-end"> <i  @click="$emit('closeExchangeProposalSent')" class="display-1 bi bi-x-lg"></i>  </div>

        <p style="font-size:20px" >Propuestas de Intercambio Enviada</p>

          <div style="font-size:20px" class="mb-4 text-center">
              <text>Tiempo Propuesta Restante<br>
               </text> 
              <text class="text-success" style="font-size:40px" > 25 dias </text>
          </div>   

          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Te interesan los siguientes objetos de {{offer.dest_owner_name}}:  
          </div>
         
        <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
        <!-- END LIST PARTNER OFFER OBJECT  -->
          
          <div  style="font-size:16px "  class="m-2">
            Y propones cambiarlos por los siguientes objetos: 
          </div>
        
        <!-- LIST MY OFFER OBJECT  -->
           <div v-for="obj in yourOfferObjects"  class="mb-4" > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; objectDetails=obj" :object="obj"    class="mb-1" /> 
          </div>
        <!-- END LIST MY OFFER OBJECT  --> 
                
          <!--
          <div class="d-flex justify-content-between">  
            <div class="form-check-label" for="flexCheckChecked">
              Estas Dispuesto a cambiar por otros productos. 
            </div >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          </div>
        -->
      
        <br>
          <!-- FOOTER -->
          <div class="display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-center">


              <div @click="showCancelMessage=true;  showStep1=false "  class="">
                <button type="button" class="btn btn-danger">Cancelar Propuesta</button>
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
    </div>

   

    <!-- ******************************* -->
    <!--       CANCEL PROPOSAL FLOW      -->
    <!-- ******************************* -->
    <div v-if="showCancelMessage" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> ¿ Esta seguro que desea Cancelar esta oferta ?</p><br>
        
        <div class="d-flex justify-content-around">
            
            <button @click="cancelMyProposal(offer.id);" type="button" class="btn btn-danger">Si deseo Cancelar <br> esta Oferta </button>
            
            <button @click="showCancelMessage=false ; showAcceptProposal=false;showStep1=true" type="button" class="btn btn-success"> 
                <i class="bi bi-arrow-left-square"></i> Regresar
            </button>
        
        </div>
    </div>

    <!-- ******************************************* -->
    <!--       CANCEL CONFRIM PROPOSAL FLOW          -->
    <!-- ******************************************* -->
    <div v-if="showCancelMessageConfirmation" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px" class="text-center">  Propuesta de Intercambio ha sido Cancelada 
        </p>
        <br>
        <p style="font-size:20px" @click="$emit('closeExchangeProposalSent')" class="text-center text-success"> 
          <i class="bi bi-arrow-left-square"></i> Regresar  a Enviadas
        </p>

    </div>

    
     <!-- SPACE FILLER -->
     <p style="height:300px">
    </p>



</div>
</template>

<style scoped>

</style>


<script>

export default {
  
  data : function() {
      return {
        showStep1 : true , 
        showCancelMessage : false ,
        showCancelMessageConfirmation : false ,

        yourOfferObjects  : [],

        partnerOfferObjects : [],

        }
  },
  props: ['session_data','offer'],
  emits: ['closeExchangeProposalSent'],

created() {
  console.log("APP CREATED")
  //Get the objects are in the proposal 
     this.loadObjects() 


    },

methods: {

    async cancelMyProposal(id)
    {
      console.log("Cancel My Proposal "+id)
      let json_request =  { 
        session_data : this.session_data, 
        object_id: id
          }

    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/cancel_proposal", json_request);
    console.log("/cancel_proposal  Response:"+JSON.stringify(jsonResponse.data))
    
     this.showCancelMessageConfirmation=true
     this.showCancelMessage=false ;

    },
    
    async loadObjects()
    {
      let objaux= [ this.offer.dest_object1, this.offer.dest_object2, this.offer.dest_object3, this.offer.dest_object4, this.offer.dest_object5, this.offer.source_object1,this.offer.source_object2,this.offer.source_object3,this.offer.source_object4,this.offer.source_object5 ]  

      objaux = objaux.filter(function (el) { return el != null; });

      let json_request =  { 
        session_data : this.session_data, 
        objects_ids: objaux 
          }

      console.log("JSON :"+JSON.stringify(json_request) )
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_objects", json_request);
    console.log("/private_get_objects  Response:"+JSON.stringify(jsonResponse.data))
    

    //const result = jsonResponse.data.find(({id }) => id === this.offer.dest_object1);

    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.dest_object1));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.dest_object2));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.dest_object3));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.dest_object4));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.dest_object5));
    
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.source_object1 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.source_object2 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.source_object3 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.source_object4 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.source_object5 ));

    /*

    this.yourOfferObjects.push(jsonResponse.data[1])
    this.yourOfferObjects.push(jsonResponse.data[2])
    this.yourOfferObjects.push(jsonResponse.data[3])
    this.yourOfferObjects.push(jsonResponse.data[4])
*/
    console.log("partnerOfferObjects :"+JSON.stringify(this.partnerOfferObjects) )
    console.log("yourOfferObjects :"+JSON.stringify(this.yourOfferObjects) )

    },

    closeModalObjectDetails()
    {
      this.showModalDetails= false
    },

    goToMainSearch()
    {
      console.log("goTOMainSearch")
    },

    },

watch : {
      }
}
</script>

