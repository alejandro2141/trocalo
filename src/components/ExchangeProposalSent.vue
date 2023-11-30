<script setup>
import InventoryObjectDetailed from './InventoryObjectDetailed.vue'
import InventoryObject from './InventoryObject.vue'
import InventoryList from './InventoryList.vue'
import InventoryObjectEmpty from './InventoryObjectEmpty.vue'
import ShowSenderTransactionConfirmation from './ShowSenderTransactionConfirmation.vue'

</script>


<template>
<div    style="width: 350px;" >
  <!-- ******************************* -->
  <!--             SHOW STEP 1         -->
  <!-- ******************************* -->
    
  <div v-if="showStep1" >
        <p style="font-size:20px" >Propuestas de Intercambio Enviada</p>
        

          <div style="font-size:20px" class="mb-4 text-center">
              <text>Tiempo Propuesta Restante<br>
               </text> 
              <text class="text-success" style="font-size:40px" > 25 dias </text>
          </div>   


          <div  style="font-size:16px "  class="d-flex justify-content-center">
              Te interesan los siguientes objetos de Kakito_123:  
          </div>
         
        <!-- LIST PARTNER OFFER OBJECT  -->
          <div v-for="obj in partnerOfferObjects" :key="index" > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true'   @click="showModalDetails=true;   objectDetails=obj" :object="obj" class="mb-1"  /> 
          </div>
        <!-- END LIST PARTNER OFFER OBJECT  -->
          
          <div  style="font-size:16px "  class="m-2">
            Y propones cambiarlos por los siguientes objetos: 
          </div>
        
        <!-- LIST MY OFFER OBJECT  -->
           <div v-for="obj in yourOfferObjects" :key="index" class="mb-4" > 
              <InventoryObject  :horizontal_short='true' :showProductDetails='true' @click="showModalDetails=true; objectDetails=obj" :object="obj"    class="mb-1" /> 
          </div>
        <!-- END LIST MY OFFER OBJECT  --> 
                
          <!--
          <div class="d-flex justify-content-between">  
            <div class="form-check-label" for="flexCheckChecked">
              Estas Dispuesto a cambiar por otros productos. 
            </div >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
          </div>
        -->
      
        <br>
          <!-- FOOTER -->
          <div class="display-1 text-success w-100 bg-dark p-3 ">  

            <div class="d-flex justify-content-center">


              <div @click="showCancelMessage=true;  showStep1=false "  class="">
                <button type="button" class="btn btn-danger">Cancelar Propuesta</button>
              </div>

            </div>

          </div>
          <!-- END FOOTER -->
    </div>

   

    <!-- ******************************* -->
    <!--       ACCEPT PROPOSAL FLOW      -->
    <!-- ******************************* -->
    <div v-if="showCancelMessage" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px"> ¿ Esta seguro que desea Cancelar esta oferta ?</p><br>
        
        <div class="d-flex justify-content-around">
            <button @click="showCancelMessage=false ; showAcceptProposal=false;showStep1=true" type="button" class="btn btn-success">Regresar</button>
            <button @click="showCancelMessageConfirmation=true;showCancelMessage=false ; " type="button" class="btn btn-danger">Si deseo Cancelar esta Oferta </button>
        </div>
    </div>

    <!-- ******************************************* -->
    <!--       ACCEPT PROPOSAL FLOW CONFIRMATION     -->
    <!-- ******************************************* -->
    <div v-if="showCancelMessageConfirmation" class="" style="height: 400px;">
        
        <div style="height: 100px;"></div>
        <br>
        
        <p style="font-size:20px" class="text-center">  Propuesta Cancelada  
        </p>
        <br>
        
        <div class="fixed-bottom  d-flex justify-content-center display-1 text-success w-100 bg-dark p-3 " >
           <a href="/OfSent"> <i class="text-success bi bi-house"></i> </a>
        </div>

    </div>

     <!-- SPACE FILLER -->
     <p style="height:300px">
    </p>



</div>
</template>

<style scoped>

</style>


<script>

export default {
  
  data : function() {
      return {
        showStep1 : true , 
        showCancelMessage : false ,
        showCancelMessageConfirmation : false ,

        yourOfferObjects  : [ {id:1 , name:"My inv PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                              {id:1 , name:"My bici aro 20", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                              {id:1 , name:"My inv PS 1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            ],

        partnerOfferObjects : [ 
                            {id:1 ,name:"Partner Inv ps1", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
                            {id:2 ,name:"Partner Inv 2", description : "Consola en buen estado con juegos" , alt1:"Bicicleta"  , alt2:"X BOX"  , alt3:"Maquina de cortar pasto" , otherProducts: true }, 
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
    },

    goToMainSearch()
    {
      console.log("goTOMainSearch")
    },

    },

watch : {
      }
}
</script>

