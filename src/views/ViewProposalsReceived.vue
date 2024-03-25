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

  <div v-if='  !(showExchangeProposalReceived || showExchangeProposalReceivedAccepted || showExchangeProposalReceivedEnded || showExchangeProposalReceivedInTransfer || showExchangeProposalReceivedCancelled  || showExchangeProposalReceivedClosedSuccessfully ) '>

      <!-- OF SENT -->
          <p class="text-white text-center" style="font-size:20px">Recibidas </p>
          <p class="text-secondary" style="font-size:12px" >A la espera  que apruebes o rechaces las propuestas </p>
          <div v-for="of in ofReceived"  > 
              <ProposalReceived class="m-1" @click="ofSelected=of ; showExchangeProposalReceived=true"  :offer='of'  />
          </div>
      <!-- OF SENT -->

          <br>

      <!-- OF SENT ACCEPTED -->
          <p class=" text-center" style="font-size:20px">Aceptadas </p>
          <p class="text-secondary" style="font-size:12px" >A la espera que quien te envio la propuesta debe pagar los costos de retiro y despacho  </p>
          <div v-for="of in ofAccepted"  > 
              <ProposalReceivedAccepted  class="m-1" :accepted='true' @click="ofSelected=of ;showExchangeProposalReceivedAccepted=true"  :offer='of'  />
          <br>
          
          </div>
      <!-- OF SENT ACCEPTED -->
        

      <br>

      <!-- OF IN TRANSFER -->
          <p class=" text-center" style="font-size:20px"> <i class="bi bi-truck"></i> En Despacho </p>
          <p class="text-secondary" style="font-size:12px" >Los objetos estan en ruta para su recoleccion y despacho  </p>
        
          <div v-for="of in ofInTransfer"  > 
              <ProposalReceivedInTransfer  class="m-1" :accepted='true' @click="ofSelected=of ;showExchangeProposalReceivedInTransfer=true"  :offer='of'  />
              <br>
              
          </div>
        
      <!-- OF SENT ACCEPTED -->


          <br>

      <!-- OF CANCELLED   -->
          <p class="text-center" style="font-size:20px">Finalizadas y Canceladas </p>
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
       

        showExchangeProposalReceivedEnded : false ,


        ofReceived : [],
        
        ofAccepted : [],

        ofInTransfer : [],
        ofCancelled : [],
        ofClosedSuccessfully : [],

        ofSelected : null ,

      }
  },
  props: ['session_data'],
  emits: [],

created() {
      this.getProposalsReceived()
    },

methods: {

    async getProposalsReceived()
    {
      let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_proposals_received", this.session_data);
      console.log("/private_get_proposals_received Response:"+JSON.stringify(response_json.data))
      //this.inventoryObjects = jsonResponse.data
      //this.inventory_objects_filtered=this.inventoryObjects

      let proposals = response_json.data

      //filter 
      this.ofReceived = proposals.filter(item => item.status ==  1).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofAccepted = proposals.filter(item => item.status ==  100).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofInTransfer = proposals.filter(item => item.status ==  200).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofCancelled = proposals.filter(item => item.status ==  300).sort((a, b) => (a.id > b.id) ? 1 : -1);
      this.ofClosedSuccessfully = proposals.filter(item => item.status ==  400).sort((a, b) => (a.id > b.id) ? 1 : -1);


    },
    
    closeModal()
    {
      this.showExchangeProposalReceived = false  
      this.showExchangeProposalReceivedAccepted = false 
      this.showExchangeProposalReceivedEnded = false 
      this.showExchangeProposalReceivedInTransfer = false 
      this.showExchangeProposalReceivedCancelled = false 
      this.showExchangeProposalReceivedClosedSuccessfully = false 
      this.getProposalsReceived()
    }


    },

watch : {
      }
}
</script>


