<template>

<div class=""  >

<!--
    <div @click="$emit('closeThisModal')" class="">
         X
    </div>
-->

    <div class="d-flex justify-content-between">
        
      <input class="form-control-sm form-control-sm w-50 bg-dark border-white text-white"  type="text" minlength="4" maxlength="20" size="7" placeholder="Filtrar..."> 
       
    </div>
    <br>
    <div class="d-flex flex-wrap"> 
    
      <div v-for="obj in inventoryObjects" :key="index" > 
        <InventoryObject :object=obj class="m-1"   />
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
        inventoryObjects : [{name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"playStation 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],
        
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

