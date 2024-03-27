<script setup>

import InventoryObject from './InventoryObject.vue'
import PaymentProcessStart from './PaymentProcessStart.vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>
<div    style="width: 350px;" >
        
    <div v-if="showSendAccepted" >

    <div class="d-flex justify-content-between"> 
    <div></div>

    <i  @click="$emit('closeModal')" class="display-1 bi bi-x-lg"></i>  

    </div>

        <p style="font-size:20px" class="text-center"  > Intercambio Aceptado</p>
    <!-- TITLE -->
        <div style="font-size:16px" class="mb-4 ">
                        
            <p style="font-size:20px" class="text-center text-warning">
                Tiempo restante <i style="font-size:30px"  class="bi bi-cash text-warning"></i> <br>
                <text class="" style="font-size:30px" > {{ evaluateRemainingDays(offer.date_acceptance) }} </text> dias
            </p>         
            
            <p class="text-center">
                <text class="text-center text-warning" style="font-size:26px" >
                 Debes Pagar $10.000 clp
                </text>
            </p>

            <text class="test-center" style="font-size:16px" >
                Para concretar el pago de Retiro y Despacho de los objetos 
            </text>


        </div>       
        
        <!-- LIST MY OFFER OBJECT  -->

        <i style="font-size:30px" class="bi bi-geo-alt text-warning"></i>

        <text style="font-size:16px" class="m-2">
                Tu direccion para el retiro de tu objeto: <br>
                Dirección: {{session_data.address_street}} <br>
                Numero: {{session_data.address_number}}<br>
                Departamento:{{session_data.address_apartment}} <br>
                Region:{{session_data.address_zone1}}  <br>
                Comuna: {{session_data.address_zone2}}<br>
                Ciudad{{session_data.address_city}}<br>
                Pais {{session_data.address_country}}<br>
            
        </text>
        <br>
        <br>

        <div  style="font-size:16px "  class="text-start">
            Tu objeto : 
        </div>
        <div v-for="obj in yourOfferObjects"  class="mb-4" > 
            <InventoryObject  :horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; objectDetails=obj" :object="obj"    class="mb-1" /> 
        </div>
        <!-- END LIST MY OFFER OBJECT  --> 
        
        <div  style="font-size:16px "  class="text-start">
            Lo cambias por: 
        </div>
        <!-- LIST PARTNER OFFER OBJECT  -->
        <div v-for="obj in partnerOfferObjects"  > 
            <InventoryObject  :horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
        </div>
        <!-- END LIST PARTNER OFFER OBJECT  -->

    
        <br>
        <!-- FOOTER -->

                  <!-- FOOTER -->
        <div class="display-1 text-success w-100 bg-dark p-3 ">  
            <div class="d-flex justify-content-center">
                <div @click="startPaymentProcess(offer)"  class="">
                    <button type="button" class="btn btn-danger">Pagar Despacho y Retiro</button>
                </div>
            </div>
        </div>



        <!-- END FOOTER -->
    </div>


    <div v-else>
      <PaymentProcessStart :offer="offer" v-on:close="closePaymentProcessStart"/>
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

        showSendAccepted : true , 

        yourOfferObjects  : [],

        partnerOfferObjects : [],

        }
  },
  props: ['session_data','offer'],
  emits: ['closeModal'],

created() {
  console.log("APP CREATED")
  //Get the objects are in the proposal 
     this.loadObjects() 


    },

methods: {
  closePaymentProcessStart()
  {
    this.showSendAccepted = true 
  },

    startPaymentProcess(of)
  {
    console.log("Start Payment Process")
    this.showSendAccepted = false 
    /*
    showPaymentStep0=false 
    showPaymentStep1=true
    showStep1=false 
    */
  },


    evaluateRemainingDays(timestamp)
    {
        /*
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
        */

        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   3 - days_passed
        return Math.floor(days_remaining)

    },



    
/**
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
*/
    
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

