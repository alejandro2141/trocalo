<script setup>
import ProposalReceived from     '../components/ProposalReceived.vue'  
import ProposalReceivedDetails from   '../components/ProposalReceivedDetails.vue'

import ProposalReceivedAccepted from     '../components/ProposalReceivedAccepted.vue'  
import ProposalReceivedAcceptedDetails from   '../components/ProposalReceivedAcceptedDetails.vue'

import ProposalReceivedInTransfer from     '../components/ProposalReceivedInTransfer.vue'  
import ProposalReceivedInTransferDetails from     '../components/ProposalReceivedInTransferDetails.vue'  

import ProposalReceivedCancelled from   '../components/ProposalReceivedCancelled.vue'
import ProposalReceivedCancelledDetails from   '../components/ProposalReceivedCancelledDetails.vue'

import ProposalReceivedClosedSuccessfully from   '../components/ProposalReceivedClosedSuccessfully.vue'
import ProposalReceivedClosedSuccessfullyDetails from   '../components/ProposalReceivedClosedSuccessfullyDetails.vue'

import ProposalReceivedExpired from   '../components/ProposalReceivedExpired.vue'
import ProposalReceivedExpiredDetails from   '../components/ProposalReceivedExpiredDetails.vue'

import ProposalReceivedAcceptedExpired from   '../components/ProposalReceivedAcceptedExpired.vue'
import ProposalReceivedAcceptedExpiredDetails from   '../components/ProposalReceivedAcceptedExpiredDetails.vue'


import ProposalReceivedEndedDetails from   '../components/ProposalReceivedEndedDetails.vue'

/*import OfReceivedItemList from '../components/OfReceivedItemList.vue'*/
import InventoryList  from     '../components/InventoryList.vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'
</script>


<template>
 
<div class="">
  <div v-if='session_data!=null'>

  <div style="height:20px">
  </div>

  <div v-if='  !( showExchangeProposalReceivedAcceptedExpired ||  showExchangeProposalReceivedExpired || showExchangeProposalReceived || showExchangeProposalReceivedAccepted || showExchangeProposalReceivedEnded || showExchangeProposalReceivedInTransfer || showExchangeProposalReceivedCancelled  || showExchangeProposalReceivedClosedSuccessfully ) '>
    <p class=" text-center" style="font-size:26px; color:#91D5FE ; ">Recibidas </p>


      <!-- PROP RECEIVED -->
         <!--  <p class=" text-start" style="font-size:20px; ">Porpuestas de Intercambio </p> -->
          <p class="text-secondary " style="font-size:12px" >A la espera que aceptes o rechaces estas propuestas </p>
            
            <div class="d-flex flex-wrap">
              <div v-for="of in ofReceived" class="" > 

                <!-- IF is blocked object -->
                <ProposalReceived v-if="getObjBlocked([of.dest_object1,of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5]) == null"  class="m-2" @click="ofSelected=of ; showExchangeProposalReceived=true"  :offer='of' :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])'    />
                <!-- ELSE is an available object -->
                <ProposalReceived v-else class="m-2"  :offer='of' :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])'    />


              </div>
            </div>
      <!-- END PROP RECEIVED -->

          <br>

      <!-- OF SENT ACCEPTED -->
          <p class=" text-start" style="font-size:20px">Aceptadas </p>
          <p class="text-secondary" style="font-size:12px" >A la espera que quien te envio la propuesta debe pagar los costos de retiro y despacho  </p>
         <div class="d-flex flex-wrap">
            <div v-for="of in ofAccepted"  > 
              <ProposalReceivedAccepted  class="m-2" :accepted='true' @click="ofSelected=of ;showExchangeProposalReceivedAccepted=true"  :offer='of' :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])' />
            <br>
            </div>
          </div>
      <!-- OF SENT ACCEPTED -->
        

      <br>

      <!-- OF IN TRANSFER -->
          <p class=" text-start" style="font-size:20px"> En Despacho <i class="bi bi-truck"></i> </p>
          <p class="text-secondary" style="font-size:12px" >Los objetos estan en ruta para su recoleccion y despacho  </p>
        
        <div class="d-flex flex-wrap">
          <div v-for="of in ofInTransfer"  > 
              <ProposalReceivedInTransfer  class="m-2" :accepted='true' @click="ofSelected=of ;showExchangeProposalReceivedInTransfer=true"  :offer='of' :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])' />
              <br>
          </div>
        </div>
        
      <!-- OF SENT ACCEPTED -->


          <br>

      <!-- OF CANCELLED   -->
          <p class="text-start" style="font-size:20px">Recibidas Finalizadas</p>
          <p class="text-secondary" style="font-size:12px" >Propuestas que han expirado o fueron canceladas.</p>
          <div class="text-secondary">
            
            <div v-for="of in ofCancelled"  > 
              <ProposalReceivedCancelled  :ended=true  class="m-1" @click="ofSelected=of ;showExchangeProposalReceivedCancelled=true"  :offer='of'  />
              <br>
            </div>

            <div v-for="of in ofClosedSuccessfully"  > 
              <ProposalReceivedClosedSuccessfully :ended=true  class="m-1" @click="ofSelected=of ;showExchangeProposalReceivedClosedSuccessfully=true"  :offer='of'  />
              <br>
            </div>

            <div v-for="of in ofExpired"  > 
              <ProposalReceivedExpired :ended=true  class="m-1" @click="ofSelected=of ;showExchangeProposalReceivedExpired=true"  :offer='of'  />
              <br>
            </div>

            <div v-for="of in ofAcceptedExpired"  > 
              <ProposalReceivedAcceptedExpired :ended=true  class="m-1" @click="ofSelected=of ;showExchangeProposalReceivedAcceptedExpired=true"  :offer='of'  />
              <br>
            </div>


          </div>
          
      <!-- OF SENT ENDED -->

  </div>  

  <div style="height:150px">
  
  </div>

