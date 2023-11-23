<template>

  <div class="w-100 ">


    <div class="m-2" v-if=" !showModalDetails && !showExchangeProposal ">
        <FilterForSearchView  />
    </div>

    
    <!-- 1- SHOW PUBLIC OBJECTS ARE AVAILABLE FOR SEARCH-->
    <div v-if="showExchangeProposal==false && showModalDetails==false" >
        
        <div class="d-flex flex-wrap"> 
          <div v-for="obj in objects" :key="index" > 
            <InventoryObject @click="objectDetails=obj ;showModalDetails=true;" :object=obj :showProductDetails="false" :showProductPreference="false"   class="m-1"/>
          </div>
        </div>
    
    </div>

    <!-- 2- Show Object Details-->
    <div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
          <div class="" >
                  <div class="d-flex justify-content-end"> 
                  <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                  </div>
                  <InventoryObjectDetailed :showMakeOffer=false  :object=objectDetails  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
          </div>
          
          <div class="m-4 pb-4" v-if="showModalDetails">
                  <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  " type="button" class="btn btn-primary">Hacer oferta por este producto</button>
                  <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
          </div>        
    </div>

     <!-- 3 Show Exchange Proposal -->
    <div v-if="showExchangeProposal" class="position-absolute top-0 start-10 bg-dark" >
          <div class="d-flex justify-content-end"> 
            <i @click="showExchangeProposal=false ;  showModalDetails=true" class="bi bi-x-lg display-1" ></i>
          </div>
         
         
          <div>
            <ExchangeProposal :objectProposal=objectDetails />
          </div>        
    </div>


</div>
  
</template>

<style scoped>

</style>


<script lang="ts">

import InventoryObject from './InventoryObject.vue'
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import FilterForSearchView from '../components/FilterForSearchView.vue'
import InventoryList from '../components/InventoryList.vue' 
import ExchangeProposal from '../components/ExchangeProposal.vue'

export default {

  components: {
    InventoryObject,InventoryObjectDetailed,FilterForSearchView,InventoryList,ExchangeProposal
  },
  
  data : function() {
      return {
        showModalDetails: false,
        showMyInventory:false ,
        showExchangeProposal : false  ,

        objectDetails : null, 

        //trae desde BKND
        objects : [         {name:"AlguienPlay 1", description : "Consola en buen estado con 2 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_222"  , otherObj: true }, 
                            {name:"AlguienPlay 2", description : "Consola en buen estado con 3 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito_333"  , otherObj: false}, 
                            {name:"AlguienPlay 3", description : "Consola en buen estado con 4 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_444" , otherObj: true }, 
                            {name:"AlguienPlay 4", description : "Consola en buen estado con 5 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_555" , otherObj: false}, 
                            {name:"AlguienPlay 5", description : "Consola en buen estado con 6 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_6666", otherObj: true}, 
                            {name:"AlguienPlay 6", description : "Consola en buen estado con 7 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_7777", otherObj: false}, 
                            {name:"AlguienPlay 7", description : "Consola en buen estado con 8 juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true , owner: "Kaquito1_8888", otherObj: true}, 
                           ],


      }
  },
  props: ['session_data'],
  emits: ['sessionCreated'],

created() {
  console.log("APP CREATED")
    },

methods: {
    closeObjectAndMyInventoryModal()
    {
      console.log("Close inventory List")
      this.showObjectAndMyInventoryModal = false 
    },
    closeModalObjectDetails()
    {
      this.showModalDetails= false
    },
    showObjectAndMyInventory()
    {
      console.log("showObjectAndMyInventory");
      this.showModalDetails = false 
      this.showObjectAndMyInventoryModal = true
    }

    },

watch : {
      }
}
</script>

