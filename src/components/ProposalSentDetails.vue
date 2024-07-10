<script setup  >
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


    <div class="d-flex justify-content-end"> <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>  </div>

        <p style="font-size:20px" >Propuestas de Intercambio Enviada</p>

        <div style="font-size:20px" class="m-3 d-flex justify-content-center" >
          
          <div class="text-center">
           Tiempo Espera Restante <i style="font-size:30px" class="bi bi-clock-history"> </i><br>
            <text class="" style="font-size:30px" >  {{ evaluateRemainingDays(offer.timestamp)}} dias </text>
          </div>
        
        </div>  
          
        <div style="font-size:20px" class="m-3 d-flex justify-content-center" >
          
          <div class="text-center">
           Costo Retiro y Despacho <br>
           <text class="text-warning" style="font-size:30px" > ${{ formatAmount(offer.amount) }} </text>
          </div>
        
        </div>  



          <div  style="font-size:16px "  class="d-flex justify-content-start">
              Te interesa el objeto de <b>{{offer.dest_owner_name}}</b> :  
          </div>
         
        <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :display_horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true; showStep1=false ;  objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
        <!-- END LIST PARTNER OFFER OBJECT  -->
          
          <div  style="font-size:16px "  class="m-2">
            Propones cambiarlo por: 
          </div>
        
        <!-- LIST MY OFFER OBJECT  -->
           <div v-for="obj in yourOfferObjects"  class="mb-4" > 
              <InventoryObject  :display_horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; showStep1=false ;  objectDetails=obj" :object="obj"    class="mb-1" /> 
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


<!-- ******************************* -->
<!--         SHOW OBJECT DETAILS     -->
<!-- ******************************* -->

<div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
      <div class="" >
          <div class="d-flex justify-content-end"> 
            <i @click="showModalDetails=false; showStep1=true ; "  class="bi bi-x-lg display-1" ></i>
          </div>
          <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModal()" :session_data="session_data" />
      </div>
              <!--
                <div class="m-4 pb-4" v-if="showModalDetails && session_data.id!=null && session_data.id != object.owner_id">
                        <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  " type="button" class="btn btn-primary">Hacer oferta por este producto</button>
                        <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
                </div>   
              -->     
</div>

    
     <!-- SPACE FILLER -->
     <p style="height:300px">
    </p>



</div>
</template>

<style scoped>

</style>


<script  >

export default {
  
  data : function() {
      return {
        showStep1 : true , 
        showCancelMessage : false ,
        showCancelMessageConfirmation : false ,
        showModalDetails : false ,

        yourOfferObjects  : [],

        partnerOfferObjects : [],

        }
  },
  props: ['session_data','offer'],
  emits: ['close'],

created() {
  console.log("APP CREATED")
  //Get the objects are in the proposal 
     this.loadObjects() 


    },

methods: {

    formatAmount(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
    }, 

    evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
    },


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
/*
    closeModal()
    {
      console.log("aaaaaaaaaaaaaaaaaaa")
      //this.showModalDetails= false
      this.showModalDetails=false;
      this.showStep1=true

    },
    */

watch : {
      }
}
</script>