<!-- OF DETAILED  -->  
    <div  v-if="showExchangeProposalReceived"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedDetails :offer='ofSelected' :session_data="session_data" v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedAccepted"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedAcceptedDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedInTransfer"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedInTransferDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedCancelled"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedCancelledDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>
    
    <div  v-if="showExchangeProposalReceivedClosedSuccessfully"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedClosedSuccessfullyDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedExpired"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedExpiredDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedAcceptedExpired"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedAcceptedExpiredDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>



  <!--
    <div  v-if="showExchangeProposalSentAccepted"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
         <ExchangeProposalSentAccepted  v-on:close="closeModal" />
    </div>

    <div  v-if="showExchangeProposalSentEnded"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
         <ExchangeProposalSentEnded   v-on:close="closeModal" />
    </div>
  -->

    <!--  
      <div class="position-absolute top-0 start-10 bg-dark" >
        <div class="d-flex justify-content-end"> <i @click="showItemList=true" class="display-1 bi bi-x-lg"></i>  </div>
        <ExchangeProposalReceived v-on:closeExchangeProposalReceived="closeExchangeProposalReceived" />
      </div>
    -->
  </div>
  <div v-else>
        Ir a Login
    </div>

</div>


</template>

<style>

</style>


<script>

export default {
  
  data : function() {
      return {
        showItemList:true ,

        showExchangeProposalReceived : false , 
        showExchangeProposalReceivedAccepted : false ,
        showExchangeProposalReceivedInTransfer : false ,
        showExchangeProposalReceivedCancelled : false ,
        showExchangeProposalReceivedClosedSuccessfully : false ,
        showExchangeProposalReceivedExpired : false ,
        showExchangeProposalReceivedAcceptedExpired : false ,
       

        showExchangeProposalReceivedEnded : false ,


        ofReceived : [],
        ofAccepted : [],
        ofInTransfer : [],
        ofCancelled : [],
        ofClosedSuccessfully : [],
        ofExpired : [],
        ofAcceptedExpired : [],


        ofSelected : null ,
        objectsProposal: [] ,

      }
  },
  props: ['session_data'],
  emits: [],

created() {
    console.log("--- CREATED ViewProposalReceived ")
    this.getProposalsReceived()
    console.log("--- CREATED ViewProposalReceived AFTER getPRoposalsReceived ")
    },

methods: {

    async getProposalsReceived()
    {
      console.log("--- getPRoposalsReceived")
      let json_request = 
      {
        session_data : this.session_data,
      }

      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_proposals_received", json_request);
      console.log("/private_get_proposals_received Response:"+JSON.stringify(response_json.data))
      //this.inventoryObjects = jsonResponse.data
      //this.inventory_objects_filtered=this.inventoryObjects

      let proposals = []
      proposals = response_json.data

       //filter 
      this.ofReceived = proposals.filter(item => item.status ==  1).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofAccepted = proposals.filter(item => item.status ==  100).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofInTransfer = proposals.filter(item => item.status ==  200).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofCancelled = proposals.filter(item => item.status ==  300).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofClosedSuccessfully = proposals.filter(item => item.status ==  400).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofExpired = proposals.filter( item =>  item.status ==  500 ).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofAcceptedExpired = proposals.filter( item =>  item.status ==  101 ).sort((a, b) => (a.id > b.id) ? 1 : -1);
      
      // Objects Ids to obtain objects images  
        let objectsIds= proposals.map((prop) => [prop.source_object1, prop.source_object2, prop.source_object3, prop.source_object4, prop.source_object5, prop.dest_object1,prop.dest_object2,prop.dest_object3,prop.dest_object4,prop.dest_object5] );
       
        objectsIds = await Array.prototype.concat(...objectsIds);
        objectsIds =  await objectsIds.filter(item => item != null );
      
        console.log("--- OBJECTS IDS :  "+JSON.stringify(objectsIds))   

        this.objectsProposal = await this.loadObjects(objectsIds)

        console.log("--- OBJECTS PROPOSALS :  "+JSON.stringify(this.objectsProposal))

    },

    async loadObjects( objIds)
    { 
      objIds = objIds.filter(function (el) { return el != null; });

      let json_request =  { 
        session_data : this.session_data, 
        objects_ids: objIds 
          }
      // console.log("JSON :"+JSON.stringify(json_request) )
      let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_objects", json_request);
      //  console.log("/private_get_objects  Response:"+JSON.stringify(jsonResponse.data))
      return (jsonResponse.data)
    },

     getObjects(ids)
    {
      //let object = await this.objectsProposal.filter( obj => obj.id  ===  id )
    //  let objectFound =  this.objectsProposal.find((element) => element.id == id );

    let objectsFound =  this.objectsProposal.filter((element) =>  ids.includes(element.id) ) 

     // console.log("--------- OBJECTS  BUSCAR id:"+id+"  En el array de objetos:"+JSON.stringify(this.objectsProposal)  )
      console.log ("-------- getObjects OBJECTS FOUND :"+JSON.stringify(objectsFound)+ " " )
      return objectsFound 
    },

    getObjBlocked(ids)
    {
      let all_objects =  this.objectsProposal.filter((element) =>  ids.includes(element.id) ) 
      const found = all_objects.find((element) => element.blocked_due_proposal_accepted);
      if ( found === undefined) 
        {
            return null 
        }
       else 
       {
            return found
       };

    },

   
        
    closeModal()
    {
      this.showExchangeProposalReceived = false  
      this.showExchangeProposalReceivedAccepted = false 
      this.showExchangeProposalReceivedEnded = false 
      this.showExchangeProposalReceivedInTransfer = false 
      this.showExchangeProposalReceivedCancelled = false 
      this.showExchangeProposalReceivedClosedSuccessfully = false 
      this.showExchangeProposalReceivedExpired = false 
      this.showExchangeProposalReceivedAcceptedExpired= false 
      this.getProposalsReceived()
    }


    },

watch : {
      }
}
</script>


