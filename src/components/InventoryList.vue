<template>

  <div class="w-100 m-2 border border-1 bg-secondary"  >

   

    <div @click="$emit('closeThisModal')" class="">
         X
    </div>
    <div class="d-flex justify-content-between">
        Selecciona Objetos de tu Inventario
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

