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

    <div class="d-flex justify-content-between">
      <div> 
      <!--  <i style="font-size:36px"  class="bi bi-truck text-success"></i>  -->
      </div>

      <i  @click="$emit('close')" class="display-1 bi bi-x-lg"></i>  
    
    </div>

        <p style="font-size:26px" class="text-center" > Intercambio Rechazado</p>
     
        <p class="text-center">
          <i style="font-size:60px" class="bi text-secondary bi-emoji-tear"></i><br>
          <b> {{offer.dest_owner_name}} </b> Rechazó tu propuesta<br>
            <br> ¡Sigue intercambiando!
        </p>

        <br>

    
          <div  style="font-size:16px "  class="text-start">
           Objeto de tu intres: 
          </div>
          <div v-for="obj in yourOfferObjects"  class="mb-4" > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; objectDetails=obj" :object="obj"    class="mb-1" /> 
          </div>
          <!-- END LIST MY OFFER OBJECT  --> 
         
          <div  style="font-size:16px "  class="text-start">
           Proponias cambiarlo por :  
          </div>
           <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects"  > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
          <!-- END LIST PARTNER OFFER OBJECT  -->

      
        <br>
          <!-- FOOTER -->
          <!-- END FOOTER -->
  </div>
  <!-- ******************************* -->
  <!--       END SHOW STEP 1           -->
  <!-- ******************************* -->

          <!-- SPACE FILLER -->
          <p style="height:300px">
          </p>

</div>
</template>

<style scoped>

</style>


<script>

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
  emits: ['close'],

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

