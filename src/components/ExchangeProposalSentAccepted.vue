<script setup  >
//import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
//import InventoryList from './InventoryList.vue'
//import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
//import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'

import PaymentProcessStart from './PaymentProcessStart.vue'


import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'

</script>


<template>
<div    style="width: 350px;" >
    
  <div v-if="showSendAccepted">

    <div class="d-flex justify-content-between">
      <i style="font-size:36px"  class="bi bi-cash-coin text-warning"></i> 
      
      <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>  
    
    </div>

        <p class="text-center" style="font-size:20px" >Aceptada por {{offer.dest_owner_name}} </p>
        

          <div style="font-size:16px" class="mb-4 text-center">
            
            <p class="text-center">
                Te quedan  
                    <text style="font-size:26px"> {{ evaluateRemainingDaysToPay(offer.date_acceptance) }} </text> 
                dias <br>para  realizar el pago de Recoleccion y despacho.
                
                <br>
                <text style="font-size:26px"> $ {{ amountFormatter(offer.amount) }} </text>
                
                <br>
                <br>

                <text>Concretado el pago, el intercambio se realiza por nuestro equipo de transporte</text>
            </p>

          </div>   

          
          <div  style="font-size:16px "  class="d-flex justify-content-start">
             Cambias 
          </div>
         
        <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
        <!-- END LIST PARTNER OFFER OBJECT  -->
          
          <div  style="font-size:16px "  class="">
           Por tu objetos. 
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

              <div @click="startPaymentProcess(offer)"  class="">
                <button type="button" class="btn btn-danger">Pagar Despacho y Retiro</button>
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
    </div>

<!-- START PAYMENT PROCESS -->
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


<script  >

export default {
  
  data : function() {
      return {

        showSendAccepted : true , 

        yourOfferObjects  : [],
        partnerOfferObjects : [],
        }
  },
  props: ['session_data', 'offer' ],
  emits: ['close'],

created() {
  console.log("APP CREATED")
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

    amountFormatter(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //return "aaaaa"
    },


  evaluateRemainingDaysToPay(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   3 - days_passed
        return Math.floor(days_remaining)
    },


  evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   this.offer.proposal_days - days_passed
        return Math.floor(days_remaining)
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

