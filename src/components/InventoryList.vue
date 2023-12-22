<script setup>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue' 
import InventoryList from '../components/InventoryList.vue' 
import InventoryObjectEmpty from '../components/InventoryObjectEmpty.vue' 
import NewObjectForm from '../components/NewObjectForm.vue'
</script>




<template>

<div class=""  >

   
    <!-- Main Options -->
    <div class="d-flex justify-content-between">
      <div>
      </div>

      <div class="d-flex align-items-center mt-3 "  >
        <input  v-model="ftext" style="text-align:center; width:190px;  font-size:23px ;border-radius:15px" class="form-control-sm form-control-sm bg-dark border-0 text-white"  type="text" minlength="4" maxlength="30" size="30" placeholder="( Mi Inventario )"> 
      </div>
     
      <div>
      </div>
    
    </div>
    <!-- End Main Options -->
    <br>

    <!-- LIST ALL INVENTORY OBJECTS-->
    <div>
        <div class="d-flex flex-wrap"> 
          <InventoryObjectEmpty  @click="showNewObjectForm=true" class="m-1"  />
          <div v-for="obj in inventory_objects_filtered"  > 
            <InventoryObject @click="objectDetails=obj ;showModalDetails=true;"  :object=obj class="m-1"   />
          </div>

        </div>
        <div style="height:300px"></div>
    </div>
    <!-- END LIST ALL INVENTORY OBJECTS-->

    <!-- SHOW DETAILED OBJECT DATA -->
    <div v-if="showModalDetails" class="position-absolute top-0 start-10 bg-dark" >
          <div class="" >
                  <div class="d-flex justify-content-end"> 
                  <i @click="showModalDetails=false" class="bi bi-x-lg display-1" ></i>
                  </div>
                  <InventoryObjectDetailed  :object="objectDetails"  :session_data="session_data" />
                  <br>
                  <div  class="d-flex justify-content-center text-danger " >
                    <div @click="showConfirmDelete=true">
                      <i  style="font-size:30px" class="bi bi-trash"></i> Eliminar de mi Inventario  
                    </div>
                  </div>

          </div>
          <div style="height:300px"></div>
    </div>
    <!-- END SHOW DETAILED OBJECT DATA -->


     <!-- ARE YOU SURE YOU WANT TO REMOVE THIS OBJECT -->
      <div v-if="showConfirmDelete"  class="position-absolute top-0 start-10 bg-dark" >
        <div style="" class="d-flex justify-content-end">
            <i  @click="showConfirmDelete=false" style="font-size:50px;" class="display-1 bi bi-x-lg"></i>
        </div>
      <div style="height:100px">
      </div>
          <div class="text-center">
            <text style="font-size:20px">¿Eliminará de tu Inventario ?</text> <br>
          </div>
        <br>
        <i class="bi bi-circle text-danger"></i> Este objeto será eliminado de tu inventario.<br>
        <i class="bi bi-circle text-danger"></i> Se eliminaran tambien Propuestas de Intercambios que tengan este objeto. 
     
        <div class="d-flex justify-content-center mt-4">
        <button @click="showConfirmDeleteDone=true; showConfirmDelete=false" type="button" class="btn btn-danger">Eliminar  <i class="bi bi-arrow-right-short"></i> <i class="bi bi-trash"></i></button>
        </div>

        <div style="height:800px">
        </div>
     
      </div>

    <!-- DELETE CONFIRMATION -->
    <div v-if="showConfirmDeleteDone"  class="position-absolute top-0 start-10 bg-dark w-100" >
       
        <div style="height:100px">
        </div>

        <div class="text-center">
          <text style="font-size:20px"> objeto Eliminado </text> <br>
        </div>
        
        <br>
      
        <div class="d-flex justify-content-center mt-4">
        <button @click="closeInventoyList" type="button" class="btn btn-secondary"> Regresar </button>
        </div>

        <div style="height:800px">
      </div>
    </div>
    <!-- DELETE CONFIRMATION -->
    

   <!-- END ARE YOU SURE YOU WANT TO REMOVE THIS OBJECT -->

    <!-- NEW OBJECT FORM -->
    <div v-if="showNewObjectForm"  class="position-absolute top-0 start-10 bg-dark" >
        <div style="transition: width 2s;" class="d-flex justify-content-end">
            <i  @click="showNewObjectForm=false" style="font-size:50px;" class="display-1 bi bi-x-lg"></i>
        </div>
        <NewObjectForm :session_data="session_data" v-on:closeNewObjectForm="closeNewObjectForm" />
    </div>
    <!-- END NEW OBJECT FORM -->



</div>

</template>

<style scoped>


::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Edge 12-18 */
  color: white;
}

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
        ftext: null, 
        showModalDetails: false,
        showConfirmDelete : false ,
        showNewObjectForm: false ,
        showConfirmDeleteDone : false ,
        inventoryObjects : [{id:1, name:"myplayabc1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2,name:"myplaybcde2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:3,name:"myplayef3", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:4,name:"myplayfghijk4", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:5,name:"myplayklmn5", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:6,name:"myplayabcdefgh6", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:7,name:"myplayhijklmn7", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                           ],   
        inventory_objects_filtered : null ,
                    
      }
  },
  props: ['session_data'],
  emits: ['closeThisModal','closeInventoyList'],

created() {
  console.log("APP CREATED")
  this.inventory_objects_filtered=this.inventoryObjects

    },

methods: {

    closeInventoyList()
    {
      this.$emit('closeInventoyList')
      this.showConfirmDeleteDone=false 
      this.showConfirmDelete = false 
      this.showModalDetails = false 
    },


    closeNewObjectForm()
    {
      this.showNewObjectForm=false
    },
    
    filterByText(ftext)
    {
    console.log("Filter By Text in Search Result:"+ftext)
        if(ftext!=null)
        {
        this.inventory_objects_filtered= this.inventoryObjects.filter(element =>  element.name.toLowerCase().includes(ftext) );
        }
        else 
        {
        this.inventory_objects_filtered=this.inventoryObjects
        }
    },


    closeModalObjectDetails()
    {
      this.showModalDetails= false
    }


    },

watch : {

        ftext(newVal, oldVal)
        {
          console.log("text search "+newVal)
          if(newVal!=null && newVal.length>2)
          {
          this.inventory_objects_filtered= this.inventoryObjects.filter(element =>  element.name.toLowerCase().includes(newVal) );
          }
          else 
          {
          this.inventory_objects_filtered=this.inventoryObjects
          }

        }

      }
}
</script>

