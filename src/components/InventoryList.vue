<script setup>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue' 
</script>



<template>

<div class=""  >

<!--
    <div @click="$emit('closeThisModal')" class="">
         X
    </div>
-->

    <div class="d-flex justify-content-center">
        
      <input style="text-align:center; font-size:30px" class="form-control-sm form-control-sm w-75 bg-dark border-white text-white"  type="text" minlength="4" maxlength="20" size="7" placeholder="&#9729;&#9730;&#9832;&#9731;&#9814;"> 
       
    </div>
    <br>
    <div class="d-flex flex-wrap"> 
    
      <div v-for="obj in inventoryObjects" :key="index" > 
        <InventoryObject @click="objectDetails=obj ;showModalDetails=true;"  :object=obj class="m-1"   />
      </div>

    </div>

    <div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
          <div class="" >
                  <div class="d-flex justify-content-end"> 
                  <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                  </div>
                  <InventoryObjectDetailed  :object="objectDetails"  :session_data="session_data" />
          </div>
    </div>

    

</div>

</template>

<style scoped>

</style>


<script>

export default {
/*
  components: {
    InventoryObject 
  },
  */
  data : function() {
      return {
        showModalDetails: false,
        inventoryObjects : [{name:"myplay 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"myplay 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"myplay 3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"myplay 4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"myplay 5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"myplay 6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {name:"myplay 7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
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

