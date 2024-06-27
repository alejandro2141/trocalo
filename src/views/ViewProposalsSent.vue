<script setup>
import ProposalSent from     '../components/ProposalSent.vue'
import ProposalSentDetails from   '../components/ProposalSentDetails.vue'
import ProposalSentAccepted from     '../components/ProposalSentAccepted.vue'
import ProposalSentAcceptedDetails from     '../components/ProposalSentAcceptedDetails.vue'

import ProposalSentInTransfer from '../components/ProposalSentInTransfer.vue'
import ProposalSentInTransferDetails from '../components/ProposalSentInTransferDetails.vue'

import ProposalSentCancelled from '../components/ProposalSentCancelled.vue'
import ProposalSentCancelledDetails from '../components/ProposalSentCancelledDetails.vue'

import ProposalSentClosedSuccessfully from '../components/ProposalSentClosedSuccessfully.vue'
import ProposalSentClosedSuccessfullyDetails from '../components/ProposalSentClosedSuccessfullyDetails.vue'


import ProposalSentExpired from   '../components/ProposalSentExpired.vue'
import ProposalSentExpiredDetails from   '../components/ProposalSentExpiredDetails.vue'

import ProposalSentAcceptedExpired from   '../components/ProposalSentAcceptedExpired.vue'
import ProposalSentAcceptedExpiredDetails from   '../components/ProposalSentAcceptedExpiredDetails.vue'


/*import InventoryList  from     '../components/InventoryList.vue'*/

import ExchangeProposalSentEnded  from   '../components/ExchangeProposalSentEnded.vue'

import { BKND_CONFIG } from '../../config.js'
import axios from 'axios'



</script>


<template>

<div>


  <div v-if='session_data!=null'>

  <div style="height:20px">
  </div>
  
  <!--
      <div style="font-size:20px" class="text-secondary w-100 text-center">
       Enviadas
      </div>

    <br>
    -->
  <div v-if='!(showProposalSentDetails || showProposalSentAcceptedDetails || showProposalSentInTransferDetails || showProposalSentCancelledDetails || showProposalSentClosedSuccessfullyDetails)' >
      <!-- OF SENT -->
          <p class="text-center" style="font-size:26px ; color:#17C000 ;">Enviadas </p>
          <p class="text-secondary" style="font-size:12px" >A la espera de que el otro usuario acepte el intercambio </p>
          <div v-for="of in ofSent"  > 
              <ProposalSent  class="m-0" @click="showProposalSentDetails =true ; offerSent=of"  :offer='of'   :object1="getObjectProposal(of)" :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])'  />
              <br>
          </div>
      <!-- OF SENT -->

          <br>

      <!-- OF SENT ACCEPTED -->
          <p class=" text-start" style="font-size:20px">Aceptadas </p>
          <p class="text-secondary" style="font-size:12px" >Debes pagar monto indicado para completar el intercambio </p>
          <div v-for="of in ofAccepted"  > 
              <ProposalSentAccepted class="m-1" :accepted='true' @click="showProposalSentAcceptedDetails = true; offerSentAccepted=of"  :offer='of'  :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])' />
              <br>
          </div>
      <!-- OF SENT ACCEPTED -->
        
          <br>

      <!-- OF ON TRANSFER THE WAY -->
          <p class=" text-start" style="font-size:20px"> <i class="bi bi-truck"></i> En Despacho </p>
          <p class="text-secondary" style="font-size:12px" >Los objetos estan en ruta para su recoleccion y despacho  </p>
        
          <div v-for="of in ofInTransfer"  > 
              <ProposalSentInTransfer  class="m-2" :accepted='true' @click="ofSelected=of ;showProposalSentInTransferDetails=true"  :offer='of'   :my_objects='getObjects([of.dest_object1])' :partner_objects='getObjects([of.source_object1,of.source_object2,of.source_object3,of.source_object4,of.source_object5])'  />
              <br>
          </div>
      <!-- OF IN TRANSFER -->

      <br>


      <!-- OF CANCELLED   -->
          <p class="text-start" style="font-size:20px">Finalizadas y Canceladas </p>
          <p class="text-secondary" style="font-size:12px" >Propuestas que han expirado o fueron canceladas.</p>
          <div class="text-secondary">
            
            <div v-for="of in ofCancelled"  > 
              <ProposalSentCancelled  :ended=true  class="m-2" @click="ofSelected=of ;showProposalSentCancelledDetails=true"  :offer='of' :object1="getObjectProposal(of)" />
              <br>
            </div>

            <div v-for="of in ofClosedSuccessfully"  > 
              <ProposalSentClosedSuccessfully :ended=true  class="m-2" @click="ofSelected=of ;showProposalSentClosedSuccessfullyDetails=true"  :offer='of'  :object1="getObjectProposal(of)" />
              <br>
            </div>

            <div v-for="of in ofExpired"  > 
              <ProposalSentExpired :ended=true  class="m-1" @click="ofSelected=of ;showExchangeProposalSentExpired=true"  :offer='of'  />
              <br>
            </div>

            <div v-for="of in ofAcceptedExpired"  > 
              <ProposalSentAcceptedExpired :ended=true  class="m-1" @click="ofSelected=of ;showExchangeProposalSentAcceptedExpired=true"  :offer='of'  />
              <br>
            </div>

          </div>





  </div>
