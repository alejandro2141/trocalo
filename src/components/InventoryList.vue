<template>

  <div class="w-100 m-2 border border-1 bg-secondary"  >

   
<!--
    <div @click="$emit('closeThisModal')" class="">
         X
    </div>
-->
   

      <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1">Search</label>
        </div>
        <button type="button" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>

    <div class="d-flex flex-wrap"> 
    
      <InventoryObject @click="showModalDetails=true" />
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

</template>

<style scoped>

</style>


<script>

import InventoryObject from './InventoryObject.vue'

export default {

  components: {
    InventoryObject
  },
  
  data : function() {
      return {
        showModalDetails: false
      }
  },
  props: ['session_data'],
  emits: ['closeThisModal'],

created() {
  console.log("APP CREATED")
    },

methods: {
    
    closeModalObjectDetails()
    {
      this.showModalDetails= false
    }

    },

watch : {
      }
}
</script>

