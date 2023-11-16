<template>

<div class=""  >

<!--
    <div @click="$emit('closeThisModal')" class="">
         X
    </div>
-->

    <div class="d-flex justify-content-between">
        
      <input class="form-control form-control-sm w-50 bg-dark text-white"  type="text" minlength="4" maxlength="20" size="7" placeholder="buscar"> 
       
    </div>
    <br>
    <div class="d-flex flex-wrap"> 
    
      <div v-for="index in inventoryObjects" :key="index" > 

        <InventoryObject class="m-1"   />
         
      </div>
    

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
        showModalDetails: false,
        inventoryObjects : [false,false,false,false,false,false,false,false,false,false,false,false ] ,
        
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