<!-- OF SENT ENDED -->

    <div  v-if="showProposalSentDetails"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
          <ProposalSentDetails         :session_data="this.session_data" :offer="offerSent"         v-on:close="closeModal" />
    </div>

    <div  v-if="showProposalSentAcceptedDetails"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
         <ProposalSentAcceptedDetails :session_data="this.session_data" :offer="offerSentAccepted" v-on:close="closeModal" />
    </div>

    <div  v-if="showProposalSentInTransferDetails"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalSentInTransferDetails :offer='ofSelected' :session_data="session_data"   v-on:close="closeModal" />
    </div>

    <div  v-if="showProposalSentCancelledDetails"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalSentCancelledDetails :offer='ofSelected' :session_data="session_data"   v-on:close="closeModal" />
    </div>
    
    <div  v-if="showProposalSentClosedSuccessfullyDetails"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalSentClosedSuccessfullyDetails :offer='ofSelected' :session_data="session_data"   v-on:close="closeModal" />
    </div>

    <div  v-if="showExchangeProposalSentExpired"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalSentExpiredDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalSentAcceptedExpired"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalSentAcceptedExpiredDetails :offer='ofSelected' :session_data="session_data"   v-on:closeModal="closeModal()" />
    </div>



  <div style="height:120px">
  </div>


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
/*
        showExchangeProposalSent : false , 
        showExchangeProposalSentAccepted : false ,
        showExchangeProposalReceivedInTransfer : false ,
        showExchangeProposalReceivedCancelled : false ,
        showExchangeProposalReceivedClosedSuccessfully : false ,
*/

        showProposalSentDetails : false ,
        showProposalSentAcceptedDetails : false ,
        showProposalSentInTransferDetails : false ,
        showProposalSentCancelledDetails : false ,
        showProposalSentClosedSuccessfullyDetails  : false ,
        showExchangeProposalSentExpired : false ,
        showExchangeProposalSentAcceptedExpired : false ,
        

        ofSent:null,
        ofAccepted:null,
        ofInTransfer : null ,
        ofCancelled : null ,
        ofClosedSuccessfully : null ,
        ofExpired : [],
        ofAcceptedExpired : [],


        objectImages : [],

        objectsProposal: [] ,
        
      }
  },
  props: ['session_data'],
  emits: [],

created() {
    this.getProposalsSent()
    },

methods: {

    getObjectProposal(offer)
    {
      //SEARCH IMAGE 
      return this.objectImages.find(elem => elem.id ==  offer.dest_object1  )
    },

    async getProposalsSent()
    {
    console.log("Get Proposals update list")
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_proposals_sent",this.session_data);
    console.log("/private_get_proposals_sent Response:"+JSON.stringify(response_json.data))
    let proposals = response_json.data.proposals

    this.objectImages=response_json.data.objects
    
    //filter 
    this.ofSent = proposals.filter(item => item.status ==  1).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofSent.sort((a, b) =>  b.id - a.id);

    this.ofAccepted = proposals.filter(item => item.status ==  100).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofAccepted.sort((a, b) =>  b.id - a.id);

    this.ofInTransfer = proposals.filter(item => item.status ==  200).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofInTransfer.sort((a, b) =>  b.id - a.id);  
    
    this.ofCancelled = proposals.filter(item => item.status ==  300).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofCancelled.sort((a, b) =>  b.id - a.id);  
    
    this.ofClosedSuccessfully = proposals.filter(item => item.status ==  400).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofClosedSuccessfully.sort((a, b) =>  b.id - a.id);  

    this.ofExpired = proposals.filter( item =>  item.status ==  500 ).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofAcceptedExpired = proposals.filter( item =>  item.status ==  101 ).sort((a, b) => (a.id > b.id) ? 1 : -1);

    
      // Objects Ids to obtain objects images  
      let objectsIds= proposals.map((prop) => [prop.source_object1, prop.source_object2, prop.source_object3, prop.source_object4, prop.source_object5, prop.dest_object1,prop.dest_object2,prop.dest_object3,prop.dest_object4,prop.dest_object5] );
       
       objectsIds = await Array.prototype.concat(...objectsIds);
       objectsIds =  await objectsIds.filter(item => item != null );
     
       console.log("--- OBJECTS IDS :  "+JSON.stringify(objectsIds))   

       this.objectsProposal = await this.loadObjects(objectsIds)

       console.log("--- OBJECTS PROPOSALS SENT :  "+JSON.stringify(this.objectsProposal))


/*
      this.ofReceived = proposals.filter(item => item.status ==  1).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofAccepted = proposals.filter(item => item.status ==  100).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofInTransfer = proposals.filter(item => item.status ==  200).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofCancelled = proposals.filter(item => item.status ==  300).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofClosedSuccessfully = proposals.filter(item => item.status ==  400).sort((a, b) => (a.id > b.id) ? 1 : -1);
*/
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






    closeModal()
    {
     
      this.showProposalSentDetails = false 
      this.showProposalSentAcceptedDetails = false 
      this.showProposalSentInTransferDetails = false 
      this.showProposalSentCancelledDetails = false 
      this.showProposalSentClosedSuccessfullyDetails = false 
      this.showExchangeProposalSentExpired = false ,
      this.showExchangeProposalSentAcceptedExpired = false ,

      this.getProposalsSent()
     

    },


    },

watch : {
      }
}
</script>


