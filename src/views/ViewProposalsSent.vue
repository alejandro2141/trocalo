<script setup>
import ProposalSent from     '../components/ProposalSent.vue'
/*import InventoryList  from     '../components/InventoryList.vue'*/
import ProposalSentDetails from   '../components/ProposalSentDetails.vue'
import ExchangeProposalSentAccepted from   '../components/ExchangeProposalSentAccepted.vue'
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

<!-- OF SENT -->
    <p class="text-white text-center" style="font-size:20px">Enviadas </p>
    <p class="text-secondary" style="font-size:12px" >A la espera de que el otro usuario acepte el intercambio </p>
    <div v-for="of in ofSent"  > 
        <ProposalSent  class="m-1" @click="showExchangeProposalSent=true ; offerSent=of"  :offer='of'  />
    </div>
<!-- OF SENT -->

    <br>

<!-- OF SENT ACCEPTED -->
    <p class=" text-center" style="font-size:16px">Aceptadas </p>
    <p class="text-secondary" style="font-size:12px" >Debes pagar monto indicado de transporte y despacho para completar el intercambio de objetos </p>
    <div v-for="of in ofAccepted"  > 
        <ProposalSent class="m-1" :accepted='true' @click="showExchangeProposalSentAccepted=true ; offerSentAccepted=of"  :offer='of'  />
    </div>
<!-- OF SENT ACCEPTED -->
  
    <br>

<!-- OF SENT ENDED -->
    <p class="text-secondary text-center" style="font-size:16px">Finalizadas </p>
    <div class="text-secondary">
      <div v-for="of in ofEnded"  > 
        <ProposalSent  class="m-1" @click="showExchangeProposalSentEnded=true;  offerSentEnded=of"  :offer='of'  />
      </div>
    </div>
<!-- OF SENT ENDED -->

    <div  v-if="showExchangeProposalSent"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
          <ProposalSentDetails         :session_data="this.session_data" :offer="offerSent"         v-on:closeExchangeProposalSent="closeModal" />
    </div>

    <div  v-if="showExchangeProposalSentAccepted"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
         <ExchangeProposalSentAccepted :session_data="this.session_data" :offer="offerSentAccepted" v-on:close="closeModal" />
    </div>

    <div  v-if="showExchangeProposalSentEnded"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
         <ExchangeProposalSentEnded  :session_data="this.session_data" :offer="offerSentEnded"  v-on:close="closeModal" />
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
        showExchangeProposalSent : false , 
        showExchangeProposalSentAccepted : false ,
        showExchangeProposalSentEnded : false ,

        offerSent:null,
        offerSentAccepted:null,
        offerSentEnded:null,

        ofSent : [],
        
        ofAccepted : [],
        
        ofEnded : [],

      }
  },
  props: ['session_data'],
  emits: [],

created() {
    this.getProposalsSent()
    },

methods: {

    async getProposalsSent()
    {
    console.log("Get Proposals update list")
    let response_json = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_proposals_sent",this.session_data);
    console.log("/private_get_proposals_sent Response:"+JSON.stringify(response_json.data))
    let proposals = response_json.data

    //filter 
    this.ofSent = proposals.filter(item => item.status ==  1).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofAccepted = proposals.filter(item => item.status ==  100).sort((a, b) => (a.id > b.id) ? 1 : -1);
    this.ofEnded = proposals.filter(item => item.status ==  200).sort((a, b) => (a.id > b.id) ? 1 : -1);
    },

    closeModal()
    {
      this.getProposalsSent()
      this.showExchangeProposalSent=false
      this.showExchangeProposalSentAccepted=false
      this.showExchangeProposalSentEnded=false
    },


    },

watch : {
      }
}
</script>


