<template>

  <div class="w-100">


    <div v-if=" !showObjectAndMyInventoryModal">
        <FilterForSearchView  />
    </div>

    <div v-if="showModalDetails">
      <text @click="showModalDetails=false ">X</text>
      <InventoryObjectDetailed  v-on:showObjectAndMyInventory='showObjectAndMyInventory'  v-on:closeModalObjectDetails="closeModalObjectDetails" :session_data="session_data" />
    </div>
    <!-- 
    <InventoryList  v-on:closeThisModal="closeInventoryList" v-if="showModalInventoryList" />
    -->
    <div v-if="showObjectAndMyInventoryModal">
      
      <ShowObjectAndMyInventory  />
    </div>

    <!-- SHOW PUBLIC OBJECTS ARE AVAILABLE FOR SEARCH-->
    <div v-if="showObjectAndMyInventoryModal==false && showModalDetails==false  ">
        <div class="d-flex justify-content-between">
            Objetos Publicos
        </div>
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



  </div>

</template>

<style scoped>

</style>


<script lang="ts">

import InventoryObject from './InventoryObject.vue'
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import ShowObjectAndMyInventory from './ShowObjectAndMyInventory.vue'
import FilterForSearchView from '../components/FilterForSearchView.vue'

export default {

  components: {
    InventoryObject,InventoryObjectDetailed,ShowObjectAndMyInventory,FilterForSearchView
  },
  
  data : function() {
      return {
        showModalDetails: false,
      
        showObjectAndMyInventoryModal : false  
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

