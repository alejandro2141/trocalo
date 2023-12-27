<script setup>
import ProposalReceived from     '../components/ProposalReceived.vue'  
import ProposalReceivedDetails from   '../components/ProposalReceivedDetails.vue'
import ProposalReceivedAcceptedDetails from   '../components/ProposalReceivedAcceptedDetails.vue'
import ProposalReceivedEndedDetails from   '../components/ProposalReceivedEndedDetails.vue'

/*import OfReceivedItemList from '../components/OfReceivedItemList.vue'*/
import InventoryList  from     '../components/InventoryList.vue'

</script>


<template>
 
<div class="">
  <div v-if='session_data!=null'>

  <div style="height:20px">
  </div>

<!-- OF SENT -->
    <p class="text-white text-center" style="font-size:20px">Recibidas </p>
    <p class="text-secondary" style="font-size:12px" >A la espera  que apruebes o rechaces las propuestas </p>
    <div v-for="of in ofReceived"  > 
        <ProposalReceived class="m-1" @click="showExchangeProposalReceived=true"  :offer='of'  />
    </div>
<!-- OF SENT -->

    <br>

<!-- OF SENT ACCEPTED -->
    <p class=" text-center" style="font-size:16px">Aceptadas </p>
    <p class="text-secondary" style="font-size:12px" >Debes pagar monto indicado de transporte y despacho para completar el intercambio de objetos </p>
    <div v-for="of in ofAccepted"  > 
        <ProposalReceived  class="m-1" :accepted='true' @click="showExchangeProposalReceivedAccepted=true"  :offer='of'  />
    </div>
<!-- OF SENT ACCEPTED -->
  
    <br>

<!-- OF SENT ENDED -->
    <p class="text-secondary text-center" style="font-size:16px">Finalizadas </p>
    <div class="text-secondary">
      <div v-for="of in ofEnded"  > 
        <ProposalReceived  class="m-1" @click="showExchangeProposalReceivedEnded=true"  :offer='of'  />
      </div>
    </div>
<!-- OF SENT ENDED -->

  
    <div  v-if="showExchangeProposalReceived"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedDetails from  v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedAccepted"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedAcceptedDetails from  v-on:closeModal="closeModal()" />
    </div>

    <div  v-if="showExchangeProposalReceivedEnded"  class="position-absolute top-0 start-0 bg-dark w-100 d-flex justify-content-center" >
        <ProposalReceivedEndedDetails from  v-on:closeModal="closeModal()" />
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
        showExchangeProposalReceivedEnded : false ,


        ofReceived : [  
                            {id:1 , name:"abcgame 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true , category_1: 1 ,  category_2: 2 ,  amount: '17990'  , status: 5  }, 
                            {id:2 , name:"bcdesport  2", description : "Consola en buen estado con 3 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_333"  , otherObj: false , category_1: 2  , category_2: 3 ,  amount: '17990' , status: 5 }, 
                            {id:3 , name:"efghi 3", description : "Consola en buen estado con 4 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_444" , otherObj: true , category_1: 3  , category_2: 4,  amount: '17990' , status: 5 }, 
                            {id:4 , name:"abhijkl 4", description : "Consola en buen estado con 5 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_555" , otherObj: false, category_1: 4  , category_2: 5,  amount: '17990' , status:5  } , 
                            {id:5 , name:"AlguienPlay 5", description : "Consola en buen estado con 6 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_6666", otherObj: true, category_1: 5  , category_2: 6,  amount: '17990' , status: 5  }, 
                       
                        ],
        
        ofAccepted : [  
                            {id:1 , name:"abcgame 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true , category_1: 1 ,  category_2: 2  ,  amount: '17990' , status: 2  }, 
                            {id:2 , name:"bcdesport  2", description : "Consola en buen estado con 3 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_333"  , otherObj: false , category_1: 2  , category_2: 3,  amount: '17990' , status: 2   }, 
                            {id:3 , name:"efghi 3", description : "Consola en buen estado con 4 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_444" , otherObj: true , category_1: 3  , category_2: 4,  amount: '17990' , status: 2  }, 
                            {id:4 , name:"abhijkl 4", description : "Consola en buen estado con 5 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_555" , otherObj: false, category_1: 4  , category_2: 5,  amount: '17990' , status: 2  } , 
                            {id:5 , name:"AlguienPlay 5", description : "Consola en buen estado con 6 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_6666", otherObj: true, category_1: 5  , category_2: 6,  amount: '17990' , status: 2  }, 
                          ],
        
        ofEnded : [  
                            {id:1 , name:"abcgame 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true , category_1: 1 ,  category_2: 2 ,  amount: '17990' , status: 3   }, 
                            {id:2 , name:"bcdesport  2", description : "Consola en buen estado con 3 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_333"  , otherObj: false , category_1: 2  , category_2: 3 ,  amount: '17990' , status: 4  }, 
                            {id:3 , name:"efghi 3", description : "Consola en buen estado con 4 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_444" , otherObj: true , category_1: 3  , category_2: 4,  amount: '17990' , status: 4  }, 
                            {id:4 , name:"abhijkl 4", description : "Consola en buen estado con 5 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_555" , otherObj: false, category_1: 4  , category_2: 5 ,  amount: '17990' , status: 3  } , 
                            {id:5 , name:"AlguienPlay 5", description : "Consola en buen estado con 6 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_6666", otherObj: true, category_1: 5  , category_2: 6,  amount: '17990' , status: 4  }, 
                        ],

      }
  },
  props: ['session_data'],
  emits: [],

created() {
    },

methods: {

    async getProposalsReceived(searchParams)
    {
    let params= {};

    let jsonResponse = await axios.post(BKND_CONFIG.BKND_HOST+"/private_get_proposals_received", this.session_data);
    console.log("/private_get_proposals_received Response:"+JSON.stringify(jsonResponse.data))
    
    //this.inventoryObjects = jsonResponse.data
    //this.inventory_objects_filtered=this.inventoryObjects

    },

    
    closeModal()
    {
      this.showExchangeProposalReceived = false  
      this.showExchangeProposalReceivedAccepted = false 
      this.showExchangeProposalReceivedEnded = false 
    }


    },

watch : {
      }
}
</script>


