<template>

  <div class="w-100 ">


    <div class="mt-2" v-if=" !showModalDetails && !showExchangeProposal ">
        <FilterForSearchView  />
    </div>

    <!-- 
    <InventoryList  v-on:closeThisModal="closeInventoryList" v-if="showModalInventoryList" />
    -->
    <!-- SHOW PUBLIC OBJECTS ARE AVAILABLE FOR SEARCH-->
    <div v-if="showExchangeProposal==false && showModalDetails==false  ">
        
        <div class="d-flex flex-wrap"> 
        
          <InventoryObject @click="showModalDetails=true" :showProductDetails="false" :showProductPreference="false"   class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
          <InventoryObject class="m-1"/>
            
        </div>
    </div>


    <!-- 1 Show Object Details-->
    <div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
          <div class="" >
                  <div class="d-flex justify-content-end"> 
                  <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                  </div>
                  <InventoryObjectDetailed  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
          </div>
          
          <div class="m-4 pb-4" v-if="showModalDetails">
                  <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showExchangeProposal=true ; showModalDetails=false  " type="button" class="btn btn-primary">Hacer oferta por este producto</button>
                  <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
          </div>        
    </div>

     <!-- 1 Show Object Details-->
     <div v-if="showExchangeProposal" class="position-absolute top-0 start-10 bg-dark" >
          <div class="d-flex justify-content-end"> 
            <i @click="showExchangeProposal=false ;  showModalDetails=true" class="bi bi-x-lg display-1" ></i>
          </div>
         
         
          <div>
            <ExchangeProposal/>
          </div>        
    </div>




    <!-- 1 Show Object Details-
    <div v-if="showModalDetails" class="" >

      <div class="d-flex justify-content-end"> <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i></div>
          <InventoryObjectDetailed  v-on:showMyInventory='showMyInventory=true'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
      </div>

      <div class="m-4 pb-4" v-if="showModalDetails">
          <button v-if="session_data!=null && session_data.user!=null && !showMyInventory" @click="showMyInventory=true" type="button" class="btn btn-primary">Hacer oferta por este producto</button>
          <button v-else  type="button" class="btn btn-secondary">Debe estar registrado para ofertar</button>
      </div>        

    </div>
  -->
    <!-- 2 Show FORM to Share
    <div v-if="showMyInventory">
        <InventoryList />
    </div>-->
      <!-- Buttons to go 3
      <div v-if="showMyInventory">
        <button @click="showObjectAndMyInventoryModal=true ; showMyInventory=false ; showModalDetails=false "  type="button" class="btn btn-secondary">ENVIAR </button>
      </div>
        -->
    <!-- 3 Show FORM to Share
    <div v-if="showObjectAndMyInventoryModal">
        <ShowObjectAndMyInventory  /> 
    </div>
-->


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
      
        showExchangeProposal : false  
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

