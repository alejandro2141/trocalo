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

    <div class="d-flex justify-content-between"> 
      <div></div>
    
      <i  @click="$emit('closeModal')" class="display-1 bi bi-x-lg"></i>  
    
    </div>

        <p style="font-size:20px" class="text-center"  > Aceptaste este Intercambio</p>
       <!-- TITLE -->
          <div style="font-size:16px" class="mb-4 ">
                         
              <p style="font-size:20px" class="text-center ">
                Tiempo restante <i style="font-size:30px"  class="bi bi-cash "></i> <br>
                <text class="text-warning" style="font-size:30px" > {{ evaluateRemainingDays(offer.date_acceptance) }} dias </text> 
              </p>         
            
            <text style="font-size:16px" >
               @{{offer.source_owner_name}} debe concretar el pago de Retiro y Despacho
            </text>
          </div>       
          
          <!-- LIST MY OFFER OBJECT  -->

          <i style="font-size:30px" class="bi bi-geo-alt text-warning"></i>

          <text style="font-size:16px" class="m-2">
                Tu direccion de retiro: <br>
                Dirección: {{session_data.address_street}}, 
                {{session_data.address_number}} ,
                {{session_data.address_zone2}},
                {{session_data.address_city}}

          <!--
                Departamento:{{session_data.address_apartment}} <br>
                Region:{{session_data.address_zone1}}  <br>
                Comuna: {{session_data.address_zone2}}<br>
                Ciudad{{session_data.address_city}}<br>
                Pais {{session_data.address_country}}<br>
          -->
              
          </text>
           <br>
          <br>

          <div  style="font-size:16px "  class="text-start">
            Tu objeto : 
          </div>
          <div v-for="obj in yourOfferObjects"  class="mb-4" > 
              <InventoryObject  :display_horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; objectDetails=obj" :object="obj"    class="mb-1" /> 
          </div>
          <!-- END LIST MY OFFER OBJECT  --> 
         
          <div  style="font-size:16px "  class="text-start">
            Lo cambias por: 
          </div>
           <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :display_horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
          <!-- END LIST PARTNER OFFER OBJECT  -->

      
        <br>
          <!-- FOOTER -->
          <!-- END FOOTER -->
  </div>
  <!-- ******************************* -->
  <!--       END SHOW STEP 1           -->
  <!-- ******************************* -->


  <div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
                <div class="" >
                        <div class="d-flex justify-content-end"> 
                        <i @click="showModalDetails=false;" class="bi bi-x-lg display-1" ></i>
                        </div>
                        <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModal()" :session_data="session_data" />
                </div>
              <!--
                <div class="m-4 pb-4" v-if="showModalDetails && session_data.id!=null && session_data.id != object.owner_id">
                        <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  " type="button" class="btn btn-primary">Hacer oferta por este producto</button>
                        <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
                </div>   
              -->   
                <br>
                <br>
                <br>  
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
/*
  components: {
    InventoryObjectDetailed,InventoryList,InventoryObjectEmpty,InventoryObject,ShowSenderTransactionConfirmation
  },
*/  
  data : function() {
      return {

        showModalDetails:false ,
        objectDetails : null ,

        showRejectProposal : false ,
        showAcceptProposal : false ,
        showAcceptProposalConfirmation : false ,
        showRejectProposalConfirmation : false ,
        
        showEditProposal : false , 
        showEditProposalSummary : false ,
        showEditProposalSummaryConfirmation : false ,
       
        showStep1 : true , 
        showStep2 : false , 
        showStep3 : false , 
        showStep4 : false , 

        showMyInventory :false ,
        showPartnerInventory : false ,

        yourOfferObjects_temp    : [] ,
        partnerOfferObjects_temp : [] ,

        yourOfferObjects  : [],

        partnerOfferObjects : [],

        /*
        DBmyInventoryObjects :[{id:1 , name:"My inv PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 , name:"My inv PS 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3 , name:"My inv PS 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4 , name:"My inv 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5 , name:"My inv 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6 , name:"My inv 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7 , name:"My inv 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],
        
        DBPartnerInventoryObjects : [{id:1 ,name:"Partner Inv ps1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 ,name:"Partner Inv 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3 ,name:"Partner Inv 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4 ,name:"Partner Inv 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5 ,name:"Partner Inv 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6 ,name:"Partner Inv 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7 ,name:"Partner Inv 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],
                           */

      }
  },
  props: ['session_data', 'offer' ],
  emits: ['closeModal'],

created() {
  console.log("APP CREATED")
  this.loadObjects()
    },

methods: {

  evaluateRemainingDays(timestamp)
    {
        let creationDate = new Date(timestamp)
        let cdate = new Date()

        let days_passed = ( cdate.getTime() - creationDate.getTime() ) / (1000 * 60 * 60 * 24)  ;
        let days_remaining =   3 - days_passed
        return Math.floor(days_remaining)
    },


  async loadObjects()
    {
      let objaux= [ this.offer.dest_object1,this.offer.dest_object2,this.offer.dest_object3,this.offer.dest_object4,this.offer.dest_object5,this.offer.source_object1,this.offer.source_object2,this.offer.source_object3,this.offer.source_object4,this.offer.source_object5 ]  

      objaux = objaux.filter(function (el) { return el != null; });

      let json_request =  { 
        session_data : this.session_data, 
        objects_ids: objaux 
          }

      console.log("JSON :"+JSON.stringify(json_request) )
    
    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_objects", json_request);
    console.log("/private_get_objects  Response:"+JSON.stringify(jsonResponse.data))

    this.partnerOfferObjects=[]
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object1));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object2));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object3));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object4));
    this.partnerOfferObjects.push( jsonResponse.data.find(({id}) => id === this.offer.source_object5));
    
    this.yourOfferObjects = []
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object1 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object2 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object3 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object4 ));
    this.yourOfferObjects.push( jsonResponse.data.find(({id}) =>  id === this.offer.dest_object5 ));

    this.partnerOfferObjects=this.partnerOfferObjects.filter(elements => { return elements != null;   });
    this.yourOfferObjects=this.yourOfferObjects.filter(elements => { return elements != null;   });
 
    console.log("partnerOfferObjects :"+JSON.stringify(this.partnerOfferObjects) )
    console.log("yourOfferObjects :"+JSON.stringify(this.yourOfferObjects) )
    },
    

    addRemoveFromYourOfferObjects_temp(obj)
    {
      this.yourOfferObjects_temp.push(obj) 
    },

    addRemoveFromPartnerOfferObjects_temp(obj)
    {
      this.partnerOfferObjects_temp.push(obj) 
    },

    removeFromYourOfferObjects(obj)
    {
      this.yourOfferObjects= this.yourOfferObjects.filter(element => element.id !== obj.id );
    },

    removeFromPartnerOfferObjects(obj)
    {
      this.partnerOfferObjects= this.partnerOfferObjects.filter(element => element.id !== obj.id );
    },

    goToMainSearch()
    {
      console.log("goTOMainSearch")
    },
    /*
    closeModal()
    {
      this.showModalDetails= false
    },
    */

    },

watch : {
      }
}
</script>

